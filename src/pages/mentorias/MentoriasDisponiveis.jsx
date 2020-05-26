import React, { useState, useEffect } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import Caminho from './StyledComponents/Caminho';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import CaminhoTitle from './StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from './StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from './StyledComponents/CaminhoAp';
import { mentoriasByMentorado } from '../../services/mentorado';

function MentoriasDisponiveis() {
    
    const [cards, setCards] = useState('');
    //const [areaConhecimento, setAreaConhecimento] = useState(sessionStorage.getItem('areaSelected'));
    const [areaConhecimento, setAreaConhecimento] = useState('UX');
    const [mentorias, setMentorias] = useState([]);

    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        const headers = { headers: { Authorization: `Bearer ${token}` } };

        getMentorias(headers);
    }, [])

    function attemptSearch(event) { 
        const searchCards = mentorias.filter(function (e) {
            return e.title.startsWith(event);
        });
        generateCards(searchCards);
    }

    function getMentorias(headers) {
        
        mentoriasByMentorado(headers) 
        .then((res) => {
            if (res.status === 200) {
                    filterMentorias(res.data);
                }
            })
            .catch((err) => {
                setCards('Nenhuma mentoria encontrada para a Área de Conhecimento selecionada.');
                console.error(err);
            });
    }

    function filterMentorias(arrayMentoriasAll) {

        const mentoriasAreaConhecimento = arrayMentoriasAll
        .filter(function (e) {
            return e.knowledgeArea == areaConhecimento;
        });
        setMentorias(mentoriasAreaConhecimento);
        generateCards(mentoriasAreaConhecimento);
    }

    function generateCards(mentoriasAreaConhecimento) {

        const cardsMentorias = mentoriasAreaConhecimento
        .map((mentoria) => (  
            <Card 
                title={mentoria.title}
                description={mentoria.description}
                image={`${urlFiles}/${mentoria.image}`}
            />
        ));
        setCards(cardsMentorias);
    }
    
    return (
        <Container>
            <RedeHeader />
            <CaminhoAp>
                <CaminhoTitleDesabilitado>Home</CaminhoTitleDesabilitado>
                <Caminho />
                <CaminhoTitle>{areaConhecimento}</CaminhoTitle>
            </CaminhoAp>
            <Container.Search onChange={(e) => attemptSearch(e.target.value)}   />
            <Container.Title>MENTORIAS DISPONÍVEIS</Container.Title>
            <br/>
            {cards}
        </Container>
    );  
}

export default MentoriasDisponiveis;