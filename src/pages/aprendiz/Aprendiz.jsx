import React, { useState, useEffect } from 'react';

import { element } from 'prop-types';
import Header from '../../components/Header/Header';
import RedeInputSearch from '../../components/RedeInputSearch/RedeInputSearch';

import { profile } from '../../services/user';
import { allMentorias } from '../../services/mentor';
import { urlFiles } from '../../services/http';

import Container from './StyledComponents/index';
import ContainersGeralCards from './StyledComponents/ContainerConhecimento';
import Cards from './StyledComponents/Cards';

import standartPhoto from '../../assets/account.png';

import ColorsDefault from '../../utils/colors.constants';

function Aprendiz() {
  const [imageProfile, setImageProfile] = useState(standartPhoto);
  const [areas, setAreas] = useState([]);
  const [showCards, setShowCards] = useState([]);

  function buildCards(values) {
    const cards = [];
    values.forEach((element, index) => {
      const color = ColorsDefault.CARDS_COLLORS[index % ColorsDefault.CARDS_COLLORS.length];
      cards.push(<Cards key={element} color={color} description={element} />);
    });
    setShowCards(cards);
  }

  async function getAreas(headers) {
    const results = await allMentorias(headers);
    if (results.status !== 200) {
      return null;
    }
    const resultAreas = [];
    results.data.forEach((element) => {
      if (element.knowledgeArea !== undefined) {
        if (!resultAreas.includes(element.knowledgeArea)) {
          resultAreas.push(element.knowledgeArea);
        }
      }
    });
    setAreas(resultAreas);
    buildCards(resultAreas);
  }

  async function getImgProfilePhoto(headers) {
    const results = await profile(headers);

    if (results.status === 200) {
      setImageProfile(`${urlFiles}/${results.data.image}`);
    }
  }

  function searchCards(searchString) {
    const filter = areas.filter((element) => ((element.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) ? element : ''));
    buildCards(filter);
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    getImgProfilePhoto(headers);

    getAreas(headers);
  }, []);

  return (
    <>
      <Header descricao="" imgProfile={imageProfile} />
      <Container>
        <Container.TituloPage>Home</Container.TituloPage>
        <RedeInputSearch placeholder="Procurar por Área" onChange={(e) => searchCards(e.target.value)} />
        <ContainersGeralCards>
          <ContainersGeralCards.TituloAreas>Áreas de conhecimento</ContainersGeralCards.TituloAreas>
          {showCards}
        </ContainersGeralCards>
      </Container>
    </>
  );
}

export default Aprendiz;
