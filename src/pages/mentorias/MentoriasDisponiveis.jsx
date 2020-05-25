import React, { useState, useEffect } from 'react';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Card from '../../components/RedeCard/RedeCard';
import Caminho from './StyledComponents/Caminho';
import Container from './StyledComponents';
import { urlFiles } from '../../services/http';
import CaminhoTitle from './StyledComponents/CaminhoTitle';
import CaminhoTitleDesabilitado from './StyledComponents/CaminhoTitleDesabilitado';
import CaminhoAp from './StyledComponents/CaminhoAp';


//para teste
import mentoriaImage from '../../assets/mentoria.png';

//conexao com back
import { mentoriasByMentorado } from '../../services/mentorado';


function MentoriasDisponiveis() {
    
    useEffect(()=>{
        getMentorias();
    }, [])

    const [search, setSearch] = useState('');
    const [mentorias, setMentorias] = useState('');

    function attemptSearch(event) { 
        console.log(search);
    }

    function getMentorias() {
        const token = sessionStorage.getItem('token');
        const headers = { headers: { Authorization: `Bearer ${token}` } };

        mentoriasByMentorado(headers) 
        .then((res) => {
            if (res.status === 200) {
                generateCards(res.data);
            }
        })
        .catch((err) => {
            alert('Problema ao buscar informações. Tente novamente.');
            console.error(err);
        });
    }

    function generateCards(arrayMentorias) {
        // vai receber area especifica da mentoria da tela anterior 
        const areaConhecimento = 'UX';

        const mentoriasAreaConhecimento = arrayMentorias
        .filter(function (e) {
            return e.knowledgeArea == areaConhecimento;
        })
        .map((mentoria) => (  
            <Card 
                title={mentoria.title}
                description={mentoria.description}
                image={`${urlFiles}/${mentoria.image}`}
            />
        ));
        setMentorias(mentoriasAreaConhecimento);
    }

    attemptSearch();
    
    return (
        <Container>
            <RedeHeader />
            <CaminhoAp>
                <CaminhoTitleDesabilitado>Home</CaminhoTitleDesabilitado>
                <Caminho />
                <CaminhoTitle>Design</CaminhoTitle>
            </CaminhoAp>
            <Container.Search onChange={(e) => setSearch(e.target.value)}  />
            <Container.Title>MENTORIAS DISPONÍVEIS</Container.Title>
            <br/>
            {mentorias}
        </Container>
    );  
}

export default MentoriasDisponiveis;