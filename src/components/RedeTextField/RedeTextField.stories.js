import React from 'react';
import { withInfo } from '@storybook/addon-info';
import RedeTextField from './RedeTextField';

export default {
  title: 'RedeTextField',
  component: RedeTextField,
  decorators: [withInfo],
};

export const Email = () => <RedeTextField descricao="Email" />;
export const Senha = () => <RedeTextField descricao="Senha" tipo="password" />;
