import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';
import StyledContainer from './StyledComponents';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeButton from '../../components/RedeButton/RedeButton';

function NovaSenha() {
  const { id } = useParams();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();

  const handleNewPassword = (evt) => {
    if (evt) evt.preventDefault();
    console.log(senha);
  };

  return (
    <Container>
      <StyledContainer>
        <form onSubmit={handleNewPassword}>
          <RedeTextField
            descricao="Nova Senha"
            valor={senha}
            onChange={(evt) => setSenha(evt.target.value)}
            tipo="password"
          />
          <RedeTextField
            descricao="Confirmar Nova Senha"
            valor={confirmarSenha}
            onChange={(evt) => setConfirmarSenha(evt.target.value)}
            tipo="password"
          />
          <RedeButton
            buttonProps={{ style: { width: '100%' } }}
            desabilitado={!senha || !confirmarSenha || senha !== confirmarSenha}
            descricao="ALTERAR SENHA"
            onClick={handleNewPassword}
          />
        </form>

      </StyledContainer>
    </Container>
  );
}

export default NovaSenha;
