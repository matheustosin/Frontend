import styled from 'styled-components';

import React from 'react';
import COLOR from '../../../utils/colors.constants';
import CAMINHO_ICON from '../../../assets/caminho.png';

const StyledCaminho = styled.img`

backgrund-color: ${COLOR.AZUL};
background-repeat: no-repeat;
width: 100px;
height: 100px;
text-align: inherit;
`;

const Caminho = () => {
    return <StyledCaminho src={CAMINHO_ICON} />
}

export default Caminho;

