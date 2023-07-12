import type { Preview } from '@storybook/react';
import React from 'react';
import FunEatProvider from '../src/FunEatProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <FunEatProvider>
      <Story />
    </FunEatProvider>
  ),
];

export default preview;
