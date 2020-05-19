import React, { useState } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import Caminho from './StyledComponents/Caminho';

import Container from './StyledComponents';


function MentoriasDisponiveis() {

    const [search, setSearch] = useState('');

    function attemptSearch(event) { 
        console.log(search);
    }
    
    attemptSearch();

    return (
        <Container>
            <RedeHeader />
            <Caminho />
            <Container.Title>MENTORIAS DISPONÍVEIS</Container.Title>
            <Container.Search onChange={(e) => setSearch(e.target.value)}  />
            <br/>
            <Card title="MENTORIA" description="rersdsdhshdsjdhjshdhsjdhjadhkshkhkashfkasjhfkjshfkasdhafkshfkshfaskfhksdfasfhaskfasdfkjsdafkhfjkashfkashfkashfkashfakfh" />
        </Container>
    );
}

export default MentoriasDisponiveis;