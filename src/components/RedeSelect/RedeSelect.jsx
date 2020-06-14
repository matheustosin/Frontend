import React from 'react';
import {
  string, func, array,
} from 'prop-types';
import TextField from '../RedeFormLabel/StyledComponents';
import Container from './StyledComponents';
import Select from './StyledComponents/Select';


const RedeSelect = ({
  options,
  select,
  onChange,
}) => (
  <Container>
    <TextField.Label>Áreas de Conhecimento</TextField.Label>
    <Select onChange={onChange}>
      <option value="" disabled selected={(!select)}>Selecione...</option>
      {
          options.map((element) => ((select === element)
            ? <option value={element} selected>{element}</option>
            : <option value={element} disabled={((element === ''))}>{element}</option>))
      }

    </Select>
  </Container>
);

RedeSelect.propTypes = {
  options: array,
  selected: string,
  onChange: func,

};

RedeSelect.defaultProps = {
  options: [],
  selected: '',
  onChange: () => {},
};

export default RedeSelect;
