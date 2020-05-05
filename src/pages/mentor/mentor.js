import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
// import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import Header from '../../components/Header/Header';
// import Header from '../../';

import './mentor.css';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      linkedin: null,
      occupation: null,
      image: null,
      mentorias: null,
    };
    this.mentorias = [];
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const {
      name, linkedin, occupation, image, cpf,
    } = (await axios.get('http://localhost:3000/users', headers)).data;
    const urlImage = `static/media/${image}`;

    const mentorias = (await axios.get('http://localhost:3000/mentoriaSession', headers)).data;
    this.mentorias = mentorias.map((mentoria) => (
      <Card
        title={mentoria.title}
        description={mentoria.description}
        image={mentoria.image}
      />
    ));

    this.setState({
      name,
      linkedin,
      occupation,
      image: urlImage,
    });
  }

  generateMentoriasComp() {


  }


  render() {
    return (
      <>
        <Header />
        <Container>

          <ProfileInfo
            name={this.state.name}
            linkedinProfile={this.state.linkedin}
            occupation={this.state.occupation}
            image={this.state.image}
          />

          <div className="titleMentoring">

            <h1 className="mainTitle">
              MINHAS MENTORIAS
            </h1>
            <button type="button" className="buttonPlus">
              + NOVA MENTORIA
            </button>
          </div>
          {this.mentorias}
        </Container>
      </>
    );
  }
}

export default withRouter(Mentor);
