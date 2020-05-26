import styled from 'styled-components';

import React from 'react';
import COLOR from '../../../utils/colors.constants';
import CAMINHO_ICON from '../../../assets/caminho.png';

const CaminhoAp = styled.div`

display: flex;
justify-content: flex-start;
align-self: stretch;
margin-left: 250px;

@media only screen and (max-width: 768px) {
    margin-left: 5px;
    padding: 10px 15px;
}
`;

export default CaminhoAp;

