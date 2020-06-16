import React from 'react';
import { string, func, bool } from 'prop-types';
import TimeSlot from './StyledComponents';

const RedeTimeSlot = ({
  descricao, onClick, disponivel, notHoverable
}) => (
  <TimeSlot disponivel={disponivel} onClick={onClick} disabled={!disponivel} notHoverable={notHoverable}>
    {descricao}
  </TimeSlot>
);

RedeTimeSlot.propTypes = {
  descricao: string,
  disponivel: bool,
  notHoverable: bool,
  onChange: func,
};

RedeTimeSlot.defaultProps = {
  descricao: '',
  disponivel: true,
  notHoverable: false,
  onClick: () => {},
};

export default RedeTimeSlot;
