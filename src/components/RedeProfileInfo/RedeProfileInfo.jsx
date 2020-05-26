import React from 'react';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import edition from '../../assets/create-new-pencil-button.png';
import linkedinIcon from '../../assets/linkedin.png';
import UserInformations from './StyledComponents/user-informations';
import Logo from './StyledComponents/logo';
import Icon from '../RedeIcon/RedeIcon';
import Information from './StyledComponents/information';
import UserName from './StyledComponents/user-name';
import Bottom from './StyledComponents/bottom';

const ProfileUser = ({
  name,
  linkedin,
  image,
  editFunction,
}) => (
  <Container>
    <Logo src={image} />
    <UserInformations>
      <UserName>
        {name}
      </UserName>
      <Information>
        <Information.Icon imageUrl={linkedinIcon} />
        <Information.Name>
          {linkedin}
          TESTANDO
        </Information.Name>
      </Information>
      <Bottom>
        <Icon imageUrl={edition} onClick={editFunction} />
      </Bottom>
    </UserInformations>
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
