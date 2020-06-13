import styled from 'styled-components';

import Title from './title';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    margin-top: 33px;
    @media screen and (max-width: 1000px){    
        width:100%;
}
`;

Container.Title = Title;

export default Container;
