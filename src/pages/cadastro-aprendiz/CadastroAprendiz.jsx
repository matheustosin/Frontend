import React from 'react';
import Container from './StyledComponents';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField'

const CadastroAprendiz = () => (
    <Container width="100vw">
        <RedeHeader title='cadastro de aprendiz'/>

        <Container.TextFieldContainer>
            <Container>
                <RedeTextField descricao="Nome Completo" value='' onChange={undefined} />
                <RedeTextField descricao="Data de Nascimento" value='' onChange={undefined} />
                <RedeTextField descricao="CPF" value='' onChange={undefined} />
                <RedeTextField descricao="Telefone" value='' onChange={undefined} />
                <RedeTextField descricao="Matrícula" value='' onChange={undefined} />
            </Container>
            <Container>
                <RedeTextField descricao="Email" value='' onChange={undefined} />
                <RedeTextField descricao="Senha" value='' onChange={undefined} />
                <RedeTextField descricao="Confirmar Senha" value='' onChange={undefined} />
            </Container>
        </Container.TextFieldContainer>
    </Container>
);

export default CadastroAprendiz;
