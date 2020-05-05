import React from 'react';
import { string, func, bool } from 'prop-types';
import Button from './StyledComponents';

const RedeButton = ({
  descricao, onClick, desabilitado, cancelar, claro,
}) => (
  <Button onClick={onClick} disabled={desabilitado} cancelar={cancelar} claro={claro}>
    {descricao}
  </Button>
);

RedeButton.propTypes = {
  descricao: string,
  onClick: func.isRequired,
  desabilitado: bool,
  cancelar: bool,
  claro: bool,
};

RedeButton.defaultProps = {
  descricao: '',
  desabilitado: false,
  cancelar: false,
  claro: false,
};

export default RedeButton;
