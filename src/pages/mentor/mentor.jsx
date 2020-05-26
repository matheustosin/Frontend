import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import Header from '../../components/RedeHeader/RedeHeader';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import Title from './StyledComponents/title';
import HeaderPage from './StyledComponents/header-page';
import Subtitle from './StyledComponents/subtitle';
import RedeButton from '../../components/RedeButton/RedeButton';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      linkedin: null,
      image: null,
      mentorias: [],
      mentoriaVisibility: [true, true],
    };
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    profile(headers).then(
      (res) => {
        if (res.status === 200) {
          const {
            name, linkedin, image,
          } = res.data;
          console.log(res.data)
          const urlImage = `${urlFiles}/${image}`;
          this.setState({
            name,
            linkedin,
            image: urlImage,
          });
          console.log(res);
        }
      },
    ).catch((err) => {
      alert('Problema ao buscar informações. Tente novamente.');
      console.error(err);
    });
    mentoriasByMentor(headers).then(
      (res) => {
        if (res.data.length === 0) {
          this.setState({
            mentorias: <Subtitle> Nenhuma mentoria encontrada!</Subtitle>,
          });
        } else {
          const mentorias = [];
          const mentoriaVisibility = Array(res.data.length).fill(true);

          for (let i = 0; i < res.data.length; i += 1) {
            const mentoria = res.data[i];
            mentorias.push(<Card
              key={mentoria.id}
              title={mentoria.data.title}
              description={mentoria.data.description}
              image={`${urlFiles}/${mentoria.data.image}`}
              removeFunction={() => this.changeAvalibility(mentoria, i)}
              visibleFunction={() => this.changeVisibility(mentoria, i)}
              editFunction={() => this.editPage(mentoria)}
              isVisible={mentoriaVisibility[i]}
            />);
          }
          this.setState({
            mentorias,
            mentoriaVisibility,
          });
        }
      },
    ).catch((err) => {
      console.error(err);
      this.setState({
        mentorias: <Subtitle> Nenhuma mentoria encontrada!</Subtitle>,
      });
    });
  }

  changeAvalibility = (mentoria, index) => {
    const { id } = mentoria;
    const token = sessionStorage.getItem('token');
    const config = {
      param: { id },
      headers: { Authorization: `Bearer ${token}` },
    };
    if (global.confirm('Você deseja realmente deletar essa mentoria ?')) {
      desativarMentoria(config).then(
        () => {
          window.location.reload();
          this.setState((prevState) => ({
          }));
        },
      ).catch(() => {
        alert('Falha ao deletar essa mentoria. Tente novamente.');
      });
    }
  };


  changeVisibility = (mentoria, index) => {
    const { id } = mentoria;
    const { mentoriaVisibility } = this.state;
    mentoriaVisibility[index] = !mentoriaVisibility[index];
    this.setState((prevState) => ({
      mentorias: prevState.mentorias.map((obj, i) => {
        if (obj.key === id) {
          return (
            <Card
              key={obj.key}
              title={obj.props.title}
              description={obj.props.description}
              image={`${obj.props.image}`}
              removeFunction={() => this.changeAvalibility(obj.props, i)}
              visibleFunction={() => this.changeVisibility(obj.props, i)}
              editFunction={() => this.editPage(obj.props)}
              isVisible={mentoriaVisibility[index]}
            />
          );
        }
        return obj;
      }),
      mentoriaVisibility: prevState.mentoriaVisibility.map((obj, i) => { console.log([obj, i]); return true; }),
    }));

    // mudarVisibilidadeMentoria(config); ROUTE NEED TO BE BUILT
  };

  editPage = (mentoria) => {
    sessionStorage.setItem('oldMentoria', JSON.stringify(mentoria));
    this.props.history.push({
      pathname: '/cadastro-mentoria',
    });
  }

  editProfilePage = () => {
    // console.log(profileInfo)
    // // sessionStorage.setItem('oldProfile', JSON.stringify(profileInfo));
    // this.props.history.push({
    //   pathname: '/cadastro-mentor',
    // });
  }

  render() {
    return (
      <>
        <Header descricao="Página do mentor" />
        <Container>
          <ProfileInfo
            name={this.state.name}
            linkedinProfile={this.state.linkedin}
            image={this.state.image}
            editFunction={this.editProfilePage}
          />
          <HeaderPage>
            <Title>
              MINHAS MENTORIAS
            </Title>
            <Link to="/cadastro-mentoria">
              <RedeButton descricao="+ NOVA MENTORIA" />
            </Link>
          </HeaderPage>
          {this.state.mentorias}
        </Container>
      </>
    );
  }
}

export default withRouter(Mentor);
