import styled from 'styled-components';

const Image = styled.img`
  width: 250px;
  height: 250px;

  @media only screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

export default Image;
