import styled from 'styled-components';
import Logo from './Logo'
import Title from './Title'

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #00273F 0% 0% no-repeat padding-box;
  opacity: 1;
`;

Container.Logo = Logo;
Container.Title = Title;
Container.displayName = 'Container';
export default Container;

