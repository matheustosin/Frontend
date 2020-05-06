import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

import Logo from './logo';
import Title from './Title';

const Container = styled.div`
  opacity: 1;
  height: 70px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: ${COLOR.AZUL} 0% 0% no-repeat padding-box;
`;

Container.Logo = Logo;
Container.Title = Title;

export default Container;
