import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import RedeInputSearch from '../../components/RedeInputSearch/RedeInputSearch';

import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';

import Container from './StyledComponents/index';
import ContainersGeralCards from './StyledComponents/ContainerConhecimento';
import Cards from './StyledComponents/Cards';

import standartPhoto from '../../assets/account.png';

function Aprendiz() {
  const [imageProfile, setImageProfile] = useState(standartPhoto);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    profile(headers).then((res) => {
      console.log(res);
      setImageProfile(`${urlFiles}/${res.data.image}`);
    });
  });

  return (
    <>
      <Header descricao="" imgProfile={imageProfile} />
      <Container>
        <Container.TituloPage>Home</Container.TituloPage>
        <RedeInputSearch placeholder="Procurar por Área" onChange={() => {}} />
        <ContainersGeralCards>
          <ContainersGeralCards.TituloAreas>Áreas de conhecimento</ContainersGeralCards.TituloAreas>
          <Cards color="6BE6C2" description="IOT" />
          <Cards color="EFF36F" description="Finanças" />
          <Cards color="F28C5C" description="Empreendedorismo" />
          <Cards color="5C65F2" description="teste" />
        </ContainersGeralCards>
      </Container>
    </>
  );
}

export default Aprendiz;
