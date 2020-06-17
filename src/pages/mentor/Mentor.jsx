import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import StyledContainer from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import RedeTimeSlot from '../../components/RedeTimeSlot/RedeTimeSlot';
// import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import { mentoriasByMentor, desativarMentoria, mudarVisibilidade } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import RedeButton from '../../components/RedeButton/RedeButton';
import { userTypes } from '../../utils/userType.constants';
import RedeMarcarMentoria from '../../components/RedeMarcarMentoria/RedeMarcarMentoria';

function Mentor() {
  const history = useHistory();
  const [mentorias, setMentorias] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const sortMentoriasHours = (mentoriasMentor) => {
    for (let i = 0; i < mentoriasMentor.length; i += 1) {
      mentoriasMentor[i].data.dateTime.sort((a, b) => {
        const firstSplitDate = a.dayOfTheMonth.split('/');
        const secondSplitDate = b.dayOfTheMonth.split('/');
        const firstSplitHour = a.times[0].hour.split(':');
        const secondSplitHour = b.times[0].hour.split(':');
        const first = new Date(firstSplitDate[2], firstSplitDate[1],
          firstSplitDate[0], firstSplitHour[0], firstSplitHour[1]);
        const second = new Date(secondSplitDate[2], secondSplitDate[1],
          secondSplitDate[0], secondSplitHour[0], secondSplitHour[1]);
        if (first > second) {
          return 1;
        } if (second > first) {
          return -1;
        }
        return 0;
      });
    }
    return mentoriasMentor;
  };

  const transformMentoriasHours = (mentoriasMentor) => {
    const backup = mentoriasMentor;
    for (let i = 0; i < mentoriasMentor.length; i += 1) {
      const max = mentoriasMentor[i].data.dateTime.length;
      if (max >= 3) mentoriasMentor[i].data.dateTime.splice(3);
      else mentoriasMentor[i].data.dateTime.splice(max);

      backup[i].data.dateTime = mentoriasMentor[i].data.dateTime.map((dateTime) => {
        const firstSplitDate = dateTime.dayOfTheMonth.split('/');
        const firstDate = new Date(firstSplitDate[2], firstSplitDate[1], firstSplitDate[0]);
        const description = `${firstDate.getDate()} / ${firstDate.getMonth()}`;
        return (
          <RedeTimeSlot
            descricao={`${description} - ${dateTime.times[0].hour}`}
            disponivel={!dateTime.times[0].flagBusy}
            notHoverable
            notClickable
          />
        );
      });
    }
    return backup;
  };

  const generateCards = (mentoriasMentor) => {
    const sorted = sortMentoriasHours(mentoriasMentor);
    return transformMentoriasHours(sorted);
  };

  const changeAvalibility = (index) => {
    const token = sessionStorage.getItem('token');
    const { id } = mentorias[index];
    const config = {
      params: { id },
      headers: { Authorization: `Bearer ${token}` },
    };

    if (global.confirm('Você deseja realmente deletar essa mentoria ?')) {
      desativarMentoria(config)
        .then(() => {
          const allMentorias = mentorias;
          mentorias.splice(index, 1);
          setMentorias(allMentorias);
          enqueueSnackbar('Mentoria deletada!', { variant: 'success', autoHideDuration: 2500 });
        })
        .catch(() => {
          enqueueSnackbar(
            'Falha ao deletar essa mentoria. Verifique sua conexão e tente novamente.',
            { variant: 'error', autoHideDuration: 2500 },
          );
        });
    }
  };

  const changeVisibility = (i) => {
    const allMentorias = mentorias;
    allMentorias[i].data.isVisible = !allMentorias[i].data.isVisible;
    setMentorias(allMentorias);
    const token = sessionStorage.getItem('token');
    const { id } = mentorias[i];
    const config = {
      params: { id },
      headers: { Authorization: `Bearer ${token}` },
    };
    mudarVisibilidade(config);
  };

  const editPage = (mentoria) => {
    sessionStorage.setItem('oldMentoria', JSON.stringify(mentoria));
    history.push('/cadastro-mentoria');
  };

  const routeCadastro = () => {
    sessionStorage.removeItem('oldMentoria');
    history.push('/cadastro-mentoria');
  };

  useEffect(() => { // didMount
    function fetchData() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      profile(headers)
        .then((resp) => {
          if (resp.data.userType === userTypes.MENTORADO) {
            history.push('/mentorado');
          }
        })
        .catch(() => {
          enqueueSnackbar(
            'Problema ao buscar informações do usuário. Verifique sua conexão e tente novamente.',
            { variant: 'error', autoHideDuration: 2500 },
          );
          history.push('/');
        });
    }

    function fetchCards() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      mentoriasByMentor(headers)
        .then((res) => {
          if (res.data.length === 0) {
            setMentorias(
              <StyledContainer.Subtitle>Nenhuma mentoria encontrada!</StyledContainer.Subtitle>,
            );
          } else {
            const mentoriasArray = generateCards(res.data);
            setMentorias(mentoriasArray);
          }
        })
        .catch((erro) => {
          console.log(erro);
          enqueueSnackbar(erro.response.data.error, { variant: 'error', autoHideDuration: 3000 });
          setMentorias(
            <StyledContainer.Subtitle>Nenhuma mentoria encontrada!</StyledContainer.Subtitle>,
          );
        });
    }
    fetchData();
    fetchCards();
  }, []);

  return (
    <>
      <Container>
        <StyledContainer>
          {/* <ProfileInfo
            name={name}
            linkedin={linkedin}
            image={image}
            editFunction={editProfilePage}
          /> */}
          <StyledContainer.HeaderPage>
            <StyledContainer.Title> MINHAS MENTORIAS </StyledContainer.Title>
            <RedeButton onClick={routeCadastro} descricao="+ NOVA MENTORIA" />
          </StyledContainer.HeaderPage>
          {mentorias.length > 0 ? (
            mentorias.map((mentoria, i) => (
              <Card
                key={mentoria.id}
                title={mentoria.data.title}
                description={mentoria.data.description}
                image={`${urlFiles}/${mentoria.data.image}`}
                removeFunction={() => changeAvalibility(i)}
                visibleFunction={() => changeVisibility(i)}
                editFunction={() => editPage(mentoria)}
                isVisible={mentoria.data.isVisible}
                timeSlots={mentoria.data.dateTime}
              />
            ))
          ) : (<StyledContainer.Subtitle>Nenhuma mentoria encontrada!</StyledContainer.Subtitle>)}
        </StyledContainer>
      </Container>
    </>
  );
}

export default Mentor;
