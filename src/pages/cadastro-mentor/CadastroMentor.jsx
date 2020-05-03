import React, { Component } from 'react';
import user from '../../assets/user.png';
import { cadastrarMentor } from '../../services/user';

import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
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
            areas: [],
            imageurl: user,
            mentorFlag: '',
        };

        this.handleName = this.handleName.bind(this);
        this.handleCPF = this.handleCPF.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAreas = this.handleAreas.bind(this);
        this.handlePrivacyTerms = this.handlePrivacyTerms.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    attemptRegister = (event) => {
        event.preventDefault();
        
        const data = new FormData()
        data.append('image', this.state.image);
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('phone', this.state.phone);
        data.append('linkedin', this.state.linkedin);
        data.append('cpf', this.state.cpf);
        data.append('password', this.state.password);
        data.append('areas', this.state.areas);
        data.append('mentorFlag', 1);
        
        cadastrarMentor(data)
        .then((res) => {
            if (res.status === 200) {
                alert('Usuário cadastrado com sucesso!');
            }
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        });
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
    handleAreas(event) {
        //this.setState({ areas: [event.target.value] });
        this.setState({ areas: ['Design'] });
    }
    handlePrivacyTerms(event) {
        this.setState({ flag: event.target.value });
    }

    //<RedeButton descricao="Adicionar Foto" claro={true} onClick={this.handleImage}/>
    
    handleImage(event) {
        console.log(event.target.files[0]);
        
        this.setState({ 
            image: event.target.files[0],
            imageurl: URL.createObjectURL(event.target.files[0]),
        });

    }

    render() {
        return (
        <Container>
            <RedeHeader title="cadastro de mentor" />

            <Container.FlexContainer>
                <Container.Item>
                        <Container.UserImage src={this.state.imageurl} />
                        <RedeTextField tipo="file" onChange={this.handleImage} />
                </Container.Item>
            </Container.FlexContainer>  
            
            <Container.FlexContainer>
                <Container.Item>
                    <RedeTextField descricao="Nome Completo" valor={this.state.name} onChange={this.handleName}/>
                    <RedeTextField descricao="CPF" valor={this.state.cpf} onChange={this.handleCPF}/>
                    <RedeTextField descricao="Telefone" valor={this.state.phone} onChange={this.handlePhoneNumber} />
                    <RedeTextField descricao="Áreas de Conhecimento" valor={this.state.areas} onChange={this.handleAreas}/>
                    <RedeTextField descricao="LinkedIn" valor={this.state.linkedin} onChange={this.handleLinkedin}/>
                </Container.Item>

                <RedeHorizontalSeparator/>

                <Container.Item>
                    <RedeTextField descricao="Email" valor={this.state.email} onChange={this.handleEmail} />
                    <RedeTextField descricao="Senha" tipo="password" valor={this.state.password} onChange={this.handlePassword} />
                    <RedeTextField descricao="Confirmação de Senha" tipo="password" />
                    <RedeTextField descricao="Aceito o Termo de Privacidade" tipo="checkbox" valor={this.state.flag} onChange={this.handlePrivacyTerms}/>

                    <Container><RedeButton descricao="Cadastrar" onClick={this.attemptRegister} /></Container>
                </Container.Item>

            </Container.FlexContainer>
        </Container>


);
}
}

export default CadastroMentor;
