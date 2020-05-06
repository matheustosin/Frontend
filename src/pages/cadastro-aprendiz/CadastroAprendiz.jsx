import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';
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
    const erroSenha = Boolean(senha && confirmarSenha && (senha !== confirmarSenha));
    return (
      <Container width="100vw">
        <RedeHeader title="cadastro de aprendiz" />
        <Container.Image src={AccountImage} width="100px" height="100px" style={{ marginBottom: '2vh' }} />
        <RedeButton descricao="Adicionar Foto" onClick={() => { }} claro />

        <Container.FieldContainer>
          <Container justify="start" height="100%">
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

          <Container height="100%">
            <RedeTextField descricao="Matrícula" valor={matricula} onChange={(evt) => this.setState({ matricula: formatMatricula(evt.target.value) })} />
            <RedeTextField descricao="Email" valor={email} onChange={(evt) => this.setState({ email: evt.target.value })} />
            <RedeTextField descricao="Senha" valor={senha} tipo="password" onChange={(evt) => this.setState({ senha: evt.target.value })} />
            <RedeTextField descricao="Confirmar Senha" valor={confirmarSenha} tipo="password" onChange={(evt) => this.setState({ confirmarSenha: evt.target.value })} msgAjuda={erroSenha ? 'Senhas não conferem' : ''} erro={erroSenha} />
          
            <Container.TermsContainer>
              <RedeCheckbox id="termos"/>
              <Container.Label for="termos">Aceito os termos de uso</Container.Label>
            </Container.TermsContainer>

            <RedeButton descricao="Cadastrar" onClick={() => { }} />

          </Container>

        </Container.FieldContainer>
      </Container>
    );
  }
}

export default withRouter(CadastroAprendiz);
