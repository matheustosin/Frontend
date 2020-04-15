import React from 'react';
import { string } from 'prop-types';
import TextField from './StyledComponents';

const RedeTextField = ({ descricao, tipo }) => (
  <TextField>
    <TextField.Label>{descricao}</TextField.Label>
    <TextField.Input />
  </TextField>
);

RedeTextField.propTypes = {
  descricao: string,
};

RedeTextField.defaultProps = {
  descricao: '',
};

export default RedeTextField;
