import styled from 'styled-components';

import Disponivel from './Disponivel';
import Indisponivel from './Indisponivel';


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
  ${({ disponivel }) => disponivel && Disponivel}
  ${({ disponivel }) => !disponivel && Indisponivel}
  `;

TimeSlot.displayName = 'TimeSlot';

export default TimeSlot;
