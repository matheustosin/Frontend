import React, { Component, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import Title from './StyledComponents/title';
import HeaderPage from './StyledComponents/header-page';
import Subtitle from './StyledComponents/subtitle';
import RedeButton from '../../components/RedeButton/RedeButton';
import { useSnackbar } from 'notistack';

function Mentor(props) {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [mentorias, setMentorias] = useState([]);
  const [linkedin, setLinkedin] = useState();



  const changeAvalibility = (index) => {
    const token = sessionStorage.getItem('token');
    const id = mentorias[index];
    const config = {
      param: { id },
      headers: { Authorization: `Bearer ${token}` },
    };
    const allMentorias = []
    for(let i = 0; i < mentorias.length;i++){
      if(i === index) continue
      allMentorias.push(mentorias[i]);
    }
    if (global.confirm('Você deseja realmente deletar essa mentoria ?')) {
      desativarMentoria(config).then(
        () => {
          setMentorias(allMentorias)
        },
      ).catch(() => {

        alert('Falha ao deletar essa mentoria. Tente novamente.');
      });
    }
  };


  const changeVisibility = (index) => {

    const allMentorias = []
    for(let i = 0; i < mentorias.length;i++){
      allMentorias[i] = mentorias[i]
      if(i === index) allMentorias[i].data.isVisible = !allMentorias[i].data.isVisible
    }
    setMentorias(allMentorias);
    // mudarVisibilidadeMentoria(config); ROUTE NEED TO BE BUILT
  };

  const editPage = (mentoria) => {
    sessionStorage.setItem('oldMentoria', JSON.stringify(mentoria));
    this.props.history.push({
      pathname: '/cadastro-mentoria',
    });
  }

  const editProfilePage = () => {
    // sessionStorage.setItem('oldProfile', JSON.stringify(profileInfo));
    // this.props.history.push({
    //   pathname: '/cadastro-mentor',
    // });
  }

  useEffect(() => {
    async function fetchData(){
      const token = sessionStorage.getItem('token');
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      
       await profile(headers).then(
        (res) => {
          if (res.status === 200) {
            const {
              name, linkedin, image,
            } = res.data;
            const urlImage = `${urlFiles}/${image}`;
  
            setName(name)
            setLinkedin(linkedin)
            setImage(urlImage)
          }
        },
      ).catch((err) => {
        alert('Problema ao buscar informações. Tente novamente.');
        console.error(err);
      });
    }

    async function fetchCards(){
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
      ).catch((err) => {
        console.error(err);
        setMentorias(<Subtitle> Nenhuma mentoria encontrada!</Subtitle>);
      });
    }
    fetchData();
    fetchCards();
  }, []);

  return (
    <>
      <Header descricao="Página do mentor" />
      <Container>
        <ProfileInfo
          name={name}
          linkedinProfile={linkedin}
          image={image}
          editFunction={editProfilePage}
        />
        <HeaderPage>
          <Title>
            MINHAS MENTORIAS
            </Title>
          <Link to="/cadastro-mentoria">
            <RedeButton descricao="+ NOVA MENTORIA" />
          </Link>
        </HeaderPage>
        { mentorias && mentorias.map(
          (mentoria,i) =>(
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
          )
        )} 
      </Container>
    </>
  );
}

export default withRouter(Mentor);
