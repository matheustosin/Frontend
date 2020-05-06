import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeTextArea from '../../components/RedeTextArea/RedeTextArea';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import Container from './StyledComponents';

import RedeInputRadio from '../../components/RedeInputRadio/RedeInputRadio';
import RedeFormLabel from '../../components/RedeFormLabel/RedeFormLabel';

import { cadastrarMentoria } from '../../services/mentor';

import imgPlus from '../../assets/plus.png';

import './style.css';


function CadastroMentoria() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [knowledgeArea, setKnowledgeArea] = useState('');
  const [mentoringOption, setMentoringOption] = useState(1);
  const [dateTime, setDateTime] = useState('segunda');
  const [dayOfWeek, setDayOfWeek] = useState('18');
  const [image, setImage] = useState('');

  const history = useHistory();


  function attempMentoria(event) {
    event.preventDefault();
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('knowledgeArea', knowledgeArea);
    data.append('mentoringOption', mentoringOption);
    data.append('dateTime', dateTime);
    data.append('dayOfWeek', dayOfWeek);
    data.append('image', image);
    cadastrarMentoria(headers, data).then((res) => {
      if (res.status === 200) {
        alert('Cadastrado com sucesso');
      }
      history.push('/mentor');
    }).catch((err) => {
      alert('Problema ao cadastrar mentoria');
      console.error(err);
    });
  }
  function handleImage() {
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = (event) => {
      console.log(event.target);
      setImage(event.target.files[0]);
    };
  }

  function cleanForm() {
    setTitle('');
    setDescription('');
    setKnowledgeArea('');
    setMentoringOption('');
    setDayOfWeek('');
    setDateTime('');
    setImage('');
  }

  return (
    <Container>
      <Header />
      <Container.Title> Nova Mentoria </Container.Title>
      <Container.Form>
        <Container.Options>
          <RedeTextField descricao="Título" valor={title} onChange={(e) => setTitle(e.target.value)} />
          <RedeTextArea descricao="Descrição" valor={description} onChange={(e) => setDescription(e.target.value)} />
          <RedeTextField descricao="Área de Conhecimento" valor={knowledgeArea} onChange={(e) => setKnowledgeArea(e.target.value)} />
          <input id="fileButton" type="file" hidden />
          <RedeButton descricao="Adicionar Foto" claro onClick={handleImage} />
        </Container.Options>

        <RedeHorizontalSeparator size="300" />


        <Container.Options style={{ 'margin-bottom': '12rem' }}>
          <RedeInputRadio descricao="Opções de Mentoria" tipo="radio" nome="optmentorias" onChange={(e) => setMentoringOption(e.target.value)} />
          <RedeFormLabel descricao="Datas e Horários Disponíveis" />

          <div>
            <label className="label-class" htmlFor="data">Data</label>
            <label className="label-class" htmlFor="hora">Hora</label>

          </div>
          <div>
            <select className="select-class" id="data" name="data" value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
              <option value="segunda" selected>Segunda</option>
              <option value="terca">Terça</option>
              <option value="quarta">Quarta</option>
              <option value="quinta">Quinta</option>
              <option value="sexta">Sexta</option>
              <option value="sabado">Sabado</option>
            </select>

            <select className="select-class" id="hora" name="hora" onChange={(e) => setDateTime(e.target.value)}>
              <option value="9">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18" selected>18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="21">22:00</option>
            </select>

          </div>
        </Container.Options>
      </Container.Form>

      <Container.Submit>
        <RedeButton descricao="Cancelar" cancelar onClick={cleanForm} />
        <RedeButton descricao="Criar Mentoria" onClick={attempMentoria} />

      </Container.Submit>
    </Container>
  );
}

export default CadastroMentoria;
