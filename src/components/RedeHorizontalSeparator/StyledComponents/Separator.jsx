import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Separator = styled.hr`
  height: ${(props) => props.size};
  border-left: 6px solid;
  border-radius: 5px;
  color: ${COLOR.AZUL_CLARO};
  margin-left: 75px;
  margin-right: 75px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media only screen and (max-width: 1000px) {
    display: none;
    height: 0px;
  }
`;

export default Separator;
