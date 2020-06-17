import React from 'react';
import { string, func, bool } from 'prop-types';
import TimeSlot from './StyledComponents';

const RedeTimeSlot = ({
  descricao, onClick, disponivel, notHoverable, notClickable,
}) => (
  <TimeSlot disponivel={disponivel} onClick={onClick} disabled={!disponivel || notClickable} notHoverable={notHoverable}>
    {descricao}
  </TimeSlot>
);

RedeTimeSlot.propTypes = {
  descricao: string,
  disponivel: bool,
  notHoverable: bool,
  notClickable: bool,
  onChange: func,
};

RedeTimeSlot.defaultProps = {
  descricao: '',
  disponivel: true,
  notHoverable: false,
  notClickable: false,
  onClick: () => {},
};

export default RedeTimeSlot;
