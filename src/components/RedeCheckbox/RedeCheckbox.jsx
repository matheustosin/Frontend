import styled from 'styled-components';
import React from 'react'

const Checkbox = props => (
    <input type="checkbox" {...props}/>
)

const RedeCheckbox = styled(Checkbox)`
  height: 25px;
  width: 25px;
  appearance: none;
  border: 3px solid #00273F;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;

  &:before {
    content: '';
  }

  &:checked {
    &:after {
      content: '✔';
    }
  }
`;

export default RedeCheckbox;