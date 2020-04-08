import React from "react";

import logo from "../../assets/logo2.png";
import interview from "../../assets/interview.png";
import teacher from "../../assets/teacher.png";

import "./Register.css";

export default function Register() {
  return (
    <React.Fragment>
      <div className="register-background-container">
        <div className="register-panel-container">
          <img className="logo" alt="rede-de-mentores-logo" src={logo} />
        </div>
      </div>

      <div className="title">
        <h1>COMO DESEJA SE CADASTRAR NA REDE?</h1>
      </div>

      <div className="Register">
        <div className="register-panel-form">
          <div className="register-space">
            <div className="circle">
              <img
                className="image"
                alt="rede-de-mentores-logo"
                src={teacher}
              />
            </div>
            <button type="button">CADASTRAR COMO MENTOR</button>
          </div>

          <div className="register-separator" />

          <div className="register-space">
            <div className="circle">
              <img
                className="image"
                alt="rede-de-mentores-logo"
                src={interview}
              />
            </div>
            <button type="button">CADASTRAR COMO ALUNO</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
