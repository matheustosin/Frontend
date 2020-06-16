import React, { useState } from 'react';
import { urlFiles } from '../../services/http';
import Container from './StyledComponents';
import Caminho from '../mentorias/StyledComponents/Caminho';
import CaminhoTitle from '../mentorias/StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from '../mentorias/StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from '../mentorias/StyledComponents/CaminhoAp';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import RedeHorarioCard from '../../components/RedeHorarioCard/RedeHorarioCard';

function Mentoria() {
  const [setRedirectTo] = useState('');
  const mentoria = JSON.parse(sessionStorage.getItem('mentoriaSelected'));
  const areaConhecimento = sessionStorage.getItem('areaSelected');

  return (
    <Container>
      <RedeHeader />
      <CaminhoAp>
        <CaminhoTitleDesabilitado onClick={() => setRedirectTo('/mentorado')}>Home</CaminhoTitleDesabilitado>
        <Caminho />
        <CaminhoTitleDesabilitado onClick={() => setRedirectTo('/mentorias-disponiveis')}>{areaConhecimento}</CaminhoTitleDesabilitado>
        <Caminho />
        <CaminhoTitle>{mentoria.title}</CaminhoTitle>
      </CaminhoAp>

      <Card
        title={mentoria.title}
        description={mentoria.description}
        image={`${urlFiles}/${mentoria.image}`}
        mentorias
        mentorName={mentoria.mentorInfos.name.split(/(\s).+\s/).join('')}
        mentorImage={`${urlFiles}/${mentoria.mentorInfos.image}`}
      />

      <RedeHorarioCard />
    </Container>
  );
}

export default Mentoria;
