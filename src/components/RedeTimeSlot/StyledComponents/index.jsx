import styled from 'styled-components';

import Disponivel from './Disponivel';
import Indisponivel from './Indisponivel';
import COLOR from '../../../utils/colors.constants'

const TimeSlot = styled.button`
  min-width: 110px;
  min-height: 40px;
  width: 30%;
  font-size: 0.9em;
  border-radius: 10px;
  font-weight: 600;
  color: ${COLOR.PRETO};

  :hover{
    cursor:pointer;
  }
  
  ${({ notHoverable }) => notHoverable && `:hover{cursor:initial;}`
}
  ${({ disponivel }) => disponivel && Disponivel}
  ${({ disponivel }) => !disponivel && Indisponivel}
  `;

TimeSlot.displayName = 'TimeSlot';

export default TimeSlot;
