import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  argTypes: {
    css: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
};
