import styled from 'styled-components';

import logo from '../../../assets/idear2.png';

const SideImage = styled.div`
  height: 100vh;
  width: 70vw;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.7;

  @media screen and (max-width: 1300px) {
    background-image: none;
    display: none;
  }
`;

export default SideImage;
