import React from 'react';
import { string, func, bool } from 'prop-types';
import HorarioButton from './StyledComponents';

const RedeHorarioButton = ({
  horario, onClick, ocupado, desabilitado,
}) => (
  <HorarioButton
    onClick={onClick}
    ocupado={ocupado}
    disabled={desabilitado}
  >
    {horario}
  </HorarioButton>
);

RedeHorarioButton.propTypes = {
  horario: string,
  onClick: func,
  desabilitado: bool,
  ocupado: bool,
};

RedeHorarioButton.defaultProps = {
  horario: '',
  onClick: () => { },
  desabilitado: false,
  ocupado: false,
};

export default RedeHorarioButton;
