import React from 'react';

// import './Login.css';
// import RedeButton from '../../components/RedeButton/RedeButton';

import logo from '../../assets/logo.png';

import Container from './StyledComponents';

function Login() {
  return (
    <Container>
      <Container.SideImage />
      <Container.SideLogin>
        <Container.Logo src={logo} />
      </Container.SideLogin>
    </Container>

  // <div className="Login">
  //   <div className="login-background-container" />
  //   <div className="login-panel-container">
  //     <img className="logo" alt="rede-de-mentores-logo" src={logo} />

  //     <form className="login-panel-form">
  //       <div className="login-input-field">
  //         <label htmlFor="email-input">Email</label>
  //         <input id="email-input" type="email" />
  //       </div>

  //       <div className="login-input-field">
  //         <label htmlFor="pw-input">Senha</label>
  //         <input id="pw-input" type="password" />
  //       </div>

  //       <a href="#test">Esqueci minha senha</a>
  //       <RedeButton descricao="Entrar" />
  //     </form>

  //     <div className="login-separator">
  //       <hr />
  //       <h4>Novo na rede?</h4>
  //       <hr />
  //     </div>

  //     <RedeButton descricao="Cadastrar" />
  //   </div>
  // </div>
  );
}

export default Login;
