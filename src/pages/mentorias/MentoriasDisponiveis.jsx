import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import Card from '../../components/RedeCard/RedeCard';
import Caminho from './StyledComponents/Caminho';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import CaminhoTitle from './StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from './StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from './StyledComponents/CaminhoAp';
import { mentoriasByMentorado } from '../../services/mentorado';
import RedeInputSearch from '../../components/RedeInputSearch/RedeInputSearch';
import RedeTimeSlot from '../../components/RedeTimeSlot/RedeTimeSlot';

function MentoriasDisponiveis() {
  const [cards, setCards] = useState('');
  const areaConhecimento = sessionStorage.getItem('areaSelected');
  const [mentorias, setMentorias] = useState([]);
  const [redirectTo, setRedirectTo] = useState('');

  function sortMentoriasHours(mentoriasAreaConhecimento) {
    for (let i = 0; i < mentoriasAreaConhecimento.length; i += 1) {
      mentoriasAreaConhecimento[i].dateTime.sort((a, b) => {
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
    setMentorias(mentoriasAreaConhecimento);
  }
  function transformMentoriasHours(mentoriasAreaConhecimento) {
    const backup = mentoriasAreaConhecimento;
    for (let i = 0; i < mentoriasAreaConhecimento.length; i += 1) {
      const max = mentoriasAreaConhecimento[i].dateTime.length;
      if (max >= 3) mentoriasAreaConhecimento[i].dateTime.splice(3);
      else mentoriasAreaConhecimento[i].dateTime.splice(max);

      backup[i].dateTime = mentoriasAreaConhecimento[i].dateTime.map((dateTime) => {
        const firstSplitDate = dateTime.dayOfTheMonth.split('/');
        const firstDate = new Date(firstSplitDate[2], firstSplitDate[1], firstSplitDate[0]);
        const description = `${firstDate.getDate()} / ${firstDate.getMonth()}`;
        return (
          <RedeTimeSlot
            descricao={`${description} - ${dateTime.times[0].hour}`}
            disponivel={!dateTime.times[0].flagBusy}
          />
        );
      });
    }
    setMentorias(backup);
  }

  function generateCards(mentoriasAreaConhecimento) {
    sortMentoriasHours(mentoriasAreaConhecimento);
    transformMentoriasHours(mentoriasAreaConhecimento);
    const cardsMentorias = mentoriasAreaConhecimento
      .map((mentoria) => (
        <Card
          key={mentoria.idMentoria}
          title={mentoria.title}
          description={mentoria.description}
          image={`${urlFiles}/${mentoria.image}`}
          mentorias
          // mentorName={mentoria.mentorInfos.name.split(/(\s).+\s/).join('')}
          // mentorImage={`${urlFiles}/${mentoria.mentorInfos.image}`}
          timeSlots={mentoria.dateTime}
        />
      ));
    setCards(cardsMentorias);
  }


  function filterMentorias(arrayMentoriasAll) {
    const mentoriasAreaConhecimento = arrayMentoriasAll
      .filter((e) => e.knowledgeArea === areaConhecimento);
    setMentorias(mentoriasAreaConhecimento);
    generateCards(mentoriasAreaConhecimento);
  }

  function getMentorias(headers) {
    mentoriasByMentorado(headers)
      .then((res) => {
        if (res.status === 200) {
          filterMentorias(res.data);
        }
      })
      .catch((err) => {
        setCards('Nenhuma mentoria encontrada para a Área de Conhecimento selecionada.');
        console.error(err);
      });
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    getMentorias(headers);
  }, []);

  function attemptSearch(event) {
    const searchCards = mentorias
      .filter((e) => (e.title.toLowerCase().indexOf(event.toLowerCase()) !== -1));
    generateCards(searchCards);
  }

  return (redirectTo) ? <Redirect to={redirectTo} /> : (
    <Container>
      <CaminhoAp>
        <CaminhoTitleDesabilitado onClick={() => setRedirectTo('/mentorado')}>Home</CaminhoTitleDesabilitado>
        <Caminho />
        <CaminhoTitle>{areaConhecimento}</CaminhoTitle>
      </CaminhoAp>
      <RedeInputSearch placeholder="Procurar por Mentoria" onChange={(e) => attemptSearch(e.target.value)} />
      <Container.Title>MENTORIAS DISPONÍVEIS</Container.Title>
      <br />
      {cards}
    </Container>
  );
}

export default MentoriasDisponiveis;
