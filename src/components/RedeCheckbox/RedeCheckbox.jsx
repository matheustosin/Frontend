import React from 'react';
import styled from 'styled-components';

import COLOR from '../../utils/colors.constants';

const Checkbox = (props) => <input type="checkbox" {...props} />;

const RedeCheckbox = styled(Checkbox)`
  height: 25px;
  width: 25px;
  appearance: none;
  border: 3px solid ${COLOR.AZUL};
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
