import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from './StyledComponents';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import { cadastrarMentoria, atualizarMentoria } from '../../services/mentoria';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeTextArea from '../../components/RedeTextArea/RedeTextArea';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeFormLabel from '../../components/RedeFormLabel/RedeFormLabel';
import RedeInputRadio from '../../components/RedeInputRadio/RedeInputRadio';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';

import './style.css';

function CadastroMentoria() {
  const oldMentoria = JSON.parse(sessionStorage.getItem('oldMentoria'));
  const PageTitle = oldMentoria ? 'Atualização de Mentoria' : 'Nova Mentoria';
  const ActionButtonTitle = oldMentoria ? 'Atualizar Mentoria' : 'Criar Mentoria';
  const [title, setTitle] = useState(oldMentoria ? oldMentoria.data.title : '');
  const [description, setDescription] = useState(oldMentoria ? oldMentoria.data.description : '');
  const [knowledgeArea, setKnowledgeArea] = useState(oldMentoria ? oldMentoria.data.knowledgeArea : '');
  const [mentoringOption, setMentoringOption] = useState(oldMentoria ? oldMentoria.data.mentoringOption : '');
  const [dateTime, setDateTime] = useState(oldMentoria ? new Date(oldMentoria.data.dateTime).getHours() : '12');
  const [dayOfWeek, setDayOfWeek] = useState(oldMentoria ? String(oldMentoria.data.dayOfWeek).toLowerCase() : '');
  const [image, setImage] = useState(oldMentoria ? oldMentoria.data.image : '');

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
    data.append('time', dateTime);
    data.append('dayOfWeek', dayOfWeek);
    data.append('image', image);
    // /*|| !data.get('dateTime') || !data.get('dayOfWeek')*/
    if (!data.get('title') || !data.get('description') || !data.get('knowledgeArea') || !data.get('mentoringOption') || !data.get('time') || !data.get('dayOfWeek')) {
      alert('Preencha todos os campos.');
    } else if (!data.get('image')) {
      alert('Insira uma foto para a mentoria.');
    } else if (oldMentoria) {
      if (
        typeof image === 'string'
      ) data.delete('image');
      const headers = { headers: { param: { id: oldMentoria.id }, Authorization: `Bearer ${token}` } };
      atualizarMentoria(headers, data).then((res) => {
        if (res.status === 200) {
          alert('Atualizado com sucesso');
        }
        history.push('/mentor');
      }).catch((err) => {
        alert('Problema ao atualizar mentoria');
        console.error(err);
      });
    } else {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
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
    history.push('/mentor');
    sessionStorage.removeItem('oldMentoria');
  }

  return (
    <Container>
      <RedeHeader descricao={PageTitle} />
      <Container.Form>
        <Container.Options>
          <RedeTextField
            descricao="Título"
            valor={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <RedeTextArea
            descricao="Descrição"
            valor={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <RedeTextField
            descricao="Área de Conhecimento"
            valor={knowledgeArea}
            onChange={(e) => setKnowledgeArea(e.target.value)}
          />
          <input id="fileButton" type="file" hidden />
          <RedeButton descricao="Adicionar Foto" claro onClick={handleImage} />
        </Container.Options>

        <RedeHorizontalSeparator size="300" />

        <Container.Options style={{ 'margin-bottom': '12rem' }}>
          <RedeInputRadio
            descricao="Opções de Mentoria"
            tipo="radio"
            nome="optmentorias"
            onChange={(e) => setMentoringOption(e.target.value)}
          />
          <RedeFormLabel descricao="Datas e Horários Disponíveis" />

          <div>
            <label className="label-class" htmlFor="data">
              Data
            </label>
            <label className="label-class" htmlFor="hora">
              Hora
            </label>
          </div>
          <div>
            <select className="select-class" id="data" name="data" value={dayOfWeek} onChange={(e) => setDayOfWeek(e.target.value)}>
              <option value="Segunda" selected>Segunda</option>
              <option value="Terça">Terça</option>
              <option value="Quarta">Quarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Sabado">Sabado</option>
            </select>

            <select className="select-class" id="hora" name="hora" onChange={(e) => setDateTime(e.target.value)} value={dateTime}>
              <option value="9:00:00">09:00</option>
              <option value="10:00:00">10:00</option>
              <option value="11:00:00">11:00</option>
              <option value="12:00:00">12:00</option>
              <option value="13:00:00">13:00</option>
              <option value="14:00:00">14:00</option>
              <option value="15:00:00">15:00</option>
              <option value="16:00:00">16:00</option>
              <option value="17:00:00">17:00</option>
              <option value="18:00:00" selected>18:00</option>
              <option value="19:00:00">19:00</option>
              <option value="20:00:00">20:00</option>
              <option value="21:00:00">21:00</option>
              <option value="21:00:00">22:00</option>
            </select>
          </div>
        </Container.Options>
      </Container.Form>

      <Container.Submit>
        <RedeButton descricao="Cancelar" cancelar onClick={cleanForm} />
        <RedeButton descricao={ActionButtonTitle} onClick={attempMentoria} />

      </Container.Submit>
    </Container>
  );
}

export default CadastroMentoria;
