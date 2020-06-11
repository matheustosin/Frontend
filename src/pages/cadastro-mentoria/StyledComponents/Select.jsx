import { func, object } from 'prop-types';
import React from 'react';

import SelectStyled from './SelectStyled';

const Select = ({ options, select, onChange }) => (
  <SelectStyled onChange={onChange}>
    {options.map((value) => ((value === select) ? <option value={value} selected>{value}</option> : <option value={value}>{value}</option>))}
  </SelectStyled>
);

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: object,
  onChange: func,
};

Select.defaultProps = {
  options: object,
  onChange: () => {},
};

export default Select;
