import React from 'react';
import { withInfo } from '@storybook/addon-info';
import RedeCard from './RedeCard';

export default {
  title: 'RedeCard',
  component: RedeCard,
  decorators: [withInfo],
};

export const Default = () => <RedeCard description="Testando" title = "Testando"/>;