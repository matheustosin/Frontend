import React from 'react';
import { withInfo } from '@storybook/addon-info';
import RedeCheckbox from './RedeCheckbox';

export default {
  title: 'RedeCheckbox',
  component: RedeCheckbox,
  decorators: [withInfo],
};

export const padrao = () => <RedeCheckbox  />;
