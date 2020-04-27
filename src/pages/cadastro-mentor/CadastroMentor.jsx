import React from 'react';
import user from '../../assets/user.png';

import './CadastroMentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';
import Header from '../../components/Header/Header';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeLineSeparator from '../../components/RedeLineSeparator/RedeLineSeparator';

import Container from './StyledComponents';



const CadastroMentor = () => (
    <Container>
        <Header title='cadastro de mentor'/>

        <Container.FlexContainer>
            <Container.Center>
                <Container.UserImage src={user} />
                <Container.Button>Adicionar Foto</Container.Button>
            </Container.Center>
        </Container.FlexContainer>
        
        <Container.FlexContainer>
            
            <Container.Item>
                <RedeTextField descricao="Nome Completo" />
                <RedeTextField descricao="CPF" />
                <RedeTextField descricao="Telefone" />
                <RedeTextField descricao="Áreas de Conhecimento" />
                <RedeTextField descricao="LinkedIn" />
            </Container.Item>

            <Container.Center>
                <RedeLineSeparator/>
            </Container.Center>

            <Container.Item>
            <RedeTextField descricao="Email" />
                <RedeTextField descricao="Senha" />
                <RedeTextField descricao="Confirmação de Senha" />

                <RedeTextField descricao="Aceito o Termo de Privacidade" tipo="checkbox" />

                <RedeButton descricao="Cadastrar"></RedeButton>
            </Container.Item>


        </Container.FlexContainer>
    </Container>


);

export default CadastroMentor;
