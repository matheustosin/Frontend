import React from 'react';
import styled from 'styled-components';
import Container from './StyledComponents';
import logo from "../../assets/mentoria.png";
import { string, func, bool } from 'prop-types';
import visibility from '../../assets/visibility-button.png';
import remove from '../../assets/rubbish-bin-delete-button.png';
import edition from '../../assets/create-new-pencil-button.png';

const Card = ({
  title, description
}) => (
    <Container>
      <Logo src={logo} />
      <ContentSide>
        <Header>
          <Title>
            {title}
          </Title>
          <Button> TODOS HORÁRIOS</Button>
        </Header>
        <Description>
          {description}
        </Description>
        <Footer>
          <FooterTitle> 
            Próximos horários 
          </FooterTitle>
          <Bottom>
            <TimeSlotContainer>
              <TimeSlot>SEG - 18:00</TimeSlot>
              <TimeSlot>SEG - 18:00</TimeSlot>
            </TimeSlotContainer>
            <IconGroup>
              <Button className="footerBtn"> TODOS HORÁRIOS</Button>
              <div>
                <Icon src={edition}></Icon>
                <Icon src={remove}></Icon>
                <Icon src={visibility}></Icon>
              </div>
            </IconGroup>
          </Bottom>
        </Footer>
      </ContentSide>
    </Container>
  );
  const IconGroup = styled.div`
    display:flex;
    .footerBtn{
      display:none;
    }
    @media screen and (max-width:1000px){
      .footerBtn{
        display:flex;
        text-align:center;
      }
      justify-content:space-between;
    }
  `
const Bottom = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom: 5px;
    @media screen and (max-width:1000px){
      flex-direction:column;
      justify-content:space-between;
    }
  `
const Icon = styled.img`
    width:35px;
    height:35px;
    margin-right:20px;
  `

const Footer = styled.div`
    display:flex;
    width: 100%;
    flex-direction:column;
    margin-top:auto;
  `
const FooterTitle = styled.p`
    margin-bottom:5px;
  `
const TimeSlotContainer = styled.div`
    width:70%;
    height:auto;
    display:flex;
    @media screen and (max-width:1000px){
      margin-bottom: 25px;
    } 
  `
const TimeSlot = styled.button`
    width: 110px;
    height: 40px;
    font-size: 17px;
    background-color: #97C0E2;
    color : #00273F;
    border-radius: 10px;
    margin: 0px !important;
    margin-left: 6px !important;
    font-weight: light;
    &:first-child {
      margin-left: 0px !important;
  }
  `
const Description = styled.p`
    line-height:1.5em;
  `
const ContentSide = styled.div`
  display:flex;
  width: 60%;
  padding: 20px;
  padding-bottom: 0px;
  flex-direction:column;
  font-weight: 600;
  color:#00273F;

  @media screen and (max-width:1000px){
    width:90%;
    padding:20px;
    margin-bottom:20px;
  }
  `
const Header = styled.div`
  display:flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`

const Title = styled.h1`
    font-family: Roboto;
    font-size: 30px/39px;
    letter-spacing : 0;
`;
const Logo = styled.img`
    width: 40%;
    height:100%;
    border-radius : 8px 0px 0px 8px;
    @media screen and (max-width:1000px){
      width:102%;
      height:50vh;
      border-radius : 0px 8px 8px 0px;
    }
`;
const Button = styled.button`
    width: 190px;
    height: 40px;
    justify-content:center;
    align-item:center;
    background-color: #97C0E2;
    color : #00273F;
    border-radius: 10px;
    margin: 0px !important;
    @media screen and (max-width:1000px){
      display:none;
    }
`


Card.propTypes = {
  descricao: string,
};

Card.defaultProps = {
  descricao: '',
};

export default Card;
