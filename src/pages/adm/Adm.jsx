import React, { useState, useEffect } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import edition from '../../assets/create-new-pencil-button.png';
import confirm from '../../assets/confirm.png';
import denied from '../../assets/denied.png';

import Container from './StyledComponents';
import RedeIcon from '../../components/RedeIcon/RedeIcon';
import Title2 from './StyledComponents/Title2';
import ContainerIcon from './StyledComponents/ContainerIcon';
import ContainerCards from './StyledComponents/ContainerCards';

import { urlFiles } from '../../services/http';
import { pendingMentorings, mentoringEvaluation } from '../../services/adm';

function Administrador() {
  const [cards, setCards] = useState('');
  // let count;
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    getMentorias(headers);
  }, []);

  function evaluateMentoring(mentoria) {
    console.log( mentoria)
    const id = mentoria.id;
    const token = sessionStorage.getItem('token');
    const body = {
        title: mentoria.data.title,
        approved: mentoria.data.approved
    }
    const config = {
        param: id,
        headers: { Authorization: `Bearer ${token}` }
    }
    mentoringEvaluation(body, config)
      .then((res) => {
        if (res.status === 200) {
          alert('SUCESSO!');
        }
      })
      .catch((err) => {
        alert('A mentoria não pôde ser aprovada!');
      });
  }

  function getMentorias(headers) {
    pendingMentorings(headers)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res);
          generateCards(res.data);
        }
      })
      .catch((err) => {
        setCards('Nenhuma mentoria encontrada para ser aprovada.');
        // console.error(err);
      });
  }

  function generateCards(mentorias) {
    const cardsMentorias = mentorias.map((mentoria) => (
      <ContainerCards>
        <Card
          key={mentoria.id}
          title={mentoria.data.title}
          description={mentoria.data.description}
          image={`${urlFiles}/${mentoria.data.image}`}
          mentorias
        />
        <div>
          <ContainerIcon>
            <div>
              <RedeIcon
                class="icon"
                imageUrl={confirm}
                onClick={() => evaluateMentoring(mentoria)}
              />
            </div>
            <div>
              <RedeIcon name="imag" imageUrl={denied} />
            </div>
            <div>
              <RedeIcon name="imag" imageUrl={edition} />
            </div>
          </ContainerIcon>
        </div>
      </ContainerCards>
    ));
    // count = mentorias;
    // console.log(count);
    setCards(cardsMentorias);
  }

  return (
    <Container>
      <RedeHeader />
      <Container.Title>APROVAÇÕES PENDENTES</Container.Title>
      <Title2>Você tem X mentorias para aprovar</Title2>
      <br />
      {cards}
    </Container>
  );
}

export default Administrador;
