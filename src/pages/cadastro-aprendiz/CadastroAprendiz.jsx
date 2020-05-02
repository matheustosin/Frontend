import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import AccountImage from '../../assets/account.png';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import {
  formatCPF,
  formatTelefone,
  formatDataNascimento,
  formatMatricula,
} from '../../utils/maskUtils';

class CadastroAprendiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      matricula: '',
      email: '',
      senha: '',
      confirmarSenha: '',
    };
  }

  render() {
    const {
      nome,
      dataNascimento,
      cpf,
      telefone,
      matricula,
      email,
      senha,
      confirmarSenha,
    } = this.state;

    return (
      <Container width="100vw">
        <RedeHeader title="cadastro de aprendiz" />
        <Container.Image src={AccountImage} width="100px" height="100px" style={{ marginBottom: '2vh' }} />
        <RedeButton descricao="Adicionar Foto" onClick={() => { }} claro />

        <Container.TextContainer>
          <Container>
            <RedeTextField descricao="Nome Completo" valor={nome} onChange={(evt) => this.setState({ nome: evt.target.value })} />
            <RedeTextField descricao="Data de Nascimento" valor={dataNascimento} onChange={(evt) => this.setState({ dataNascimento: formatDataNascimento(evt.target.value) })} />
            <RedeTextField descricao="CPF" valor={cpf} onChange={(evt) => this.setState({ cpf: formatCPF(evt.target.value) })} />
            <RedeTextField descricao="Telefone" valor={telefone} onChange={(evt) => this.setState({ telefone: formatTelefone(evt.target.value) })} />
          </Container>

          {/* Isso foi necessário pois o componente "RedeHorizontalSeparator"
                não apresentou um comportamento responsivo em algumas resoluções */}
          <Container.SeparatorWrapper>
            <RedeHorizontalSeparator />
          </Container.SeparatorWrapper>

          <Container>
            <RedeTextField descricao="Matrícula" valor={matricula} onChange={(evt) => this.setState({ matricula: formatMatricula(evt.target.value) })} />
            <RedeTextField descricao="Email" valor={email} onChange={(evt) => this.setState({ email: evt.target.value })} />
            <RedeTextField descricao="Senha" valor={senha} tipo="password" onChange={(evt) => this.setState({ senha: evt.target.value })} />
            <RedeTextField descricao="Confirmar Senha" valor={confirmarSenha} tipo="password" onChange={(evt) => this.setState({ confirmarSenha: evt.target.value })} msgAjuda="Senhas não conferem" erro />
          </Container>

        </Container.TextContainer>

        <Container style={{ marginTop: '2vh' }}>
          <RedeButton descricao="Cadastrar" onClick={() => { }} />
        </Container>
      </Container>
    );
  }
}

export default withRouter(CadastroAprendiz);
