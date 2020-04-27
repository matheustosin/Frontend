import React from 'react';
import { withInfo } from '@storybook/addon-info';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
  decorators: [withInfo],
};

export const Default = () => <Header descricao="TESTE" />;
