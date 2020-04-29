import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
// import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
// import Header from '../../';

import './mentor.css';

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {
    const token = '123';
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const res = await axios.get('http://localhost:8080/users', headers);
    this.setState({
      name: 'test',
      linkedin: 'test',
      occupation: 'test',
    });
  }

  render() {
    return (
      <>
        {/* <Header/> */}
        <Container>

          <ProfileInfo 
            name={this.state.name} 
            linkedinProfile={this.state.linkedin} 
            occupation={this.state.occupation} 
          />

          <div className="titleMentoring">

            <h1 className="mainTitle">
              MINHAS MENTORIAS
            </h1>
            <button type="button" className="buttonPlus">
              + NOVA MENTORIA
            </button>
          </div>
          <Card
            title="MENTORIA DE UX"
            description="Mentoria focada em auxiliar na criação e dar dicas para mockups de projetos. Auxilio nas ferramentas como Adobe XD e Figma."
          />

          <Card
            title="MENTORIA DE UX"
            description="Mentoria focada em auxiliar na criação e dar dicas para mockups de projetos. Auxilio nas ferramentas como Adobe XD e Figma."
          />

          <Card
            title="MENTORIA DE UX"
            description="Mentoria focada em auxiliar na criação e dar dicas para mockups de projetos. Auxilio nas ferramentas como Adobe XD e Figma."
          />
        </Container>
      </>
    );
  }
}

export default withRouter(Mentor);
