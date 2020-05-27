import styled from 'styled-components';

import Label from './Label';
import LabelRadio from './LabelRadio';
import Radio from './Radio';

const TextField = styled.div`
  display: flex;
  flex-direction: column;
`;

TextField.displayName = 'TextField';

TextField.Label = Label;
TextField.Radio = Radio;
TextField.LabelRadio = LabelRadio;

export default TextField;
