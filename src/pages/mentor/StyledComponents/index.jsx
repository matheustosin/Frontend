import styled from 'styled-components';

import Title from './title';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-top: 33px;
`;

Container.Title = Title;

export default Container;
