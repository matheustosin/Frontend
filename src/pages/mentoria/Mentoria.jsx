import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Container from './StyledComponents';
import Caminho from '../mentorias/StyledComponents/Caminho';
import CaminhoTitle from '../mentorias/StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from '../mentorias/StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from '../mentorias/StyledComponents/CaminhoAp';
import Card from '../../components/RedeCard/RedeCard';
import Title from './StyledComponents/Title';
import Titles from './StyledComponents/Titles';
import Subtitle from './StyledComponents/SubTitle';
import Legend from './StyledComponents/Legend';
import HeaderCard from './StyledComponents/HeaderCard';
import RedeHorarioCard from '../../components/RedeHorarioCard/RedeHorarioCard';
import RedeHorarioButton from '../../components/RedeHorarioButton/RedeHorarioButton';

function Mentoria() {
  const [redirectTo, setRedirectTo] = useState('');
  const mentoria = JSON.parse(sessionStorage.getItem('mentoriaSelected'));
  const areaConhecimento = sessionStorage.getItem('areaSelected');

  // Http.put(`/mentoria/choice/${mentoria.idMentoria}`, data, headers);

  return (redirectTo) ? <Redirect to={redirectTo} /> : (
    <Container>
      <CaminhoAp>
        <CaminhoTitleDesabilitado onClick={() => setRedirectTo('/mentorado')}>Home</CaminhoTitleDesabilitado>
        <Caminho />
        <CaminhoTitleDesabilitado onClick={() => setRedirectTo('/mentorias-disponiveis')}>{areaConhecimento}</CaminhoTitleDesabilitado>
        <Caminho />
        <CaminhoTitle>{mentoria.title}</CaminhoTitle>
      </CaminhoAp>
      <Card
        mentoria={mentoria}
        mentorias
        todosHorarios
      />
      <HeaderCard>
        <Titles>
          <Title> Horários e Datas</Title>
          <Subtitle> Selecione um Horário disponível </Subtitle>
        </Titles>
        <Legend>
          <RedeHorarioButton horario="Disponível"> </RedeHorarioButton>
          <RedeHorarioButton ocupado desabilitado horario="Indisponível"> </RedeHorarioButton>
        </Legend>
      </HeaderCard>
      <RedeHorarioCard mentoria={mentoria} />
    </Container>
  );
}

export default Mentoria;
