import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';
import CAMINHO_ICON from '../../../assets/caminho.png';

const Caminho = styled.img`

image: url(${CAMINHO_ICON});
backgrund-color: ${COLOR.AZUL};
background-repeat: no-repeat;
width: 100px;
height: 100px;
text-align: inherit;

`;
  
export default Caminho;