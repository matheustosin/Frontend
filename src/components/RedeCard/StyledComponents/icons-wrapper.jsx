import styled from 'styled-components';

const IconsWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  width:50%;
  button{
    display:none;
  }
  
  @media screen and (max-width:500px){
    button{
      display:inline-block;
    }
    width:100%;
  }
`;

export default IconsWrapper;
