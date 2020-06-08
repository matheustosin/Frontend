import React, { useState } from 'react';
import Container from './StyledComponents';
import Caminho from '../mentorias/StyledComponents/Caminho';
import CaminhoTitle from '../mentorias/StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from '../mentorias/StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from '../mentorias/StyledComponents/CaminhoAp';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeCard from '../../components/RedeCard/RedeCard';

function Mentoria() {

 // const [areaConhecimento, setAreaConhecimento] = useState(sessionStorage.getItem('areaSelected'));

  return (
    <Container>
      <RedeHeader />
         <CaminhoAp>
          <CaminhoTitleDesabilitado>
            <a href="../aprendiz/Aprendiz.jsx">Home</a>
          </CaminhoTitleDesabilitado>
          <Caminho />
          <CaminhoTitleDesabilitado>
            <a href="../aprendiz/Aprendiz.jsx">Área do Conhecimento</a>
          </CaminhoTitleDesabilitado>
          <Caminho />
          <CaminhoTitle>{'Nome da Mentoria'}</CaminhoTitle>
         </CaminhoAp>
         <RedeCard></RedeCard>
    </Container>
  );
}

export default Mentoria;
