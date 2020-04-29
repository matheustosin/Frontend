import React from 'react';
import Container from './StyledComponents';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField'

const CadastroAprendiz = () => (
    <Container>
        <RedeHeader title='cadastro de aprendiz'/>

        <Container width='50vw'>
            <RedeTextField descricao="Nome Completo" value='' onChange={undefined} />
            <RedeTextField descricao="Data de Nascimento" value='' onChange={undefined} />
            <RedeTextField descricao="CPF" value='' onChange={undefined} />
            <RedeTextField descricao="Telefone" value='' onChange={undefined} />
            <RedeTextField descricao="Matrícula" value='' onChange={undefined} />
        </Container>
        <Container width='50vw'>
            <RedeTextField descricao="Email" value='' onChange={undefined} />
            <RedeTextField descricao="Senha" value='' onChange={undefined} />
            <RedeTextField descricao="Confirmar Senha" value='' onChange={undefined} />
        </Container>
    </Container>
);

export default CadastroAprendiz;
