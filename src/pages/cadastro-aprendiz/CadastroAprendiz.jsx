import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/user';
import { Redirect } from 'react-router';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import AccountImage from '../../assets/account.png';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import {
  formatCPF,
  formatTelefone,
  formatDataNascimento,
  formatMatricula,
} from '../../utils/maskUtils';

class CadastroAprendiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      matricula: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      imageurl: AccountImage,
      imagem: '',
      acceptTerms: false,
    };
    this.handleImage = this.handleImage.bind(this);
  }

  attemptRegister = (event) => {
    event.preventDefault();

    const data = new FormData()
    data.append('image', this.state.imagem);
    data.append('name', this.state.nome);
    data.append('email', this.state.email);
    data.append('birthDate', this.state.dataNascimento);
    data.append('cpf', this.state.cpf);
    data.append('phone', this.state.telefone);
    data.append('password', this.state.senha);
    data.append('registration', this.state.matricula);
    data.append('flag', 2); // mentorado flag

    if (!data.get('name') || !data.get('email') || !data.get('birthDate') || !data.get('cpf') 
    || !data.get('phone') || !data.get('password') || !data.get('registration') || !this.state.confirmarSenha) {
      alert('Preencha todos os campos.');
    }
    else if (!data.get('image')){
      alert('Insira uma foto de perfil.');
    }
    else if (!this.state.acceptTerms) {
      alert('Você precisa aceitar o Termo de Privacidade para efetuar o cadastro.')
    }
    else {
      cadastrarUsuario(data)
      .then((res) => {
          if (res.status === 200) {
              alert('Usuário cadastrado com sucesso!');
              this.setState({redirect: true});
          }
      })
      .catch((err) => {
          alert("Não foi possível realizar o cadastro. ");                
      });
    }
  }

  handleImage() {
    document.getElementById('imageFile').click();
    document.getElementById('imageFile').onchange = (event) =>
    {   
      try{
        var url = URL.createObjectURL(event.target.files[0]);
      }catch(e){
        url = this.state.imageurl;
      }
      this.setState({       
        imagem: event.target.files[0],
        imageurl: url,
      });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const {
      nome,
      dataNascimento,
      cpf,
      telefone,
      matricula,
      email,
      senha,
      confirmarSenha,
      imageurl,
      acceptTerms,
    } = this.state;
    const erroSenha = Boolean(senha && confirmarSenha && (senha !== confirmarSenha));
    return (
      <Container width="100vw">
        <RedeHeader title="cadastro de aprendiz" />

        <Container.Image src={imageurl} width="100px" height="100px" style={{ marginBottom: '2vh' }} />
        <input id="imageFile" type="file" hidden />
        <RedeButton descricao="Adicionar Foto" onClick={this.handleImage} claro />

        <Container.FieldContainer>
          <Container justify="start" height="100%">
            <RedeTextField descricao="Nome Completo" valor={nome} onChange={(evt) => this.setState({ nome: evt.target.value })} />
            <RedeTextField descricao="Data de Nascimento" valor={dataNascimento} onChange={(evt) => this.setState({ dataNascimento: formatDataNascimento(evt.target.value) })} />
            <RedeTextField descricao="CPF" valor={cpf} onChange={(evt) => this.setState({ cpf: formatCPF(evt.target.value) })} />
            <RedeTextField descricao="Telefone" valor={telefone} onChange={(evt) => this.setState({ telefone: formatTelefone(evt.target.value) })} />
          </Container>

          {/* Isso foi necessário pois o componente "RedeHorizontalSeparator"
                não apresentou um comportamento responsivo em algumas resoluções */}
          <Container.SeparatorWrapper>
            <RedeHorizontalSeparator />
          </Container.SeparatorWrapper>

          <Container height="100%">
            <RedeTextField descricao="Matrícula" valor={matricula} onChange={(evt) => this.setState({ matricula: formatMatricula(evt.target.value) })} />
            <RedeTextField descricao="Email" valor={email} onChange={(evt) => this.setState({ email: evt.target.value })} />
            <RedeTextField descricao="Senha" valor={senha} tipo="password" onChange={(evt) => this.setState({ senha: evt.target.value })} />
            <RedeTextField descricao="Confirmar Senha" valor={confirmarSenha} tipo="password" onChange={(evt) => this.setState({ confirmarSenha: evt.target.value })} msgAjuda={erroSenha ? 'Senhas não conferem' : ''} erro={erroSenha} />

            <Container.TermsContainer>
              <Container.RedeCheckbox id="termos" valor={acceptTerms} onChange={(evt) => this.setState({ acceptTerms: evt.target.checked })} />
              <Container.Label for="termos">Aceito os termos de uso</Container.Label>
            </Container.TermsContainer>

            <RedeButton descricao="Cadastrar" onClick={this.attemptRegister} />

          </Container>

        </Container.FieldContainer>
      </Container>
    );
  }
}

export default withRouter(CadastroAprendiz);
