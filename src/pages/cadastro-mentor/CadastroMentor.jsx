import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useSnackbar } from 'notistack';
import AccountImage from '../../assets/account.png';
import { cadastrarUsuario } from '../../services/user';
import { formatCPF, formatTelefone } from '../../utils/maskUtils';
import Container from './StyledComponents';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeHeader from '../../components/RedeHeader/RedeHeader';
import RedeTextField from '../../components/RedeTextField/RedeTextField';
import RedeHorizontalSeparator from '../../components/RedeHorizontalSeparator/RedeHorizontalSeparator';
import RedeCheckbox from '../../components/RedeCheckbox/RedeCheckbox';

function CadastroMentor() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [areas, setAreas] = useState('');
  const [imageurl, setImageurl] = useState(AccountImage);
  const [acceptTerms, setAcceptTerms] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const enqueue = (msg = '', variant = 'error', autoHideDuration = 2500) => {
    enqueueSnackbar(msg, { variant, autoHideDuration });
  };

  if (redirect) {
    return <Redirect push to="/" />;
  }

  const attemptRegister = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('image', image);
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('linkedin', linkedin);
    data.append('cpf', cpf);
    data.append('password', password);
    data.append('areas', areas);
    data.append('flag', 1);

    if (
      !data.get('name')
      || !data.get('email')
      || !data.get('phone')
      || !data.get('linkedin')
      || !data.get('cpf')
      || !data.get('areas')
      || !data.get('password')
      || !confirmPassword
    ) {
      enqueue('Preencha todos os campos.');
    } else if (!data.get('image')) {
      enqueue('Insira uma foto de perfil.');
    } else if (
      data.get('password')
      && confirmPassword
      && data.get('password') !== confirmPassword
    ) {
      enqueue('Senhas não são iguais.');
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
        .catch(() => {
          enqueue('Não foi possível realizar o cadastro. ');
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
      setImage(event.target.files[0]);
      setImageurl(url);
    };
  };

<<<<<<< HEAD
  const erroSenha = Boolean(password && confirmPassword && password !== confirmPassword);
  return (
    <Container>
      <RedeHeader descricao="Cadastro de Mentor" />

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
            valor={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <RedeTextField
            descricao="CPF"
            valor={cpf}
            onChange={(evt) => setCpf(formatCPF(evt.target.value))}
          />
          <RedeTextField
            descricao="Telefone"
            valor={phone}
            onChange={(evt) => setPhone(formatTelefone(evt.target.value))}
          />
          <RedeTextField
            descricao="Áreas de Conhecimento"
            valor={areas}
            onChange={(evt) => setAreas(evt.target.value)}
          />
          <RedeTextField
            descricao="LinkedIn"
            valor={linkedin}
            onChange={(evt) => setLinkedin(evt.target.value)}
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
            tipo="password"
            valor={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <RedeTextField
            descricao="Confirmação de Senha"
            tipo="password"
            valor={confirmPassword}
            onChange={(evt) => setConfirmPassword(evt.target.value)}
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
=======
    handleName(event) {
      this.setState({ name: event.target.value });
    }

    handleCPF(event) {
      this.setState({ cpf: formatCPF(event.target.value) });
    }

    handlePhoneNumber(event) {
      this.setState({ phone: formatTelefone(event.target.value) });
    }

    handleLinkedin(event) {
      this.setState({ linkedin: event.target.value });
    }

    handleEmail(event) {
      this.setState({ email: event.target.value });
    }

    handlePassword(event) {
      this.setState({ password: event.target.value });
    }

    handleConfirmPassword(event) {
      this.setState({ confirmPassword: event.target.value });
    }

    handleAreas(event) {
      this.setState({ areas: [event.target.value] });
    }

    handlePrivacyTerms(event) {
      this.setState({ acceptTerms: event.target.checked });
    }

    handleImage() {
      document.getElementById('fileButton').click();
      document.getElementById('fileButton').onchange = (event) => {
        try {
          var url = URL.createObjectURL(event.target.files[0]);
        } catch (e) {
          url = this.state.imageurl;
        }
        this.setState({
          image: event.target.files[0],
          imageurl: url,
        });
      };
    }

    render() {
      if (this.state.redirect) {
        return <Redirect push to="/" />;
      }
      return (
        <Container>
          <RedeHeader title="cadastro de mentor" />

          <Container.FlexContainer>
            <Container.Item>
              <Container.UserImage src={this.state.imageurl} />
              <input id="fileButton" type="file" hidden />
              <Container><RedeButton descricao="Adicionar Foto" claro onClick={this.handleImage} /></Container>
            </Container.Item>
          </Container.FlexContainer>

          <Container.FlexContainer>
            <Container.Item>
              <RedeTextField descricao="Nome Completo" valor={this.state.name} onChange={this.handleName} />
              <RedeTextField descricao="CPF" valor={this.state.cpf} onChange={this.handleCPF} />
              <RedeTextField descricao="Telefone" valor={this.state.phone} onChange={this.handlePhoneNumber} />
              <RedeTextField descricao="Áreas de Conhecimento" valor={this.state.areas} onChange={this.handleAreas} />
              <RedeTextField descricao="LinkedIn" valor={this.state.linkedin} onChange={this.handleLinkedin} />
            </Container.Item>

            <RedeHorizontalSeparator />

            <Container.Item>
              <RedeTextField descricao="Email" valor={this.state.email} onChange={this.handleEmail} />
              <RedeTextField descricao="Senha" tipo="password" valor={this.state.password} onChange={this.handlePassword} />
              <RedeTextField descricao="Confirmação de Senha" tipo="password" valor={this.state.confirmPassword} onChange={this.handleConfirmPassword} />
              <RedeTextField descricao="Aceito o Termo de Privacidade" tipo="checkbox" valor={this.state.acceptTerms} onChange={this.handlePrivacyTerms} />

              <Container><RedeButton descricao="Cadastrar" onClick={this.attemptRegister} /></Container>
            </Container.Item>

          </Container.FlexContainer>
        </Container>
      );
    }
>>>>>>> componentizacaoMentor
}

export default CadastroMentor;
