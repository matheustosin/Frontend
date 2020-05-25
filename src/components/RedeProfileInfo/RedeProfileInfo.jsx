import React from 'react';
<<<<<<< HEAD
import { string, func, bool } from 'prop-types';
=======
import styled from 'styled-components';
import { string } from 'prop-types';
>>>>>>> melhorias
import Container from './StyledComponents';
import edition from '../../assets/create-new-pencil-button.png';
import linkedinIcon from '../../assets/linkedin.png';
import UserInformations from './StyledComponents/user-informations';
import Logo from './StyledComponents/logo';
import Icon from '../RedeIcon/RedeIcon';
import Information from './StyledComponents/information';
import Header from './StyledComponents/header';
import Bottom from './StyledComponents/bottom';

const ProfileInfo = ({ name, linkedinProfile, image }) => (
  <Container>
    <Header>
      <Logo src={image} />
      <Info>
        <Name>{name}</Name>
        <Detail>
          <Icon src={linkedin} />
          <DetailText>{linkedinProfile}</DetailText>
        </Detail>
      </Info>
    </Header>
    <Bottom>
      <Icon imageUrl={edition} onClick={editFunction} />
    </Bottom>
  </Container>
);

ProfileUser.propTypes = {
  name: string,
  linkedin: string,
  image: string,
  editFunction: func,
};

ProfileUser.defaultProps = {
  name: '',
  linkedin: '',
  image: '',
  editFunction: () => {},
};

export default ProfileUser;
