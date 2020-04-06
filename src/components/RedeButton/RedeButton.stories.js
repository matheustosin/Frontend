import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import RedeButton from './RedeButton';

export default {
  title: 'RedeButton',
  component: RedeButton,
  decorators: [withInfo],
};

export const Default = () => <RedeButton descricao="Teste" onClick={action('Clicou')} />;
export const Disabled = () => <RedeButton descricao="Teste" onClick={action('Clicou')} desabilitado />;
