import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Title = styled.h1`
  margin-top: 20px;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
  color: ${COLOR.AZUL};

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    margin: 15px 20px;
  }
`;

export default Title;
