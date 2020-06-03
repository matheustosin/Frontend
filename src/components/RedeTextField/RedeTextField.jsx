import React from 'react';
import { string, func, bool } from 'prop-types';
import TextField from './StyledComponents';

const RedeTextField = ({
  descricao,
  tipo,
  valor,
  onChange,
  erro,
  msgAjuda,
}) => (
  <TextField erro={erro}>
    <TextField.Label>{descricao}</TextField.Label>
    <TextField.Input type={tipo} value={valor} onChange={onChange} />
    <TextField.MsgAjuda>{msgAjuda}</TextField.MsgAjuda>
  </TextField>
);

RedeTextField.propTypes = {
  descricao: string,
  tipo: string,
  valor: string,
  erro: bool,
  msgAjuda: string,
  onChange: func,
};

RedeTextField.defaultProps = {
  descricao: '',
  tipo: '',
  valor: '',
  erro: false,
  msgAjuda: '',
  onChange: () => { },
};

export default RedeTextField;
