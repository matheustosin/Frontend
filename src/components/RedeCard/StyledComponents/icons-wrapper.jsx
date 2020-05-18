import styled from 'styled-components';
import CardFooterContent from './card-footer-content';
import SubTitle from './subtitle';

const IconsWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  button{
    display:none;
  }
  @media screen and (max-width:1000px){
    button{
      display:inline-block;
    }
  }
`;

export default IconsWrapper;
