import styled from 'styled-components';
import COLOR from '../../../utils/colors.constants';

const LineSeparator = styled.div`
@media (min-width: 1200px) {
  height: 350px;
  margin-left: 50%;
  width: 0px;
  border: 4px solid ${COLOR.AZUL_CLARO};
  border-radius: 5vw;
}
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


export default LineSeparator;
