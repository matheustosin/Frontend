import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
// import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
import Header from '../../components/Header/Header';
import { mentorias } from '../../services/mentor';
import { profile } from '../../services/user';


import './mentor.css';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      linkedin: null,
      occupation: null,
      image: null,
    };
    this.mentorias = [];
  }

  async componentDidMount() {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };

    profile(headers).then(
      (res) => {
        if (res.status === 200) {
          const {
            name, linkedin, occupation, image, cpf,
          } = res.data;
          const urlImage = `http://localhost:3000/files/${image}`;
          this.setState({
            name,
            linkedin,
            occupation,
            image: urlImage,
          });
        }
      },
    ).catch((err) => {
      alert('Problema ao buscar informações. Tente novamente.');
      console.error(err);
    });
    mentorias(headers).then(
      (res) => {
        this.mentorias = res.data.map((mentoria) => (
          <Card
            key={mentoria}
            title={mentoria.title}
            description={mentoria.description}
            image={`http://localhost:3000/files/${mentoria.image}`}
          />
        ));
      },
    ).catch((err) => {
      alert('Problema ao buscar mentorias. Tente novamente.');
      console.error(err);
    });
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
