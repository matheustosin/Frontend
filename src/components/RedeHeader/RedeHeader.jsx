import React from 'react';
import Container from './StyledComponents';
import logo_cabecalho from '../../assets/logo_cabecalho.png'
import { string } from 'prop-types';

const RedeHeader = ({title}) => (
    <Container>
        <Container.Logo src={logo_cabecalho}/>
        <Container.Title>{title}</Container.Title>
    </Container>
);

RedeHeader.defaultTypes = {
    title: string
};

RedeHeader.defaultProps = {
        title: ''
};

export default RedeHeader;