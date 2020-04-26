import React from 'react';

import interview from '../../assets/interview.png';
import teacher from '../../assets/teacher.png';

import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import Container from './StyledComponents';
import './Register.css';

export default function Register() {
  return (
    <>
      <RedeHeader />
      <Container.Title>COMO DESEJA SE CADASTRAR NA REDE?</Container.Title>

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
            <RedeButton type="button" descricao="CADASTRAR COMO MENTOR" />

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
            <RedeButton type="button" descricao="CADASTRAR COMO ALUNO" />
          </div>
        </div>
      </div>
    </>
  );
}
