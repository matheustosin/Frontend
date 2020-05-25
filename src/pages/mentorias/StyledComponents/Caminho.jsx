import styled from 'styled-components';

import React from 'react';
import COLOR from '../../../utils/colors.constants';
import CAMINHO_ICON from '../../../assets/caminho.png';

const StyledCaminho = styled.img`

backgrund-color: ${COLOR.AZUL};
background-repeat: no-repeat;
width: 20px;
height: 20px;
text-align: inherit;
position: relative;
top 20px;
margin-right: 15px;
margin-left: 15px;
`;

const Caminho = () => {
    return <StyledCaminho src={CAMINHO_ICON} />
}

export default Caminho;

