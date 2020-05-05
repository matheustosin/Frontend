import React from 'react';
import styled from 'styled-components';
import { string, func, bool } from 'prop-types';
import Container from './StyledComponents';
import edition from '../../assets/create-new-pencil-button.png';
import linkedin from '../../assets/linkedin.png';
import work from '../../assets/work.png';
// import logo from "../../assets/aaaaaf.png";

const ProfileInfo = ({
  name,
  linkedinProfile,
  occupation,
  image,
}) => (
  <Container>
    <Header>
      <Logo src={image} />
      <Info>
        <Name>
          {name}
        </Name>
        <Detail>
          <Icon src={work} />
          <DetailText>
            {occupation}
          </DetailText>
        </Detail>
        <Detail>
          <Icon src={linkedin} />
          <DetailText>
            {linkedinProfile}
          </DetailText>
        </Detail>
      </Info>
    </Header>
    <Icon src={edition} />
  </Container>
);
const DetailText = styled.span`
  margin-bottom: 5px;
  font-weight: 600;
  font-size:19px;
`;
const Detail = styled.div`
    width:100%;
    margin-left: 26px;
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:5px;
    & > img{
      width:32px;
      height:32px;
      margin-bottom: 10px;
      margin-left: 18px;
      margin-right: 6px;
    }
  `;
const Info = styled.div`
    display:flex;
    flex-direction:column;
  `;
const Icon = styled.img`
    width:35px;
    height:35px;
    margin-right:20px;
    align-self: flex-end;
    margin-bottom: 18px;
  `;
const Header = styled.div`
  display:flex;
  width: 100%;
  height:100%;
  margin: 0px 0px 6px 35px;
  align-items: center;
`;
const Name = styled.h1`
    font-family: Roboto;
    font-size: 30px/39px;
    letter-spacing : 0;
    margin-left:15px;
    font-weight:500;

`;
const Logo = styled.img`
    width:160px;
    height:160px;
    border-radius : 180px;
    
`;


ProfileInfo.propTypes = {
  descricao: string,
};

ProfileInfo.defaultProps = {
  descricao: '',
};

export default ProfileInfo;
