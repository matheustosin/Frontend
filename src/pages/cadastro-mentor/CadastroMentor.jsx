import React from 'react';
import user from '../../assets/user.png';

import './CadastroMentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';

import Container from './StyledComponents';



const CadastroMentor = () => (
    <Container>
        <RedeHeader title='cadastro de mentor'/>

    <Container.Form>

    <Container.UserImage src={user} />
    <Container.Button>Adicionar Foto</Container.Button>
    
    <RedeTextField descricao="Nome Completo" />
    <RedeTextField descricao="CPF" />
    <RedeTextField descricao="Telefone" />
    <RedeTextField descricao="Áreas de Conhecimento" />
    <RedeTextField descricao="LinkedIn" />

    <Container.Separator/>

    <RedeTextField descricao="Email" />
    <RedeTextField descricao="Senha" />
    <RedeTextField descricao="Confirmação de Senha" />

    <RedeButton descricao="Cadastrar"></RedeButton>

    </Container.Form>
    
    </Container>


);

export default CadastroMentor;
