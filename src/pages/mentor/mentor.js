import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import logo from '../../assets/logo.png';
import Container from './StyledComponents';
import Card from '../../components/RedeCard/RedeCard';
import ProfileInfo from '../../components/RedeProfileInfo/RedeProfileInfo';
//import Header from '../../components/Header/Header';

import './mentor.css'

class Mentor extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <React.Fragment>
      {/* <Header/> */}
      <Container>
        <ProfileInfo name="ALAN MORAIS" linkedinProfile="/alan-morais" occupation="Professor de Design" />

        <div className='titleMentoring'>

          <h1 className='mainTitle'>
            MINHAS MENTORIAS
        </h1>
          <button className='buttonPlus'>
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
      </React.Fragment>
    )
  }
}

export default withRouter(Mentor);
