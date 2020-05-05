import styled from 'styled-components';
import Desabilitado from './Desabilitado';
import Claro from './Claro';
import Cancelar from './Cancelar';

import COLOR from '../../../utils/colors.constants';

const Button = styled.button`
  border: none;
  width: 250px;
  height: 40px;
  margin: 10px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  font-weight: 600;
  border-radius: 10px;
  color: ${COLOR.AZUL};
  background-color: ${COLOR.AMARELO};

  :hover {
    box-shadow: 0 0 15px ${COLOR.AMARELO};
  }

  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && Desabilitado}
  ${({ cancelar }) => cancelar && Cancelar}
  ${({ claro }) => claro && Claro}
`;

Button.displayName = 'Button';

export default Button;
