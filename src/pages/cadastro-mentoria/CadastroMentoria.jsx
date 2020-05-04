import React from 'react';
import Header from '../../components/Header/Header';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeTextArea from '../../components/RedeTextArea/RedeTextArea';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import Container from './StyledComponents';

function CadastroMentoria() {
  return (
    <Container>
      <Header />
      <Container.Title> Nova Mentoria </Container.Title>
      <Container.Form>
        <Container.Options>
          <RedeTextField descricao="Título" />
          <RedeTextArea descricao="Descrição" />
          <RedeTextField descricao="Área de Conhecimento" />
          <RedeTextField descricao="Anexar Imagem" />
        </Container.Options>

        <RedeHorizontalSeparator size="300" />

        <Container.Options>
          <RedeTextField descricao="Título" />
          <RedeTextArea descricao="Descrição" />
          <RedeTextField descricao="Área de Conhecimento" />
          <RedeTextField descricao="Anexar Imagem" />
        </Container.Options>
      </Container.Form>

      <Container.Submit>
        <RedeButton descricao="Cancelar" cancelar />
        <RedeButton descricao="Criar Mentoria" />
      </Container.Submit>
      {/* <div className="vertical-line" />

      <div className="cadmentoria-input-field">
        <h3 id="titulo">Opções de Mentoria</h3>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="online">Online</label>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="presencial">Presencial</label>
        <h3 id="titulo">Datas e Horários </h3>
      </div> */}
    </Container>
  );
}

export default CadastroMentoria;
