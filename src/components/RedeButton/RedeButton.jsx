import React from 'react';
import { string, func, bool } from 'prop-types';
import Button from './StyledComponents';
import RefreshIcon from '../../assets/RefreshIcon';

const RedeButton = ({
  descricao, onClick, desabilitado, cancelar, claro, loading,
}) => (
  <Button
    onClick={onClick}
    disabled={desabilitado || loading}
    cancelar={cancelar}
    claro={claro}
    loading={loading}
  >
    {loading && (
    <>
      <RefreshIcon />
    </>
    )}
    {descricao}
  </Button>
);

RedeButton.propTypes = {
  descricao: string,
  onClick: func,
  desabilitado: bool,
  cancelar: bool,
  claro: bool,
  loading: bool,
};

RedeButton.defaultProps = {
  descricao: '',
  desabilitado: false,
  cancelar: false,
  claro: false,
  loading: false,
  onClick: () => { },
};

export default RedeButton;
