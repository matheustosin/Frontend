import React, { useState, useEffect } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import edition from '../../assets/create-new-pencil-button.png';
import confirm from '../../assets/confirm.png';
import denied from '../../assets/denied.png';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import { mentoriasByMentorado } from '../../services/mentorado';
import RedeIcon from '../../components/RedeIcon/RedeIcon';

function Administrador() {
    
    return (
        <Container>
            <RedeHeader />
            <Container.Title>APROVAÇÕES PENDENTES</Container.Title>
            <br/>
            <RedeIcon imageUrl={confirm} onClick={} />
            <RedeIcon imageUrl={denied} onClick={} />
            <RedeIcon imageUrl={edition} onClick={} />
        </Container>
    );  
}

export default Administrador;