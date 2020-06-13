import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from './StyledComponents';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import { cadastrarMentoria, atualizarMentoria } from '../../services/mentoria';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeTextArea from '../../components/RedeTextArea/RedeTextArea';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeInputRadio from '../../components/RedeInputRadio/RedeInputRadio';
import RedeFormLabel from '../../components/RedeFormLabel/RedeFormLabel';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';

import plusButton from '../../assets/plus-circle.png';

import './style.css';


function CadastroMentoria() {

  const oldMentoria = JSON.parse(sessionStorage.getItem('oldMentoria'));
  
  const PageTitle = oldMentoria ? 'Atualização de Mentoria' : 'Nova Mentoria';
  const ActionButtonTitle = oldMentoria ? 'Atualizar Mentoria' : 'Criar Mentoria';
  const [title, setTitle] = useState(oldMentoria ? oldMentoria.data.title : '');
  const [description, setDescription] = useState(oldMentoria ? oldMentoria.data.description : '');
  const [knowledgeArea, setKnowledgeArea] = useState(oldMentoria ? oldMentoria.data.knowledgeArea : '');
  const [mentoringOption, setMentoringOption] = useState(oldMentoria ? oldMentoria.data.mentoringOption : '');
  const [time, setTime] = useState(oldMentoria ? new Date(oldMentoria.data.dateTime).getHours() : []);
  const [dayOfWeek, setDayOfWeek] = useState(oldMentoria ? String(oldMentoria.data.dayOfWeek).toLowerCase() : []);
  const [image, setImage] = useState(oldMentoria ? oldMentoria.data.image : '');
  const [maxAddHour, setMaxAddHour] = useState(5);

  
  const history = useHistory();

  function getSelectsValues() {
    const hours = [];
    const dates = [];
    document.querySelectorAll('select')
      .forEach(
        (select, index) => {
          if (select.value !== '') {
            if (index % 2 === 0) {
              // eh data
              dates.push(select.value);
            } else {
              hours.push(select.value);
            }
          }
        },
      );

    setTime(hours);
    setDayOfWeek(dates);
  }

  function handleAddMentoria(event) {
    event.preventDefault();
    const token = sessionStorage.getItem('token');
    const data = new FormData();

    data.append('title', title);
    data.append('description', description);
    data.append('knowledgeArea', knowledgeArea);
    data.append('mentoringOption', mentoringOption);
    data.append('image', image);

    time.forEach((t, index) => {
      data.append('time', t);
      data.append('dayOfWeek', dayOfWeek[index]);
    });


    if (!data.get('title') || !data.get('description') || !data.get('knowledgeArea') || !data.get('mentoringOption') || !data.get('time') || !data.get('dayOfWeek')) {
      alert('Preencha todos os campos.');
    } else if (!data.get('image')) {
      alert('Insira uma foto para a mentoria.');
    } else if (time.length !== dayOfWeek.length) {
      alert('Deve ser ser selecionado a mesma quantidade de horarios e datas');
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
    setTime('');
    setImage('');
    history.push('/mentor');
    sessionStorage.removeItem('oldMentoria');
  }

  // eslint-disable-next-line consistent-return
  function addHour() {
    console.log(maxAddHour);
    if (maxAddHour < 1) {
      return alert('Não pode mais adicionar horarios');
    }
    const elementDuplicate = document.querySelector('.data-hora').cloneNode(true);
    const parentElement = document.querySelector('.select-data-horarios');
    elementDuplicate.lastChild.src = '';
    elementDuplicate.children[0].addEventListener('change', getSelectsValues);
    elementDuplicate.children[1].addEventListener('change', getSelectsValues);
    parentElement.appendChild(elementDuplicate);
    setMaxAddHour(maxAddHour - 1);
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
        <RedeHorizontalSeparator />
        <Container.SecondOption>
          <RedeInputRadio
            descricao="Opções de Mentoria"
            tipo="radio"
            nome="optmentorias"
            checked="1"
            onChange={(e) => setMentoringOption(e.target.value)}
          />
          <RedeFormLabel descricao="Datas e Horários Disponíveis" />

          <div className="select-data-horarios">
            <div className="labels">
              <p>Data</p>
              <p>Horários</p>
            </div>
            <div className="data-hora">
              <select className="select-class" onChange={getSelectsValues}>
                <option value="" selected />
                <option value="Segunda">Segunda</option>
                <option value="Terça">Terça</option>
                <option value="Quarta">Quarta</option>
                <option value="Quinta">Quinta</option>
                <option value="Sexta">Sexta</option>
                <option value="Sabado">Sabado</option>
              </select>

              <select className="select-class" onChange={getSelectsValues}>
                <option value="" selected />
                <option value="9:00:00">09:00</option>
                <option value="10:00:00">10:00</option>
                <option value="11:00:00">11:00</option>
                <option value="12:00:00">12:00</option>
                <option value="13:00:00">13:00</option>
                <option value="14:00:00">14:00</option>
                <option value="15:00:00">15:00</option>
                <option value="16:00:00">16:00</option>
                <option value="17:00:00">17:00</option>
                <option value="18:00:00">18:00</option>
                <option value="19:00:00">19:00</option>
                <option value="20:00:00">20:00</option>
                <option value="21:00:00">21:00</option>
                <option value="21:00:00">22:00</option>
              </select>

              <img src={plusButton} onClick={addHour} />
            </div>
          </div>
        </Container.SecondOption>
      </Container.Form>

      <Container.Submit>
        <RedeButton descricao="Cancelar" cancelar onClick={cleanForm} />
        <RedeButton descricao={ActionButtonTitle} onClick={handleAddMentoria} />

      </Container.Submit>
    </Container>
  );
}


export default CadastroMentoria;
