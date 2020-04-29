import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

const Separator = styled.hr`
height: 400px;
border: 4px solid ${COLOR.AZUL_CLARO};
border-radius: 5px;
color: ${COLOR.AZUL_CLARO};
margin-left: 75px;
margin-right: 75px;
margin-top: 25px;
margin-bottom: 25px;
width: 0px;

@media (min-width: 768px) and (max-width: 1199px) {
  height: 0px;
  margin-left: 700px;
  margin-top: 50px;
}
@media (max-width: 767px) {
  height: 50px;
  margin-left: 75px;
  margin-right: 75px;

`;

export default Separator;
