import React from 'react';
import { string, func } from 'prop-types';
import Container from './StyledComponents';
import Input from './StyledComponents/Input';


const RedeInputSearch = ({
  placeholder, onChange,
}) => (
  <Container>
    <Input type="text" placeholder={placeholder} onChange={onChange} />
  </Container>
);

RedeInputSearch.propTypes = {
  descricao: string,
  onChange: func,
};

RedeInputSearch.defaultProps = {
  descricao: '',
  onChange: () => {},
};

export default RedeInputSearch;
