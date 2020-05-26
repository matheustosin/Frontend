import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Logo = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-right: 130px;
  color: ${COLOR.AZUL_CLARO};

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export default Logo;
