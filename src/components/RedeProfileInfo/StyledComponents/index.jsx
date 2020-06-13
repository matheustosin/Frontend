import styled from 'styled-components';
import COLORS from '../../../utils/colors.constants';
import Icon from '../../RedeIcon/RedeIcon';

const Container = styled.div`
  display: flex;
  border: 3px solid #00273f;
  border-radius: 10px;
  max-width: 755px;
  width: 755px;
  min-height: 165px;
  height:auto;
  color: ${COLORS.AZUL};
  padding-left:35px;
  img{
    align-self:center;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
    flex-direction:column;
    height: 220px;
    padding-left:0px;
    height:auto;
    padding-top:20px;
  }

`;

export default Container;
