import React from 'react';
import { string, func } from 'prop-types';
import TextField from './StyledComponents';

const RedeInputRadio = ({
  descricao, tipo, nome, onChange,
}) => (
  <TextField>
    <TextField.Label>{descricao}</TextField.Label>
    <div>
      <TextField.Radio type={tipo} id="online" name={nome} value="1" onChange={onChange} />
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
  onChange: func,
};

RedeInputRadio.defaultProps = {
  descricao: '',
  tipo: '',
  nome: '',
  onChange: () => { },
};

export default RedeInputRadio;
