import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { cadastrarUsuario } from '../../services/user';
import Container from '../cadastro-mentor/StyledComponents'; //?
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import AccountImage from '../../assets/account.png';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';
import {
  formatCPF,
  formatTelefone,
  formatDataNascimento,
  formatMatricula,
} from '../../utils/maskUtils';

class CadastroMentorado extends Component {
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

    const data = new FormData();
    data.append('image', this.state.imagem);
    data.append('name', this.state.nome);
    data.append('email', this.state.email);
    data.append('birthDate', this.state.dataNascimento);
    data.append('cpf', this.state.cpf);
    data.append('phone', this.state.telefone);
    data.append('password', this.state.senha);
    data.append('registration', this.state.matricula);
    data.append('flag', 2); // mentorado flag

    if (
      !data.get('name')
      || !data.get('email')
      || !data.get('birthDate')
      || !data.get('cpf')
      || !data.get('phone')
      || !data.get('password')
      || !data.get('registration')
      || !this.state.confirmarSenha
    ) {
      alert('Preencha todos os campos.');
    } else if (!data.get('image')) {
      alert('Insira uma foto de perfil.');
    } else if (!this.state.acceptTerms) {
      alert('Você precisa aceitar o Termo de Privacidade para efetuar o cadastro.');
    } else {
      cadastrarUsuario(data)
        .then((res) => {
          if (res.status === 200) {
            alert('Usuário cadastrado com sucesso!');
            this.setState({ redirect: true });
          }
        })
        .catch((err) => {
          alert('Não foi possível realizar o cadastro. ');
          console.log(err);
        });
    }
  };

  handleImage() {
    let url;
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = (event) => {
      try {
        url = URL.createObjectURL(event.target.files[0]);
      } catch (e) {
        url = this.state.imageurl;
      }
      this.setState({
        imagem: event.target.files[0],
        imageurl: url,
      });
    };
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
    const erroSenha = Boolean(senha && confirmarSenha && senha !== confirmarSenha);
    return (
      <Container>
        <RedeHeader descricao="Cadastro de Mentorado" />

        <Container.FlexContainer style={{ marginTop: '60px' }}>
          <Container.Item style={{ textAlign: 'center' }}>
            <Container.UserImage src={imageurl} />
            <input id="fileButton" type="file" hidden />
            <Container style={{ marginBottom: '2vh' }}>
              <RedeButton descricao="Adicionar Foto" claro onClick={this.handleImage} />
            </Container>
          </Container.Item>
        </Container.FlexContainer>

        <Container.FlexContainer>
          <Container.Item>
            <RedeTextField
              descricao="Nome Completo"
              valor={nome}
              onChange={(evt) => this.setState({ nome: evt.target.value })}
            />
            <RedeTextField
              descricao="Data de Nascimento"
              valor={dataNascimento}
              onChange={(evt) => this.setState({
                dataNascimento: formatDataNascimento(evt.target.value),
              })}
            />
            <RedeTextField
              descricao="CPF"
              valor={cpf}
              onChange={(evt) => this.setState({ cpf: formatCPF(evt.target.value) })}
            />
            <RedeTextField
              descricao="Telefone"
              valor={telefone}
              onChange={(evt) => this.setState({ telefone: formatTelefone(evt.target.value) })}
            />
            <RedeTextField
              descricao="Matrícula"
              valor={matricula}
              onChange={(evt) => this.setState({ matricula: formatMatricula(evt.target.value) })}
            />
          </Container.Item>

          <RedeHorizontalSeparator />

          <Container.Item>
            <RedeTextField
              descricao="Email"
              valor={email}
              onChange={(evt) => this.setState({ email: evt.target.value })}
            />
            <RedeTextField
              descricao="Senha"
              valor={senha}
              tipo="password"
              onChange={(evt) => this.setState({ senha: evt.target.value })}
            />
            <RedeTextField
              descricao="Confirmação de Senha"
              valor={confirmarSenha}
              tipo="password"
              onChange={(evt) => this.setState({ confirmarSenha: evt.target.value })}
              msgAjuda={erroSenha ? 'Senhas não conferem' : ''}
              erro={erroSenha}
            />

            <Container.FlexContainer style={{ flexDirection: 'row' }}>
              <RedeCheckbox
                id="termos"
                value={acceptTerms}
                onChange={(evt) => this.setState({ acceptTerms: evt.target.checked })}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="termos" style={{ marginTop: '5px' }}>Aceito os termos de uso</label>
            </Container.FlexContainer>

            <Container>
              <RedeButton descricao="Cadastrar" onClick={this.attemptRegister} />
            </Container>
          </Container.Item>
        </Container.FlexContainer>
      </Container>
    );
  }
}

export default withRouter(CadastroMentorado);
