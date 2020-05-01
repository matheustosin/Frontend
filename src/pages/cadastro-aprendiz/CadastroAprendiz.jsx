import React from 'react';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import AccountImage from '../../assets/account.png';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator'


const CadastroAprendiz = () => (
    <Container width="100vw">
        <RedeHeader title='cadastro de aprendiz'/>
        <Container.Image src={AccountImage} width="100px" height="100px"/>
        <RedeButton descricao="Adicionar Foto" onClick={undefined} claro={true}/>

        <Container.TextContainer>
            <Container>
                <RedeTextField descricao="Nome Completo" value='' onChange={undefined} />
                <RedeTextField descricao="Data de Nascimento" value='' onChange={undefined} />
                <RedeTextField descricao="CPF" value='' onChange={undefined} />
                <RedeTextField descricao="Telefone" value='' onChange={undefined} />
                <RedeTextField descricao="Matrícula" value='' onChange={undefined} />
            </Container>

            {/* Isso foi necessário pois o componente "RedeHorizontalSeparator"
                não apresentou um comportamento responsivo em algumas resoluções*/}
            <Container.SeparatorWrapper>
                <RedeHorizontalSeparator/>
            </Container.SeparatorWrapper>

            <Container>
                <RedeTextField descricao="Email" value='' onChange={undefined} />
                <RedeTextField descricao="Senha" value='' onChange={undefined} />
                <RedeTextField descricao="Confirmar Senha" value='' onChange={undefined} />
                <RedeButton descricao="Cadastrar" onClick={undefined} />
            </Container>
        </Container.TextContainer>
    </Container>
);

export default CadastroAprendiz;
