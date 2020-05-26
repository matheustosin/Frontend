import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import { login } from '../../services/user';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeSeparator from '../../components/RedeSeparator/RedeSeparator';
import RedeTextField from '../../components/RedeTextField/RedeTextField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  attemptLogin = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!data.email || !data.password) {
      alert('Preencha os campos de email e senha.');
    } else {
      login(data)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem('token', res.data.token);
            const page = (res.data.result.userType === 1) ? '/mentor' : '/main';
            this.props.history.push({
              pathname: page,
            });
          }
        })
        .catch((err) => {
          alert('Acesso não autorizado. Verifique seu email e sua senha.');
          console.error(err);
        });
    }
  };

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <Container>
        <Container.SideImage />
        <Container.SideLogin>
          <Container.Logo src={logo} />
          <Container.Form>
            <RedeTextField descricao="Email" valor={this.state.email} onChange={this.handleEmail} />
            <RedeTextField
              descricao="Senha"
              tipo="password"
              valor={this.state.password}
              onChange={this.handlePassword}
            />
            <Container.ForgotPassword> Esqueci minha senha </Container.ForgotPassword>
            <RedeButton descricao="Entrar" onClick={this.attemptLogin} />
            <RedeSeparator descricao="Novo na Rede ?"> </RedeSeparator>
            <Link to="/register">
              <RedeButton descricao="Cadastrar" />
            </Link>
          </Container.Form>
        </Container.SideLogin>
      </Container>
    );
  }
}

export default withRouter(Login);
