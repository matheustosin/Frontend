import styled, { css } from 'styled-components';
import InputBox from './InputBox';

const IsInvalid = css`
  border-color: #F54B5E;
  :focus {
    border: 1px solid #cc1d30;
  }
`;

const Input = styled.input`
  height: 55px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #B9B9B9;
  padding: 0 10px;
  color: #7F7F80;
  ::placeholder {
    font-size: 14px;
    color: #B9B9B9;
  }
  :focus {
    outline: none;
    border: 1px solid #018777;
  }

  ${({ isInvalid }) => isInvalid && IsInvalid}
  
`;

Input.displayName = 'Input';
Input.box = InputBox;

export default Input;
