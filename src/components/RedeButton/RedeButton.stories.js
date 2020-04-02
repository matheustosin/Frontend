import React from 'react';
import { action } from '@storybook/addon-actions';
import RedeButton from './RedeButton';

export default {
  title: 'RedeButton',
  component: RedeButton,
};

export const Default = () => <RedeButton descricao="Teste" onClick={action('Clicou')} />;
