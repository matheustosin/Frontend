import styled from 'styled-components';
import searchImage from '../../../assets/search.png';
import COLOR from '../../../utils/colors.constants';

const Input = styled.input`
    padding: 5px 20px;
    border: 1px solid ${COLOR.AZUL};
    border-radius: 10px;
    opacity: 1;
    margin: 10px auto;
    font-size: 15px;
    background-image: url(${searchImage});
    background-position: 99% 50%;   
    background-repeat: no-repeat;
    width: 800px;
    height: 40px;
    font-size: 1rem;

    @media only screen and (max-width: 768px) {
        width: 80%;
    }
   
`;

export default Input;