import React from 'react';
import { string } from 'prop-types';
import expand from '../../../assets/expand.png';

import Span from './Span';
import Border from './Border';
import TituloCard from './TituloCard';
import ContainerCard from './ContainerCards';
import Img from './Img';

const cards = ({ color, description }) => (
  <Border>
    <Span style={{ background: `${color}` }} />
    <ContainerCard>
      <TituloCard>
        {description}
      </TituloCard>
      <Img src={expand} alt="Button" />
    </ContainerCard>
  </Border>
);

cards.propTypes = {
  color: string.isRequired,
  description: string.isRequired,
};

cards.defaultProps = {
  descricao: '',
  tipo: '',
};

export default cards;
