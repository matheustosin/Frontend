import React from 'react';
import { withInfo } from '@storybook/addon-info';
import RedeInputRadio from './RedeInputRadio';

export default {
  title: 'RedeInputRadio',
  component: RedeInputRadio,
  decorators: [withInfo],
};

export const padrao = () => <RedeInputRadio />;
