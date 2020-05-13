import styled from 'styled-components';

import Title from './Title';
import Search from './Search';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

Container.Title = Title;
Container.Search = Search;

export default Container;