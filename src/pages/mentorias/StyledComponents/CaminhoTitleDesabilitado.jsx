import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Desabilitado = styled.h2`
  text-align: center;
  color: ${COLOR.CINZA};
  
  a:link, a:visited {
    color: ${COLOR.CINZA};
    text-decoration: none;
    display: inline-block;
  }
  
  a:hover {
    color: ${COLOR.AZUL_CLARO};
    background-color: transparent;
    
  }
`;

export default Desabilitado;
