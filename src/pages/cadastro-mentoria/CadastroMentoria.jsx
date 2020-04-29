import React from 'react';
import Header from "../../components/Header/Header";
import RedeTextField from "../../components/RedeTextField/RedeTextField";
import RedeButton from "../../components/RedeButton/RedeButton";
import Container from "./StyledComponents";
import '@material/react-layout-grid/dist/layout-grid.css';
import {Cell, Row} from '@material/react-layout-grid';

function CadastroMentoria() {
    return (
    <Container>  

    <Header></Header>

    <form className="">
    <Row>
        <Cell desktopColumns={4} order={2} phoneColumns={4} tabletColumns={4}>
        
            <h1 id="titulo">Nova Mentoria</h1>
            <RedeTextField descricao="Título"/>
            <RedeTextField descricao="Descrição"/>
            <RedeTextField descricao="Área de Conhecimento"/>
            <RedeTextField descricao="Anexar Imagem"/>
            <RedeButton descricao="Cancelar" desabilitado/>
            <RedeButton descricao="Criar Mentoria"/>
        
        </Cell>
       
        <Cell desktopColumns={2} order={2} phoneColumns={4} tabletColumns={4}>
            <div class="vertical-line"></div>
        </Cell>
        
        <Cell desktopColumns={4} order={3} phoneColumns={4} tabletColumns={4}>
            
            <div className="cadmentoria-input-field">   
                <h3 id="titulo">Opções de Mentoria</h3>
                <input type="checkbox" id="checkbox"/>
                    <label for="online">Online</label>
                <input type="checkbox" id="checkbox" />
                    <label for="presencial">Presencial</label>
                <h3 id="titulo">Datas e Horários </h3>
            </div>
        </Cell>
        
    </Row>
    </form>

    </Container>
  );
}

export default CadastroMentoria;
