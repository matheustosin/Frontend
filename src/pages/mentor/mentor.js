import React, { Component } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import Header from '../../components/Header/Header';
import { mentoriasByMentor, desativarMentoria } from '../../services/mentoria';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import Subtitle from './StyledComponents/subtitle';
import Title from './StyledComponents/title';
import HeaderPage from './StyledComponents/header-page';
import RedeButton from '../../components/RedeButton/RedeButton';
import RedeTimeSlot from '../../components/RedeTimeSlot/RedeTimeSlot';
import MOCKDATA from '../../utils/mockData.json';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      linkedin: null,
      image: null,
      mentorias: [],
      mentoriasVisibility: [],
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
          const urlImage = `${urlFiles}/${image}`;
          this.setState({
            name,
            linkedin,
            image: urlImage,
          });
        }
      },
    ).catch((err) => {
      alert('Problema ao buscar informações. Tente novamente.');
      console.error(err);
    });

    // BELOW ONLY FOR TEST
    const MOCK_DATA = MOCKDATA;
    // ABOVE ONLY FOR TEST
    const mentoriasVisibility = {};
    const mentorias = [];
    for (const data in MOCK_DATA) {
      const mentoria = MOCK_DATA[data];
      mentoriasVisibility[mentoria.id] = true;
      mentorias.push(<Card
        key={mentoria.id}
        title={mentoria.data.title}
        description={mentoria.data.description}
        image={`${urlFiles}/${mentoria.data.image}`}
        removeFunction={() => this.changeAvalibility(mentoria)}
        visibleFunction={() => this.changeVisibility(mentoria)}
        isVisible={mentoriasVisibility[mentoria.id]}
        TimeSlots = {[<RedeTimeSlot descricao="SEG - 18:00" selecionado={false} />,<RedeTimeSlot descricao="SEG - 18:00" selecionado={false} />]}
      />);
    }
    this.setState({
      mentorias,
      mentoriasVisibility,
    });

    // mentoriasByMentor(headers).then(
    //   (res) => {
    //     if (res.data.length === 0) {
    //       const mentorias = <Subtitle> Nenhuma mentoria encontrada!</Subtitle>;
    //       this.setState({
    //         mentorias,
    //       });
    //     } else {
    //       const mentoriasVisibility = {};
    //       const mentorias = [];
    //       for (let i = 0; i < res.data.length; i += 1) {
    //         const mentoria = res.data[i];
    //         mentoriasVisibility[mentoria.id] = true;
    //         mentorias.push(<Card
    //           key={mentoria.id}
    //           title={mentoria.data.title}
    //           description={mentoria.data.description}
    //           image={`${urlFiles}/${mentoria.data.image}`}
    //           removeFunction={() => this.changeAvalibility(mentoria)}
    //           visibleFunction={() => this.changeVisibility(mentoria)}
    //           isVisible={mentoriasVisibility[mentoria.id]}
    //         />);
    //       }

    //       this.setState({
    //         mentorias,
    //         mentoriasVisibility,
    //       });
    //     }
    //   },
    // ).catch((err) => {
    //   console.error(err);
    //   const mentorias = <Subtitle> Nenhuma mentoria encontrada!</Subtitle>;
    //   this.setState({
    //     mentorias,
    //   });
    // });
  }

  changeAvalibility = (mentoria) => {
    const { id } = mentoria;
    const token = sessionStorage.getItem('token');
    const config = {
      param: { id },
      headers: { Authorization: `Bearer ${token}` },
    };
    desativarMentoria(config);
  };

  changeVisibility = (mentoria) => {
    const { id } = this.state.mentorias;
    const newMentoriasVisibility = this.state.mentoriasVisibility;
    const { mentorias } = this.state.mentorias;
    newMentoriasVisibility[id] = !newMentoriasVisibility[id];
    const index = (mentoria.findIndex((value) => value.key === id));
    mentorias[index] = (
      <Card
        key={mentoria.id}
        title={mentoria.data.title}
        description={mentoria.data.description}
        image={`${urlFiles}/${mentoria.data.image}`}
        removeFunction={() => this.changeAvalibility(mentoria)}
        visibleFunction={() => this.changeVisibility(mentoria)}
        isVisible={newMentoriasVisibility[id]}
      />
    );
    this.setState((prevState) => ({
      mentoriasVisibility: newMentoriasVisibility,
      mentorias,
    }));
  };


  render() {
    return (
      <>
        <Header descricao="Página do mentor" />
        <Container>
          <ProfileInfo
            name={this.state.name}
            linkedinProfile={this.state.linkedin}
            image={this.state.image}
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
