import { func, string } from 'prop-types';
import React from 'react';

import ContainerCheckbox from './ContainerCheckbox';


const Checkbox = ({ label, value, onChange }) => (
  <ContainerCheckbox>
    <input type="checkbox" id={value} name={value} />
    <ContainerCheckbox.Label htmlFor={value}>{label}</ContainerCheckbox.Label>
  </ContainerCheckbox>
);

Checkbox.propTypes = {
  label: string,
  value: string,
  onChange: func,
};

Checkbox.defaultProps = {
  label: string,
  value: string,
  onChange: () => {},
};

export default Checkbox;
