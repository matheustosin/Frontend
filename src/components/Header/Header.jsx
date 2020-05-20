import React from 'react';

import { string } from 'prop-types';
import logo from '../../assets/logo2.png';

import Container from './StyledComponents';

const Header = ({ descricao, imgProfile }) => (
  <Container>
    <Container.Logo src={logo} />
    <Container.Title>{descricao}</Container.Title>

    { (imgProfile) ? <Container.Logo src={imgProfile} /> : ' ' }
  </Container>
);

Header.propTypes = {
  descricao: string,
};

Header.defaultProps = {
  descricao: '',
};

export default Header;
