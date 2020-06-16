import styled from 'styled-components';

import Selecionado from './Selecionado';
import Deselecionado from './Deselecionado';
import COLOR from '../../../utils/colors.constants';


const TimeSlot = styled.button`
  min-width: 110px;
  min-height: 40px;
  width: 30%;
  font-size: 1em;
  border-radius: 10px;
  font-weight: 600;
  :hover{
    cursor:pointer;
  }
  ${({ selecionado }) => selecionado && Selecionado}
  ${({ selecionado }) => !selecionado && Deselecionado}
  
  background-color: ${COLOR.VERDE};
  `;

TimeSlot.displayName = 'TimeSlot';

export default TimeSlot;
