import styled from 'styled-components';

import searchImage from '../../../assets/search.png';

const Input = styled.input`
    width: 80%;
    padding: 5px 20px;
    border: 1px solid #9c9a9a;
    border-radius: 5px;
    opacity: 1;
    margin: 10px auto;
    font-size: 15px;
    background-image: url(${searchImage});
    background-position: 98% 5px;
    background-repeat: no-repeat;
    background-size: 20px;
   
`;

export default Input;