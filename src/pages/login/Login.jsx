import React from 'react';

import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeSeparator from '../../components/RedeSeparator/RedeSeparator';
import RedeTextField from '../../components/RedeTextField/RedeTextField';

function Login() {
  return (
    <Container>
      <Container.SideImage />
      <Container.SideLogin>
        <Container.Logo src={logo} />
        <Container.Form>
          <RedeTextField descricao="Email" />
          <RedeTextField descricao="Senha" />
          <Container.ForgotPassword> Esqueci minha senha </Container.ForgotPassword>
          <RedeButton descricao="Entrar" />
          <RedeSeparator descricao="Novo na Rede ?"> </RedeSeparator>
          <RedeButton descricao="Cadastrar" />
        </Container.Form>
      </Container.SideLogin>
    </Container>
  );
}

export default Login;
