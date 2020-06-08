import { func, object } from 'prop-types';
import React from 'react';

import SelectStyled from './SelectStyled';

const Select = ({ objectValues, onChange }) => (
  <SelectStyled onChange={onChange}>
    {objectValues.map((value) => (
      <option value={value}>{value}</option>
    ))}
  </SelectStyled>
);

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  objectValues: object,
  onChange: func,
};

Select.defaultProps = {
  objectValues: object,
  onChange: () => {},
};

export default Select;
