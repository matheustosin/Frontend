import React, { Component } from 'react';
import { Redirect } from 'react-router';
import AccountImage from '../../assets/account.png';
import { cadastrarUsuario } from '../../services/user';
import { formatCPF, formatTelefone } from '../../utils/maskUtils';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';

class CadastroMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cpf: '',
      email: '',
      password: '',
      confirmPassword: '',
      linkedin: '',
      image: '',
      phone: '',
      areas: '', // [],
      imageurl: AccountImage,
      acceptTerms: false,
      redirect: false,
    };
  }

  attemptRegister = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('image', this.state.image);
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('phone', this.state.phone);
    data.append('linkedin', this.state.linkedin);
    data.append('cpf', this.state.cpf);
    data.append('password', this.state.password);
    data.append('areas', this.state.areas);
    data.append('flag', 1);

    if (
      !data.get('name')
      || !data.get('email')
      || !data.get('phone')
      || !data.get('linkedin')
      || !data.get('cpf')
      || !data.get('areas')
      || !data.get('password')
      || !this.state.confirmPassword
    ) {
      alert('Preencha todos os campos.');
    } else if (!data.get('image')) {
      alert('Insira uma foto de perfil.');
    } else if (
      data.get('password')
      && this.state.confirmPassword
      && data.get('password') !== this.state.confirmPassword
    ) {
      alert('Senhas não são iguais.');
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
        .catch(() => {
          alert('Não foi possível realizar o cadastro. ');
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
        image: event.target.files[0],
        imageurl: url,
      });
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const {
      name,
      cpf,
      email,
      password,
      confirmPassword,
      linkedin,
      phone,
      areas,
      imageurl,
      acceptTerms,
    } = this.state;
    const erroSenha = Boolean(password && confirmPassword && password !== confirmPassword);
    return (
      <Container>
        <RedeHeader descricao="Cadastro de Mentor" />

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
              valor={name}
              onChange={(evt) => this.setState({ name: evt.target.value })}
            />
            <RedeTextField
              descricao="CPF"
              valor={cpf}
              onChange={(evt) => this.setState({ cpf: formatCPF(evt.target.value) })}
            />
            <RedeTextField
              descricao="Telefone"
              valor={phone}
              onChange={(evt) => this.setState({ phone: formatTelefone(evt.target.value) })}
            />
            <RedeTextField
              descricao="Áreas de Conhecimento"
              valor={areas}
              onChange={(evt) => this.setState({ areas: evt.target.value })}
            />
            <RedeTextField
              descricao="LinkedIn"
              valor={linkedin}
              onChange={(evt) => this.setState({ linkedin: evt.target.value })}
            />
          </Container.Item>

          <RedeHorizontalSeparator />

          <Container.Item>
            <RedeTextField descricao="Email" valor={email} onChange={(evt) => this.setState({ email: evt.target.value })} />
            <RedeTextField
              descricao="Senha"
              tipo="password"
              valor={password}
              onChange={(evt) => this.setState({ password: evt.target.value })}
            />
            <RedeTextField
              descricao="Confirmação de Senha"
              tipo="password"
              valor={confirmPassword}
              onChange={(evt) => this.setState({ confirmPassword: evt.target.value })}
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

export default CadastroMentor;
