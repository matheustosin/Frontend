import React from 'react';

import logo from "../../assets/logo2.png";

import { string, func, bool } from 'prop-types';
import Logo from './StyledComponents';
import Container from './StyledComponents';

const Header = ({
  descricao,
}) => (
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
