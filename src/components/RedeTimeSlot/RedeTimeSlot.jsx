import React from 'react';
import { string, func, bool } from 'prop-types';
import TimeSlot from './StyledComponents';

const RedeTimeSlot = ({
  descricao, onClick, disponivel,
}) => (
  <TimeSlot disponivel={disponivel} onClick={onClick} disabled={!disponivel}>
    {descricao}
  </TimeSlot>
);

RedeTimeSlot.propTypes = {
  descricao: string,
  disponivel: bool,
  onChange: func,
};

RedeTimeSlot.defaultProps = {
  descricao: '',
  disponivel: true,
  onClick: () => {},
};

export default RedeTimeSlot;
