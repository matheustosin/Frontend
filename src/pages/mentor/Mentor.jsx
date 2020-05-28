import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import StyledContainer from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import RedeButton from '../../components/RedeButton/RedeButton';

function Mentor() {
  const history = useHistory();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [mentorias, setMentorias] = useState([]);
  const [linkedin, setLinkedin] = useState();
  const [profileInfos, setProfileInfos] = useState();
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
    // mudarVisibilidadeMentoria(config); ROUTE NEED TO BE BUILT
  };

  const editPage = (mentoria) => {
    sessionStorage.setItem('oldMentoria', JSON.stringify(mentoria));
    history.push('/cadastro-mentoria');
  };

  const routeCadastro = () => {
    sessionStorage.removeItem('oldMentoria');
    history.push('/cadastro-mentoria');
  };
  const editProfilePage = () => {
    sessionStorage.setItem('oldProfile', JSON.stringify(profileInfos));
    console.log(profileInfos);
    history.push('/cadastro-mentor');
  };

  useEffect(() => {
    async function fetchData() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      await profile(headers)
        .then((res) => {
          if (res.status === 200) {
            setProfileInfos(res.data);
            setName(res.data.name);
            setLinkedin(res.data.linkedin);
            setImage(`${urlFiles}/${res.data.image}`);
          }
        })
        .catch(() => {
          enqueueSnackbar(
            'Problema ao buscar informações do usuário. Verifique sua conexão e tente novamente.',
            { variant: 'error', autoHideDuration: 2500 },
          );
        });
    }

    async function fetchCards() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      await mentoriasByMentor(headers)
        .then((res) => {
          if (res.data.length === 0) {
            setMentorias(<Container.Subtitle> Nenhuma mentoria encontrada!</Container.Subtitle>);
          } else {
            setMentorias(res.data);
          }
        })
        .catch(() => {
          // enqueueSnackbar('Erro ao buscar as mentorias. Verifique sua conexão e tente novamente',
          // { variant: 'error', autoHideDuration: 2500 });
          setMentorias(<Container.Subtitle> Nenhuma mentoria encontrada!</Container.Subtitle>);
        });
    }
    fetchData();
    fetchCards();
  }, []);

  return (
    <>
      <Container>
        <StyledContainer>
          <ProfileInfo
            name={name}
            linkedin={linkedin}
            image={image}
            editFunction={editProfilePage}
          />
          <Container.HeaderPage>
            <Container.Title> MINHAS MENTORIAS </Container.Title>
            <RedeButton onClick={routeCadastro} descricao="+ NOVA MENTORIA" />
          </Container.HeaderPage>
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
          ) : (<Container.Subtitle> Nenhuma mentoria encontrada!</Container.Subtitle>)}
        </StyledContainer>
      </Container>
    </>
  );
}

export default Mentor;
