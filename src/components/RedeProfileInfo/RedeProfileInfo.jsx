import React from 'react';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import edition from '../../assets/create-new-pencil-button.png';
import linkedinIcon from '../../assets/linkedin.png';
import UserInformations from './StyledComponents/user-informations';
import Logo from './StyledComponents/logo';
import Icon from '../RedeIcon/RedeIcon';
import Information from './StyledComponents/information';
import Header from './StyledComponents/header';
import Bottom from './StyledComponents/bottom';
const ProfileUser = ({
  name,
  linkedin,
  image,
  editFunction,
}) => (
  <Container>
    <Header>
      <Logo src={image} />
      <UserInformations>
        <UserInformations.Name>
          {name}
        </UserInformations.Name>
        <Information>
          <Information.Icon imageUrl={linkedinIcon} />
          <Information.Name>
            {linkedin}
          </Information.Name>
        </Information>
      </UserInformations>
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
