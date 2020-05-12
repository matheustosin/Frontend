import styled from 'styled-components';

import Selecionado from  './Selecionado' 
import Deselecionado from './Deselecionado' 

const TimeSlot = styled.button`
  width: 110px;
  height: 40px;
  font-size: 1em;
  border-radius: 10px;
  font-weight: 600;
  :hover{
    cursor:pointer;
  }
  ${({ selecionado }) => selecionado && Selecionado}
  ${({ deselecionado }) => deselecionado && Deselecionado}

  `;

TimeSlot.displayName = 'TimeSlot';

export default TimeSlot;
