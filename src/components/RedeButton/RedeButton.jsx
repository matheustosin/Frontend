import React from 'react';
import { string, func, bool } from 'prop-types';
import Button from './StyledComponents';

const RedeButton = ({
  descricao,
  onClick,
  desabilitado,
}) => (
  <Button
    onClick={onClick}
    disabled={desabilitado}
  >
    {descricao}
  </Button>
);

RedeButton.propTypes = {
  descricao: string,
  onClick: func.isRequired,
  desabilitado: bool,
};

RedeButton.defaultProps = {
  descricao: '',
  desabilitado: false,
};

export default RedeButton;
