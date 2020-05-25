import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Input = styled.input`
  outline: 0;
  height: 28px;
  min-width: 300px;
  width: 100%;
  color: ${COLOR.AZUL};
  font-size: 1rem;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid ${COLOR.AZUL};
`;

export default Input;
