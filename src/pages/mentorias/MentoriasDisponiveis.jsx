import React, { Component } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';

import Container from './StyledComponents';


function MentoriasDisponiveis() {

    return (
        <Container>
            <RedeHeader />
            <Container.Title>MENTORIAS DISPONÍVEIS</Container.Title>
        </Container>
    );
}

export default MentoriasDisponiveis;