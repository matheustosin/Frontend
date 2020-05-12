import styled from 'styled-components';

import COLOR from '../../../utils/colors.constants';
import SEARCH_ICON from '../../../assets/search.png';


const Search = styled.input`
    outline: 0;
    width: 800px;
    height: 48px;
    border: 1px solid ${COLOR.AZUL};
    border-radius: 10px;
    text-align: inherit;
    font-size: 1rem;
    padding-left: 10px;
    background-image: url(${SEARCH_ICON});
    background-position: 99% 50%;
    background-repeat: no-repeat;
`;

Search.defaultProps = {
    placeholder: 'Procurar por Mentoria',
};
  
export default Search;
