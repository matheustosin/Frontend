import React from 'react';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';
import StyledContainer from './StyledComponents';

function NovaSenha() {
  const { id } = useParams();

  return (
    <Container>
      <StyledContainer>
        ID:
        {id}
      </StyledContainer>
    </Container>
  );
}

export default NovaSenha;
