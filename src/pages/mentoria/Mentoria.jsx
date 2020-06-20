import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Container from './StyledComponents';
import Caminho from '../mentorias/StyledComponents/Caminho';
import CaminhoTitle from '../mentorias/StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from '../mentorias/StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from '../mentorias/StyledComponents/CaminhoAp';
import Card from '../../components/RedeCard/RedeCard';
import RedeHorarioCard from '../../components/RedeHorarioCard/RedeHorarioCard';

function Mentoria() {
  const [redirectTo, setRedirectTo] = useState('');
  const mentoria = JSON.parse(sessionStorage.getItem('mentoriaSelected'));
  const areaConhecimento = sessionStorage.getItem('areaSelected');

  // Http.put(`/mentoria/choice/${mentoria.idMentoria}`, data, headers);

  console.log(mentoria);
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

      <RedeHorarioCard mentoria={mentoria} />
    </Container>
  );
}

export default Mentoria;
