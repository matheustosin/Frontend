import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import Header from '../../components/Header/Header';
import { mentoriasByMentor } from '../../services/mentor';
import { profile } from '../../services/user';
import { urlFiles } from '../../services/http';
import Subtitle from './StyledComponents/subtitle';

import './mentor.css';
import RedeButton from '../../components/RedeButton/RedeButton';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      linkedin: null,
      image: null,
      mentorias: [],
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

    mentoriasByMentor(headers).then(
      (res) => {
        if (res.data.length !== 0) {
          const mentorias = <Subtitle> Nenhuma mentoria cadastrada!</Subtitle>;
          this.setState({
            mentorias,
          });
        } else {
          const mentorias = res.data.map((mentoria) => (
            <Card
              key={mentoria}
              title={mentoria.title}
              description={mentoria.description}
              image={`${urlFiles}/${mentoria.image}`}
              visibleFunction={this.changeVisibility}
            />
          ));
          this.setState({
            mentorias,
          });
        }
      },
    ).catch((err) => {
      console.error(err);
    });
  }

  changeVisibility = () => true

  render() {
    return (
      <>
        <Header />
        <Container>

          <ProfileInfo
            name={this.state.name}
            linkedinProfile={this.state.linkedin}
            image={this.state.image}
          />

          <div className="titleMentoring">
            <h1 className="mainTitle">
              MINHAS MENTORIAS
            </h1>
            <Link to="/cadastro-mentoria">
              <RedeButton descricao="+ NOVA MENTORIA" />
            </Link>
          </div>
          {this.state.mentorias}
        </Container>
      </>
    );
  }
}

export default withRouter(Mentor);
