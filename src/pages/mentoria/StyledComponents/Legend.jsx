import styled from 'styled-components';

const Title = styled.div`
    display:flex;
    align-self:flex-end;
    button + button{
        margin-left: 15px;
    }
    button{
        :hover{
            cursor:initial;
        }
        
    }
`;

export default Title;