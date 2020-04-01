import React from 'react';
import logo from '../../assets/logo.png';

import './Login.css';


export default function Login() {
  return (

     <div className="Login">
      <div className="login-background-container"></div>
      <div className="login-panel-container">

        <img  className='logo'
              alt='rede-de-mentores-logo' 
              src={logo}
        />

        <form className='login-panel-form'>
            <div className='login-input-field'>
              <label htmlFor="email-input">Email</label>
              <input id="email-input" type='email'/>
            </div>

            <div className="login-input-field">
              <label htmlFor="pw-input">Senha</label>
              <input id="pw-input" type='password'/>
            </div>

            <a href='#'>Esqueci minha senha</a>
          <button type="button">Entrar</button>
        </form>

        <div className='login-separator'>
          <hr/>
            <h4>Novo por aqui?</h4>
          <hr/>
        </div>

        <button type="button">Cadastrar</button>

      </div>
  </div>
  );
}
