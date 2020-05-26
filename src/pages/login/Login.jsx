import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import { login } from '../../services/user';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeSeparator from '../../components/RedeSeparator/RedeSeparator';
import RedeTextField from '../../components/RedeTextField/RedeTextField';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { enqueueSnackbar } = useSnackbar();


  const attemptLogin = (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    if (!data.email || !data.password) {
      enqueueSnackbar('Preencha os campos de email e senha.', { variant: 'error', autoHideDuration: 2500 });
    } else {
      login(data)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem('token', res.data.token);
            const page = (res.data.result.userType === 1) ? '/mentor' : '/main';
            props.history.push({
              pathname: page,
            });
          }
        })
        .catch((err) => {
          enqueueSnackbar('Acesso não autorizado. Verifique seu email e sua senha.', { variant: 'error', autoHideDuration: 2500 });
          console.error(err);
        });
    }
  };

  return (
    <Container>
      <Container.SideImage />
      <Container.SideLogin>
        <Container.Logo src={logo} />
        <Container.Form>
          <RedeTextField descricao="Email" valor={email} onChange={(evt) => setEmail(evt.target.value)} />
          <RedeTextField
            descricao="Senha"
            tipo="password"
            valor={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <Container.ForgotPassword> Esqueci minha senha </Container.ForgotPassword>
          <RedeButton descricao="Entrar" onClick={attemptLogin} />
          <RedeSeparator descricao="Novo na Rede ?"> </RedeSeparator>
          <Link to="/register">
            <RedeButton descricao="Cadastrar" />
          </Link>
        </Container.Form>
      </Container.SideLogin>
    </Container>
  );
}

export default withRouter(Login);
