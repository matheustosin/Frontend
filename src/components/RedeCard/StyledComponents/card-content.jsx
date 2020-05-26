import styled from 'styled-components';
import COLORS from '../../../utils/colors.constants';

const CardContent = styled.div`
display:flex;
width: 60%;
height:210px;
flex-direction:column;
padding:0px 20px 0px 20px;
font-weight: 600;
color:${COLORS.AZUL};
@media screen and (max-width:500px){
  width:90%;
  padding:0px;
  margin-bottom:0px;
}
`;
export default CardContent;
