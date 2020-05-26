import React from 'react';

import { string } from 'prop-types';
import logo from '../../assets/logo2.png';

import Container from './StyledComponents';

const RedeHeader = ({ descricao, imgProfile }) => (
  <>
    <Container>
      <Container.Logo src={logo} />
      <Container.Title>{descricao}</Container.Title>
      { (imgProfile) ? <Container.ImgProfile src={imgProfile} /> : ''}
    </Container>
    <Container.Clearfix />
  </>
);

RedeHeader.propTypes = {
  descricao: string,
  imgProfile: string,
};

RedeHeader.defaultProps = {
  descricao: '',
  imgProfile: '',
};

export default RedeHeader;
