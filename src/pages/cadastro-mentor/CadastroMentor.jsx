import React from 'react';
import logo_cabecalho from '../../assets/logo_cabecalho.png';

import './CadastroMentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';
import '@material/react-layout-grid/dist/layout-grid.css';
import {Cell, Grid, Row} from '@material/react-layout-grid';

function CadastroMentor() {
    return (
    <div className="CadastroMentor">
    <div className="cadmentor-background-container" />

    <div className="cadmentor-cabecalho">

        <img className="logo_cabecalho" alt="rede-de-mentores-logo" src={logo_cabecalho} />
        <p class="titulo_cabecalho">CADASTRO DE MENTOR</p>

    </div>  

    <Grid id="grid-panel">
    <form className="">
    <Row>
        <Cell desktopColumns={4} order={1} phoneColumns={4} tabletColumns={4}>
        
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
        
        </Cell>
        <Cell desktopColumns={2} order={2} phoneColumns={4} tabletColumns={4}>
            <div class="vertical-line"></div>
        </Cell>
        <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>
        
            <div className="cadmentor-input-field">
                <label htmlFor="email-input">Email</label>
                <input id="email-input" type="text" />
            </div>

            <div className="cadmentor-input-field">
                <label htmlFor="senha-input">Senha</label>
                <input id="senha-input" type="text" />
            </div>

            <div className="cadmentor-input-field">
                <label htmlFor="confirma-senha-input">Confirmação de Senha</label>
                <input id="confirma-senha-input" type="text" />
            </div>

            <RedeButton id="botao-cadastro" descricao="Cadastrar" />
        </Cell>
        
    </Row>
    </form>

    </Grid>

    </div>
  );
}

export default CadastroMentor;