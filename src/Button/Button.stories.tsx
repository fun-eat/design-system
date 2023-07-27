import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    css: {
      control: { type: 'text' },
    },
  },
  args: {
    customWidth: '120px',
    customHeight: '40px',
    color: 'primary',
    textColor: 'default',
    size: 'md',
    weight: 'regular',
    variant: 'filled',
    children: '버튼',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
};
