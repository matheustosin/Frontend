import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import StyledContainer from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
// import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import RedeButton from '../../components/RedeButton/RedeButton';

function Mentor() {
  const history = useHistory();
  const [mentorias, setMentorias] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

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

  useEffect(() => {
    function fetchData() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      profile(headers)
        .catch(() => {
          enqueueSnackbar(
            'Problema ao buscar informações do usuário. Verifique sua conexão e tente novamente.',
            { variant: 'error', autoHideDuration: 2500 },
          );
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
            setMentorias(res.data);
          }
        })
        .catch((erro) => {
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
              />
            ))
          ) : (<StyledContainer.Subtitle>Nenhuma mentoria encontrada!</StyledContainer.Subtitle>)}
        </StyledContainer>
      </Container>
    </>
  );
}

export default Mentor;
