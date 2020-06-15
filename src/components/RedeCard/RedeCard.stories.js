import React from 'react';
import { withInfo } from '@storybook/addon-info';
import RedeCard from './RedeCard';
import imagem from '../../assets/teacher.png';

export default {
  title: 'RedeCard',
  component: RedeCard,
  decorators: [withInfo],
};

export const Default = () => (
  <RedeCard
    description="Descrição da mentoria"
    title="Tíitulo da mentoria"
  />
);
export const NotVisible = () => (
  <RedeCard description="Testando" title="Testando" visible={false} />
);
export const DefaultMentoras = () => (
  <RedeCard
    description="Testando"
    title="Testando"
    mentorias
    mentorName="Professor Carlos"
    mentorImage={imagem}
  />
);
