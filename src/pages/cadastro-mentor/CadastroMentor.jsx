import React, { Component } from 'react';
import user from '../../assets/user.png';

import './CadastroMentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';
import Header from '../../components/Header/Header';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';

import Container from './StyledComponents';

class CadastroMentor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            email: '',
            password: '',
            linkedin: '',
            image: '',
            phone: '',
        };

        this.handleName = this.handleName.bind(this);
        this.handleCPF = this.handleCPF.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }

    attemptRegister = (event) => {
        event.preventDefault();
        console.log("ENTRA");
        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            linkedin: this.state.linkedin,
            cpf: this.state.cpf,
            password: this.state.password,
        };
        
        console.log(data.cpf);
        console.log(data.name);
        console.log(data.phone);
        console.log(data.linkedin);
        console.log(data.email);
        console.log(data.password);

    };

    addImage = (event) => {
        event.preventDefault();
        console.log("ADD FOTO");

    };

    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleCPF(event) {
        this.setState({ cpf: event.target.value });
    }
    handlePhoneNumber(event) {
        this.setState({ phone: event.target.value });
    }
    handleLinkedin(event) {
        this.setState({ linkedin: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    
    
    render() {
        return (
        <Container>
            <Header title='cadastro de mentor'/>

            <Container.FlexContainer>
                <Container.Center>
                    <Container.UserImage src={user} />
                    <RedeButton descricao="Adicionar Foto" claro={true} onClick={this.addImage}/>
                </Container.Center>
            </Container.FlexContainer>  
            
            <Container.FlexContainer>
                
                <Container.Item>
                    <RedeTextField descricao="Nome Completo" valor={this.state.name} onChange={this.handleName}/>
                    <RedeTextField descricao="CPF" valor={this.state.cpf} onChange={this.handleCPF}/>
                    <RedeTextField descricao="Telefone" valor={this.state.phone} onChange={this.handlePhoneNumber} />
                    <RedeTextField descricao="Áreas de Conhecimento" />
                    <RedeTextField descricao="LinkedIn" valor={this.state.linkedin} onChange={this.handleLinkedin}/>
                </Container.Item>

                <Container.Center>
                    <RedeHorizontalSeparator/>
                </Container.Center>

                <Container.Item>
                    <RedeTextField descricao="Email" valor={this.state.email} onChange={this.handleEmail} />
                    <RedeTextField descricao="Senha" tipo="password" valor={this.state.password} onChange={this.handlePassword} />
                    <RedeTextField descricao="Confirmação de Senha" />

                    <RedeTextField descricao="Aceito o Termo de Privacidade" tipo="checkbox" />

                    <RedeButton descricao="Cadastrar" onClick={this.attemptRegister} />

                </Container.Item>


            </Container.FlexContainer>
        </Container>


);
}
}

export default CadastroMentor;
