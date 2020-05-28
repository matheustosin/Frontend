import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import Title from './StyledComponents/title';
import HeaderPage from './StyledComponents/header-page';
import Subtitle from './StyledComponents/subtitle';
import RedeButton from '../../components/RedeButton/RedeButton';

function Mentor(props) {
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
      desativarMentoria(config).then(
        () => {
          const allMentorias = mentorias;
          mentorias.splice(index, 1);
          setMentorias(allMentorias);
          enqueueSnackbar('Mentoria deletada!', { variant: 'success', autoHideDuration: 2500 });
        },
      ).catch(() => {
        enqueueSnackbar('Falha ao deletar essa mentoria. Verifique sua conexão e tente novamente.', { variant: 'error', autoHideDuration: 2500 });
      });
    }
  };

  const changeVisibility = (index) => {
    const allMentorias = [];
    for (let i = 0; i < mentorias.length; i++) {
      allMentorias[i] = mentorias[i];
      if (i === index) allMentorias[i].data.isVisible = !allMentorias[i].data.isVisible;
    }
    setMentorias(allMentorias);
    // mudarVisibilidadeMentoria(config); ROUTE NEED TO BE BUILT
  };

  const editPage = (mentoria) => {
    sessionStorage.setItem('oldMentoria', JSON.stringify(mentoria));
    props.history.push({
      pathname: '/cadastro-mentoria',
    });
  };

  const routeCadastro = () => {
    sessionStorage.removeItem('oldMentoria');
    props.history.push({
      pathname: '/cadastro-mentoria',
    });
  };
  const editProfilePage = () => {
    sessionStorage.setItem('oldProfile', JSON.stringify(profileInfos));
    console.log(profileInfos);
    props.history.push({
      pathname: '/cadastro-mentor',
    });
  };

  useEffect(() => {
    async function fetchData() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      await profile(headers).then(
        (res) => {
          if (res.status === 200) {
            const {
              name, linkedin, image,
            } = res.data;
            const urlImage = `${urlFiles}/${image}`;
            setProfileInfos(res.data);
            setName(name);
            setLinkedin(linkedin);
            setImage(urlImage);
          }
        },
      ).catch(() => {
        enqueueSnackbar('Problema ao buscar informações do usuário. Verifique sua conexão e tente novamente.', { variant: 'error', autoHideDuration: 2500 });
      });
    }

    async function fetchCards() {
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      await mentoriasByMentor(headers).then(
        (res) => {
          if (res.data.length === 0) {
            setMentorias(<Subtitle> Nenhuma mentoria encontrada!</Subtitle>);
          } else {
            setMentorias(res.data);
          }
        },
      ).catch(() => {
        // enqueueSnackbar('Erro ao buscar as mentorias. Verifique sua conexão e tente novamente',
        // { variant: 'error', autoHideDuration: 2500 });
        setMentorias(<Subtitle> Nenhuma mentoria encontrada!</Subtitle>);
      });
    }
    fetchData();
    fetchCards();
  }, []);

  return (
    <>
      <Container>
        <ProfileInfo
          name={name}
          linkedin={linkedin}
          image={image}
          editFunction={editProfilePage}
        />
        <HeaderPage>
          <Title>
            MINHAS MENTORIAS
          </Title>
          <RedeButton onClick={routeCadastro} descricao="+ NOVA MENTORIA" />
        </HeaderPage>
        {mentorias.length > 0 ? mentorias.map(
          (mentoria, i) => (
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
          ),
        ) : <Subtitle> Nenhuma mentoria encontrada!</Subtitle>}
      </Container>
    </>
  );
}

export default withRouter(Mentor);
