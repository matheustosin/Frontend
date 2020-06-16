import React from 'react';
import Container from './StyledComponents';
import Hours from './StyledComponents/Hours';
import Label from './StyledComponents/Label';
import Details from './StyledComponents/Details';

import RedeHorarioButton from '../RedeHorarioButton/RedeHorarioButton';
import RedeMarcarMentoria from '../RedeMarcarMentoria/RedeMarcarMentoria';

function RedeHorarioCard() {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <>
        <RedeMarcarMentoria
          opened={open}
          image="https://dev.observatoriodocinema.bol.uol.com.br/wp-content/uploads/2020/06/Lucifer-1.jpg"
          title="MENTORIA DOS DESEJOS"
          userName="Lucifer Morningstar"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfBdI21oSQQ1LqYxuDeprAalebgLjC0LnXrnLRuZ_7yof0Ah7i&usqp=CAU"
          date="29/03/2020"
          hour="19:00"
          onClose={() => setOpen(false)}
          onConfirm={(evt) => console.log('Mentoria: ', evt)}
        />
      </>
      <Details style={{ borderBottom: 'none' }}>
        <Label>Data</Label>
        <Label>Hora</Label>
      </Details>
      <Details>
        <Label>20/04/2020</Label>
        <Hours>
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
        </Hours>
      </Details>
      <Details>
        <Label>20/04/2020</Label>
        <Hours>
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
        </Hours>
      </Details>
      <Details>
        <Label>20/04/2020</Label>
        <Hours>
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
          <RedeHorarioButton horario="22:45" onClick={() => setOpen(true)} />
        </Hours>
      </Details>
    </Container>
  );
}

export default RedeHorarioCard;
