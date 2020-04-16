import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import { login } from '../../services/user';
import { Link, withRouter } from 'react-router-dom';
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

    this.handleChange = this.handleChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  attemptLogin = () => {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(data);

    if (!data.email || !data.password) {
      alert('Preencha os campos de usuário e senha.');
    } else {
      login(data)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            sessionStorage.setItem('token', res.data.token);
            this.props.history.push({
              pathname: '/main',
            });
          }
        })
        .catch((err) => {
          alert('Acesso não autorizado. Verifique seu nome de usuário e senha.');
          console.error(err);
        });
    }
  };

  render() {
    return (
      <Container>
        <Container.SideImage />
        <Container.SideLogin>
          <Container.Logo src={logo} />
          <Container.Form>
            <RedeTextField descricao="Email" value={this.state.name} onChange={this.handleChange} />
            <RedeTextField
              descricao="Senha"
              tipo="password"
              value={this.state.password}
              onChange={this.passwordChange}
            />
            <Container.ForgotPassword> Esqueci minha senha </Container.ForgotPassword>
            <RedeButton descricao="Entrar" onClick={this.attemptLogin} />
            <RedeSeparator descricao="Novo na Rede ?"> </RedeSeparator>
            <Link to={'/register'}>
              <RedeButton descricao="Cadastrar" />
            </Link>
          </Container.Form>
        </Container.SideLogin>
      </Container>
    );
  }
}

export default withRouter(Login);
