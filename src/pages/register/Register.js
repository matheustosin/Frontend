import React from "react";

import logo from "../../assets/logo.png";
import interview from "../../assets/interview.png";
import teacher from "../../assets/teacher.png";

import "./Register.css";

export default function Register() {
  return (
    <div className="Register">
      <div className="register-background-container"></div>
      <div className="register-panel-container">
        <img className="logo" alt="rede-de-mentores-logo" src={logo} />
        <a href="#" className="login-user">
          User
        </a>
      </div>
      <div className="register-panel-form">
        <div className="register-space">
          <img className="logo" alt="rede-de-mentores-logo" src={teacher} />
          <button type="button">CADASTRAR COMO MENTOR</button>
        </div>

        <div className="register-separator" />

        <div className="register-space">
          <img className="logo" alt="rede-de-mentores-logo" src={interview} />
          <button type="button">CADASTRAR COMO ALUNO</button>
        </div>
      </div>
    </div>
    
  );
}
