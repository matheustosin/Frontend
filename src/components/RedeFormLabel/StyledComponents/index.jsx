import styled from 'styled-components';

import Label from './Label';

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

TextField.displayName = 'TextField';

TextField.Label = Label;

export default TextField;
