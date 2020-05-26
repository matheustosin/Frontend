import styled from 'styled-components';
import COLORS from '../../../utils/colors.constants';
import Icon from '../../RedeIcon/RedeIcon';

const Container = styled.div`
  display: flex;
  border: 3px solid #00273f;
  border-radius: 10px;
  max-width: 755px;
  width: 755px;
  height: 165px;
  color: ${COLORS.AZUL};
  padding-left:35px;
  img{
    align-self:center;
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }

`;

export default Container;
