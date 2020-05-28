import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router';
import { useSnackbar } from 'notistack';
import { cadastrarUsuario } from '../../services/user';
import Container from '../cadastro-mentor/StyledComponents';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import AccountImage from '../../assets/account.png';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';
import {
  formatCPF,
  formatTelefone,
  formatDataNascimento,
  formatMatricula,
} from '../../utils/maskUtils';

function CadastroMentorado() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [imageurl, setImageurl] = useState(AccountImage);
  const [imagem, setImagem] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const enqueue = (msg = '', variant = 'error', autoHideDuration = 2500) => {
    enqueueSnackbar(msg, { variant, autoHideDuration });
  };

  const attemptRegister = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('image', imagem);
    data.append('name', nome);
    data.append('email', email);
    data.append('birthDate', dataNascimento);
    data.append('cpf', cpf);
    data.append('phone', telefone);
    data.append('password', senha);
    data.append('registration', matricula);
    data.append('flag', 2); // mentorado flag

    if (
      !data.get('name')
      || !data.get('email')
      || !data.get('birthDate')
      || !data.get('cpf')
      || !data.get('phone')
      || !data.get('password')
      || !data.get('registration')
      || !confirmarSenha
    ) {
      enqueue('Preencha todos os campos.');
    } else if (!data.get('image')) {
      enqueue('Insira uma foto de perfil.');
    } else if (!acceptTerms) {
      enqueue('Você precisa aceitar o Termo de Privacidade para efetuar o cadastro.');
    } else {
      cadastrarUsuario(data)
        .then((res) => {
          if (res.status === 200) {
            enqueue('Usuário cadastrado com sucesso!', 'success');
            setRedirect(true);
          }
        })
        .catch((err) => {
          enqueue('Não foi possível realizar o cadastro. ');
          console.log(err);
        });
    }
  };

  const handleImage = () => {
    let url;
    document.getElementById('fileButton').click();
    document.getElementById('fileButton').onchange = (event) => {
      try {
        url = URL.createObjectURL(event.target.files[0]);
      } catch (e) {
        url = imageurl;
      }
      setImagem(event.target.files[0]);
      setImageurl(url);
    };
  };

  if (redirect) {
    return <Redirect push to="/" />;
  }

  const erroSenha = Boolean(senha && confirmarSenha && senha !== confirmarSenha);
  return (
    <Container>
      <Container.FlexContainer style={{ marginTop: '10px' }}>
        <Container.Item style={{ textAlign: 'center' }}>
          <Container.UserImage src={imageurl} />
          <input id="fileButton" type="file" hidden />
          <Container style={{ marginBottom: '2vh' }}>
            <RedeButton descricao="Adicionar Foto" claro onClick={handleImage} />
          </Container>
        </Container.Item>
      </Container.FlexContainer>

      <Container.FlexContainer>
        <Container.Item>
          <RedeTextField
            descricao="Nome Completo"
            valor={nome}
            onChange={(evt) => setNome(evt.target.value)}
          />
          <RedeTextField
            descricao="Data de Nascimento"
            valor={dataNascimento}
            onChange={(evt) => setDataNascimento(formatDataNascimento(evt.target.value))}
          />
          <RedeTextField
            descricao="CPF"
            valor={cpf}
            onChange={(evt) => setCpf(formatCPF(evt.target.value))}
          />
          <RedeTextField
            descricao="Telefone"
            valor={telefone}
            onChange={(evt) => setTelefone(formatTelefone(evt.target.value))}
          />
          <RedeTextField
            descricao="Matrícula"
            valor={matricula}
            onChange={(evt) => setMatricula(formatMatricula(evt.target.value))}
          />
        </Container.Item>

        <RedeHorizontalSeparator />

        <Container.Item>
          <RedeTextField
            descricao="Email"
            valor={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <RedeTextField
            descricao="Senha"
            valor={senha}
            tipo="password"
            onChange={(evt) => setSenha(evt.target.value)}
          />
          <RedeTextField
            descricao="Confirmação de Senha"
            valor={confirmarSenha}
            tipo="password"
            onChange={(evt) => setConfirmarSenha(evt.target.value)}
            msgAjuda={erroSenha ? 'Senhas não conferem' : ''}
            erro={erroSenha}
          />

          <Container.FlexContainer style={{ flexDirection: 'row' }}>
            <RedeCheckbox
              id="termos"
              value={acceptTerms}
              onChange={(evt) => setAcceptTerms(evt.target.checked)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="termos" style={{ marginTop: '5px' }}>
              Aceito os termos de uso
            </label>
          </Container.FlexContainer>

          <Container>
            <RedeButton descricao="Cadastrar" onClick={attemptRegister} />
          </Container>
        </Container.Item>
      </Container.FlexContainer>
    </Container>
  );
}

export default withRouter(CadastroMentorado);
