import React from 'react';

import { string } from 'prop-types';
import logo from '../../assets/logo2.png';

import Container from './StyledComponents';

const Header = ({ descricao }) => (
  <Container>
    <Container.Logo src={logo} />
    {descricao}
  </Container>
);

Header.propTypes = {
  descricao: string,
};

Header.defaultProps = {
  descricao: '',
};

export default Header;
