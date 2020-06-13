import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import Modal from './StyledComponents/Modal';
import Container from './StyledComponents';
import Title2 from './StyledComponents/Title2';
import ContainerIcon from './StyledComponents/ContainerIcon';
import ContainerCards from './StyledComponents/ContainerCards';

import { urlFiles } from '../../services/http';
import { pendingMentorings, mentoringEvaluation } from '../../services/adm';

function Administrador() {
  const [cards, setCards] = useState('');
  const [flagModal, setFlagModal] = useState(false);
  const [mentoria, setMentoria] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    // eslint-disable-next-line no-use-before-define
    getMentorias(headers);
  }, []);

  // eslint-disable-next-line no-shadow
  function evaluateMentoring(mentoria, flag) {
    const { id } = mentoria;
    const token = sessionStorage.getItem('token');
    const body = {};
    if (flag === 1) {
      body.title = newTitle;
      body.approved = true;
    }
    if (flag === 2) {
      body.title = mentoria.data.title;
      body.mentorEmail = mentoria.mentorInfo.email;
      body.approved = false;
    }

    const config = {
      param: id,
      headers: { Authorization: `Bearer ${token}` },
    };
    mentoringEvaluation(body, config)
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-use-before-define
          getMentorias(config);
          setFlagModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert('A mentoria não pôde ser aprovada!');
      });
  }

  function getMentorias(headers) {
    pendingMentorings(headers)
      .then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line no-use-before-define
          generateCards(res.data);
        }
      })
      .catch((err) => {
        setCards('Nenhuma mentoria encontrada para ser aprovada.');
        console.error(err);
      });
  }

  // eslint-disable-next-line no-shadow
  function abreModal(mentoria) {
    setMentoria(mentoria);
    setNewTitle(mentoria.data.title);
    setFlagModal(true);
  }

  function fechaModal() {
    setFlagModal(false);
  }

  function generateCards(mentorias) {
    const dataHoras = mentorias[0].data.dateTime;

    dataHoras.sort((a, b) => {
      if (a.dayOfTheMonth > b.dayOfTheMonth) {
        return 1;
      } if (b.dayOfTheMonth > a.dayOfTheMonth) {
        return -1;
      }
      return 0;
    });
    console.log(dataHoras);
    // eslint-disable-next-line no-shadow
    const cardsMentorias = mentorias.map((mentoria) => (
      <ContainerCards key={mentoria.id}>
        <Card
          title={mentoria.data.title}
          description={mentoria.data.description}
          image={`${urlFiles}/${mentoria.data.image}`}
          mentorName={mentoria.mentorInfo.name}
          mentorImage={`${urlFiles}/${mentoria.mentorInfo.image}`}
          mentorias
        />

        <div>
          <ContainerIcon>
            <AiOutlineCheckCircle
              size={45}
              class="icon"
              onClick={() => abreModal(mentoria)}
            />
            <AiOutlineCloseCircle
              size={45}
              class="icon"
              onClick={() => evaluateMentoring(mentoria, 2)}
            />
          </ContainerIcon>
        </div>
      </ContainerCards>
    ));
    setCards(cardsMentorias);
  }

  return (
    <Container>
      <RedeHeader />
      <Container.Title>APROVAÇÕES PENDENTES</Container.Title>
      <Title2>
        {`Você tem ${cards.length} mentoria${
          cards.length > 1 ? 's' : ''
        } para aprovar`}
      </Title2>
      <br />
      {cards}
      <Modal
        open={flagModal}
        handleClose={() => fechaModal()}
        editFunction={() => evaluateMentoring(mentoria, 1)}
        mentoriaTitle={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
    </Container>
  );
}

export default Administrador;
