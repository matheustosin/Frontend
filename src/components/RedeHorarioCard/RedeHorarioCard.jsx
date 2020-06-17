import React from 'react';
import Container from './StyledComponents';
import Hours from './StyledComponents/Hours';
import Label from './StyledComponents/Label';
import Details from './StyledComponents/Details';
import { urlFiles } from '../../services/http';
import RedeHorarioButton from '../RedeHorarioButton/RedeHorarioButton';
import RedeMarcarMentoria from '../RedeMarcarMentoria/RedeMarcarMentoria';
import { marcarMentoria } from '../../services/mentoria';

function RedeHorarioCard({ mentoria }) {
  const [open, setOpen] = React.useState(false);
  const [timeInfo, setTimeInfo] = React.useState('');
  const [dateInfo, setDateInfo] = React.useState('');
  const [busyInfo, setBusyInfo] = React.useState([]);
  const [indexBusy, setIndexBusy] = React.useState('');
  const { dateTime } = mentoria;

  const sortedDates = dateTime
    .sort((dateTimeA, dateTimeB) => dateTimeA.dayOfTheMonth.split('/')[0] - dateTimeB.dayOfTheMonth.split('/')[0])
    .sort((dateTimeA, dateTimeB) => dateTimeA.dayOfTheMonth.split('/')[1] - dateTimeB.dayOfTheMonth.split('/')[1]);

  const timeInformation = sortedDates.map((dt, index) => {
    console.log('hit');
    if (busyInfo[index] !== undefined) busyInfo[index] = dt.times[0].flagBusy;
    else busyInfo.push(dt.times[0].flagBusy);
    // eslint-disable-next-line max-len
    const hours = dt.times.map((time) => (
      <RedeHorarioButton
        ocupado={busyInfo[index]}
        horario={time.hour}
        onClick={() => {
          const bkp = busyInfo;
          bkp[index] = true;
          setBusyInfo(bkp);
          setIndexBusy(index);
          setTimeInfo(time.hour);
          setDateInfo(dt.dayOfTheMonth);
          setOpen(true);
        }}
      />
    ));

    return (
      <Details key={dt.dayOfTheMonth}>
        <Label>{dt.dayOfTheMonth}</Label>
        <Hours>
          {hours}
        </Hours>
      </Details>
    );
  });

  function onConfirm(data) {    
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    marcarMentoria(headers, { idMentoria: mentoria.idMentoria, choice: data })
      .then((res) => {
        if (res.status === 200) {
          dateTime.forEach((el, index) => {
            if (el.dayOfTheMonth === data.date && el.times[0].hour) {sortedDates[index].times[0].flagBusy = true;}
          });
          console.log('mentoria marcada');
        } else {
          console.log('Falha ao marcar mentoria. Código: ', res.status);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <Container>
      <>
        <RedeMarcarMentoria
          opened={open}
          image={`${urlFiles}/${mentoria.image}`}
          title={mentoria.title}
          userName={mentoria.mentorInfos.name}
          userImage={`${urlFiles}/${mentoria.mentorInfos.image}`}
          date={dateInfo}
          hour={timeInfo}
          onClose={() => setOpen(false)}
          onConfirm={(evt) => onConfirm(evt)}
        />
      </>
      <Details style={{ borderBottom: 'none' }}>
        <Label>Data</Label>
        <Label>Hora</Label>
      </Details>
      {timeInformation}
    </Container>
  );
}

export default RedeHorarioCard;
