import styled from 'styled-components';

import HeaderTitle from './header-title';


const Header = styled.div`
display:flex;
width: 100%;
height:100%;
margin: 0px 0px 6px 35px;
align-items: center;
`;

Header.Title = HeaderTitle;

export default Header;