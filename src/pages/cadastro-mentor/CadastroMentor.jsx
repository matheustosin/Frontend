import React, { Component } from 'react';
import user from '../../assets/user.png';
import { cadastrarMentor } from '../../services/user';

import './CadastroMentor.css';
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
            image: new File([], ''),
            phone: '',
            areas: '',
        };

        this.handleName = this.handleName.bind(this);
        this.handleCPF = this.handleCPF.bind(this);
        this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAreas = this.handleAreas.bind(this);
        this.handlePrivacyTerms = this.handlePrivacyTerms.bind(this);
        this.addImage = this.addImage.bind(this);

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
            areas: this.state.areas,
            flag: this.state.areas,
            image: this.state.image,
        };

        

        data.flag = 1;

        cadastrarMentor(data)
        .then(res => {
            console.log(res);
        
        // .then((res) => {
        //     if (res.status === 200) {
        //     alert('CADASTROU!!');
        //     }
        //   })
        //   .catch((err) => {
        //     alert('ERRO!!');
        //     console.error(err);
        //   });

        console.log("cpf: " + data.cpf);
        console.log("name: " + data.name);
        console.log("phone: " + data.phone);
        console.log("linkedin: " + data.linkedin);
        console.log("email: " + data.email);
        console.log("password: " + data.password);
        console.log("areas: " + data.areas);
        console.log("flag: " + data.flag);
        console.log("image: " + data.image);
    });
    };

    addImage(event) {
        //event.preventDefault();
        console.log("ADD FOTO");
        console.log(event.target.files[0]);

        this.setState({ 
            image:  event.target.files[0]
        });
    }

    handleName(event) {
        this.setState({ name: event.target.value });
        console.log("NOME::" +this.state.name);
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
        this.setState({ areas: event.target.value });
    }
    handlePrivacyTerms(event) {
        this.setState({ flag: event.target.value });
    }
    /*handleImage(event) {
        //this.setState({ image: event.target.value });
        console.log(event.target.files[0]);
    }

    handleImageUpload = event => {
        this.setState({ image: event.target.files[0] });
    }*/
    //<RedeButton descricao="Adicionar Foto" claro={true} onClick={this.handleImage}/>
    

    render() {
        return (
        <Container>
            <RedeHeader title="cadastro de mentor" />

            <Container.FlexContainer>
                <Container.Item>
                        <Container.UserImage src={user} />
                        <RedeTextField tipo="file" onChange={this.addImage} />
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
