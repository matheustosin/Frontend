import React from 'react';

import { string } from 'prop-types';
import logo from '../../assets/logo2.png';

import Container from './StyledComponents';

const Header = ({ descricao }) => (
  <Container>
    <Container.Logo src={logo} />
    <Container.Title>{descricao}</Container.Title>
  </Container>
);

Header.propTypes = {
  descricao: string,
};

Header.defaultProps = {
  descricao: '',
};

export default Header;
