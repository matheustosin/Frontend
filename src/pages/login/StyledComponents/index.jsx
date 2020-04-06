import styled from 'styled-components';

import SideImage from './SideImage';
import SideLogin from './SideLogin';
import Logo from './logo';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;
  flex-direction: row;
  text-align: left;
`;

Container.SideImage = SideImage;
Container.SideLogin = SideLogin;
Container.Logo = Logo;

export default Container;
