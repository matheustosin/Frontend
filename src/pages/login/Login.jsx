/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import logo from '../../assets/logo.png';

import './Login.css';
import RedeButton from '../../components/RedeButton/RedeButton';

function Login() {
  return (
    <div className="Login">
      <div className="login-background-container" />
      <div className="login-panel-container">
        <img className="logo" alt="rede-de-mentores-logo" src={logo} />

        <form className="login-panel-form">
          <div className="login-input-field">
            <label htmlFor="email-input">Email</label>
            <input id="email-input" type="email" />
          </div>

          <div className="login-input-field">
            <label htmlFor="pw-input">Senha</label>
            <input id="pw-input" type="password" />
          </div>

          <a href="#test">Esqueci minha senha</a>
          <RedeButton descricao="Entrar" />
        </form>

        <div className="login-separator">
          <hr />
          <h4>Novo na rede?</h4>
          <hr />
        </div>

        <RedeButton descricao="Cadastrar" />
      </div>
    </div>
  );
}

export default Login;
