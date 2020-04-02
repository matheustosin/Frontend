import React from 'react';
import { string, func, bool } from 'prop-types';
import Input from './StyledComponents';

const RedeInput = ({
  descricao,
  onClick,
  desabilitado,
}) => (
  <Input.box>
    <Input
      onClick={onClick}
      disabled={desabilitado}
    >
      {descricao}
    </Input>
  </Input.box>

);

RedeInput.propTypes = {
  descricao: string,
  onClick: func.isRequired,
  desabilitado: bool,
};

RedeInput.defaultProps = {
  descricao: '',
  desabilitado: false,
};

export default RedeInput;
