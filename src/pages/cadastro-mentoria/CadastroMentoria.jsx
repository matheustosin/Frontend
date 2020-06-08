import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Container from './StyledComponents';
import { cadastrarMentoria, atualizarMentoria } from '../../services/mentoria';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeTextArea from '../../components/RedeTextArea/RedeTextArea';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
// import RedeInputRadio from '../../components/RedeInputRadio';
import RedeFormLabel from '../../components/RedeFormLabel/RedeFormLabel';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import plusButton from '../../assets/plus-circle.png';
import removeButton from '../../assets/remove-button.png';

import DivCheckbox from './StyledComponents/DivCheckbox';
import Checkbox from './StyledComponents/Checkbox';
import DivSelect from './StyledComponents/DivSelect';
import ContainerDataHora from './StyledComponents/ContainerDataHora';
import Select from './StyledComponents/Select';


function CadastroMentoria() {
  const oldMentoria = JSON.parse(sessionStorage.getItem('oldMentoria'));

  // const PageTitle = oldMentoria ? 'Atualização de Mentoria' : 'Nova Mentoria';
  const ActionButtonTitle = oldMentoria ? 'Atualizar Mentoria' : 'Criar Mentoria';
  const [title, setTitle] = useState(oldMentoria ? oldMentoria.data.title : '');
  const [description, setDescription] = useState(oldMentoria ? oldMentoria.data.description : '');
  const [knowledgeArea, setKnowledgeArea] = useState(oldMentoria ? oldMentoria.data.knowledgeArea : '');
  const [mentoringOption, setMentoringOption] = useState(oldMentoria ? oldMentoria.data.mentoringOption : '');
  const [time, setTime] = useState(oldMentoria ? new Date(oldMentoria.data.dateTime).getHours() : []);
  const [dayOfWeek, setDayOfWeek] = useState(oldMentoria ? String(oldMentoria.data.dayOfWeek).toLowerCase() : []);
  const [image, setImage] = useState(oldMentoria ? oldMentoria.data.image : '');

  const [daysSelect] = useState(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']);
  const [hoursSelect] = useState(['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const [listDataHours, setListDataHours] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const enqueue = (msg = '', variant = 'error', autoHideDuration = 2500) => {
    enqueueSnackbar(msg, { variant, autoHideDuration });
  };

  const history = useHistory();

  const getSelectsValues = (e) => {
    e.preventDefault();
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
  };


  const handleAddMentoria = (event) => {
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

    // || !data.get('mentoringOption')
    if (!data.get('title') || !data.get('description') || !data.get('knowledgeArea') || !data.get('time') || !data.get('dayOfWeek')) {
      enqueue('Preencha todos os campos.');
    } else if (!data.get('image')) {
      enqueue('Insira uma foto para mentoria');
    } else if (time.length !== dayOfWeek.length) {
      enqueue('Deve ser adicionado a mesma quandidade de horarios e datas');
    } else if (oldMentoria) {
      if (
        typeof image === 'string'
      ) data.delete('image');
      const headers = { headers: { param: { id: oldMentoria.id }, Authorization: `Bearer ${token}` } };
      atualizarMentoria(headers, data).then((res) => {
        if (res.status === 200) {
          enqueue('Mentoria atualiada com sucesso', 'success');
        }
        history.push('/mentor');
      }).catch((err) => {
        enqueue('Problema ao atualizar mentoria');
        console.error(err);
      });
    } else {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      cadastrarMentoria(headers, data).then((res) => {
        if (res.status === 200) {
          enqueue('Mentoria cadastrada com sucesso', 'success');
        }
        history.push('/mentor');
      }).catch((err) => {
        enqueue('Problema ao cadastrar mentoria');
        console.error(err);
      });
    }
  };
  function handleImage() {
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = (event) => {
      setImage(event.target.files[0]);
    };
  }

  const cleanForm = (event) => {
    event.preventDefault();
    setTitle('');
    setDescription('');
    setKnowledgeArea('');
    setMentoringOption('');
    setDayOfWeek('');
    setTime('');
    setImage('');
    history.push('/mentor');
    sessionStorage.removeItem('oldMentoria');
  };

  const handleRemove = (e, id) => {
    setListDataHours(
      listDataHours.filter((el, ix) => ix !== id),
    );
  };

  // eslint-disable-next-line consistent-return
  const handleAdd = () => {
    const element = (
      <>
        <Select objectValues={daysSelect} onChange={(event) => getSelectsValues(event)} />
        <Select objectValues={hoursSelect} onChange={(event) => getSelectsValues(event)} />
      </>
    );

    setListDataHours([...listDataHours, element]);
  };

  useEffect(() => { // did Mount
    handleAdd();
  }, []);


  return (
    <Container>
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
          <DivCheckbox>
            <RedeFormLabel descricao="Opções de Mentoria" />
            <DivCheckbox.Options>
              <Checkbox value="online" label="Online" />
              <Checkbox value="presencial" label="Presencial" />
            </DivCheckbox.Options>
          </DivCheckbox>
          <RedeFormLabel descricao="Datas e Horários Disponíveis" />

          <DivSelect className="select-data-horarios">
            <DivSelect.Labels>
              <p>Data</p>
              <p style={{ 'margin-left': '70px' }}>Horários</p>
            </DivSelect.Labels>
            {
              listDataHours.map((element, index) => (
                <ContainerDataHora>
                  {element}
                  {index === (listDataHours.length - 1) && listDataHours.length < 6
                    ? <img onClick={(e) => handleAdd(e)} src={plusButton} alt="Adicionar" />
                    : <img onClick={(e) => handleRemove(e, index)} src={removeButton} alt="Remover" />}
                </ContainerDataHora>
              ))
            }
          </DivSelect>
        </Container.SecondOption>
      </Container.Form>

      <Container.Submit>
        <RedeButton descricao="Cancelar" cancelar onClick={(e) => cleanForm(e)} />
        <RedeButton descricao={ActionButtonTitle} onClick={handleAddMentoria} />

      </Container.Submit>
    </Container>
  );
}


export default CadastroMentoria;
