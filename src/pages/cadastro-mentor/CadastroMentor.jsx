import React from 'react';
import logo_cabecalho from '../../assets/logo_cabecalho.png';

import './CadastroMentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';

function CadastroMentor() {
    return (
        <div className="CadastroMentor">
            <div className="cadmentor-background-container" />
            <div className="cadmentor-cabecalho">

                <img className="logo_cabecalho" alt="rede-de-mentores-logo" src={logo_cabecalho} />
                <p class="titulo_cabecalho">CADASTRO DE MENTOR</p>

            </div>
            <div className="cadmentor-panel-container">

            <form className="cadmentor-panel-form">
                <div className="cadmentor-input-field">
                    <label htmlFor="nome-input">Nome Completo</label>
                    <input id="nome-input" type="text" />
                </div>

                <div className="cadmentor-input-field">
                    <label htmlFor="cpf-input">CPF</label>
                    <input id="cpf-input" type="text" maxlength="11" />
                </div>

                <div className="cadmentor-input-field">
                    <label htmlFor="telefone-input">Telefone</label>
                    <input id="telefone-input" type="text" />
                </div>

                <div className="cadmentor-input-field">
                    <label htmlFor="areas-conhecimento-input">Áreas de Conhecimento</label>
                    <input id="areas-conhecimento-input" type="text" />
                </div>

                <div className="cadmentor-input-field">
                    <label htmlFor="linkedin-input">LinkedIn</label>
                    <input id="linkedin-input" type="text" />
                </div>

                <div className="cadmentor-input-field">
                    <label htmlFor="email-input">Email</label>
                    <input id="email-input" type="text" />
                </div>

                <RedeButton descricao="Cadastrar" />
            </form>

            
            </div>
        </div>
  );
}

export default CadastroMentor;