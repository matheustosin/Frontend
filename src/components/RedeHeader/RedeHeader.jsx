import React from 'react';
import Container from './StyledComponents';
import { string } from 'prop-types';
import logo_cabecalho from '../../assets/logo_cabecalho.png'
import Title from './StyledComponents/Title'

const RedeHeader = ({title}) => (
    <Container>
        <img alt="rede-de-mentores-logo" src={logo_cabecalho} />
        <Title>{title}</Title>
    </Container>
);

RedeHeader.defaultTypes = {
    title: string
};

RedeHeader.defaultProps = {
        title: ''
};

export default RedeHeader;