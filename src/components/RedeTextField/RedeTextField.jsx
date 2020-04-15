import React from 'react';
import { string } from 'prop-types';
import TextField from './StyledComponents';

const RedeTextField = ({ descricao, tipo }) => (
  <TextField>
    <TextField.Label tipo={tipo}>{descricao}</TextField.Label>
    <TextField.Input />
  </TextField>
);

RedeTextField.propTypes = {
  descricao: string,
  tipo: string,
};

RedeTextField.defaultProps = {
  descricao: '',
  tipo: '',
};

export default RedeTextField;
