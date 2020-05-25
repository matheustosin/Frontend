import React from 'react';
import { string, func } from 'prop-types';
import TextField from './StyledComponents';
import RedeTextField from '../RedeTextField/RedeTextField';

const RedeInputRadio = ({
  descricao, tipo, nome, onChange, checked,
}) => (
  <TextField>
    <TextField.Label>{descricao}</TextField.Label>
    <div>
      <TextField.Radio type={tipo} id="online" name={nome} value="1" onChange={onChange}  />
      <TextField.LabelRadio htmlFor="online">Online</TextField.LabelRadio>
      <TextField.Radio type={tipo} id="presencial" name={nome} value="2" onChange={onChange} />
      <TextField.LabelRadio htmlFor="presencial">Presencial</TextField.LabelRadio>
    </div>
  </TextField>
);

RedeInputRadio.propTypes = {
  descricao: string,
  tipo: string,
  nome: string,
  checked: string,
  onChange: func,
};

RedeTextField.defaultProps = {
  descricao: '',
  tipo: '',
  nome: '',
  checked: '',
  onChange: () => {},
};

export default RedeInputRadio;
