import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';

import Logo from './logo';
import Title from './Title';
import Clearfix from './clearfix';

const Container = styled.div`
  opacity: 1;
  width: 100%;
  height: 70px;
  display: flex;
  overflow: hidden;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  background: ${COLOR.AZUL} 0% 0% no-repeat padding-box;
`;

Container.Logo = Logo;
Container.Title = Title;
Container.Clearfix = Clearfix;

export default Container;
