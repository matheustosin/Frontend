import styled from 'styled-components';
import Desabilitado from './Desabilitado';

const Button = styled.button`
  border: none;
  width: 250px;
  height: 40px;
  color: #00273f;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
  font-weight: 600;
  border-radius: 10px;
  background-color: #ffef52;

  :hover {
    box-shadow: 0 0 15px rgb(255, 240, 109);
  }

  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && Desabilitado}
`;

Button.displayName = 'Button';

export default Button;
