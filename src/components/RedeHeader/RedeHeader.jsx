import React from 'react';

import { string } from 'prop-types';
import logo from '../../assets/logo2.png';

import Container from './StyledComponents';

const RedeHeader = ({ descricao }) => (
  <>
    <Container>
      <Container.Logo src={logo} />
      <Container.Title>{descricao}</Container.Title>
    </Container>
    <Container.Clearfix />
  </>
);

RedeHeader.propTypes = {
  descricao: string,
};

RedeHeader.defaultProps = {
  descricao: '',
};

export default RedeHeader;
