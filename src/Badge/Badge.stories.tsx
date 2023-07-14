import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import theme from '../styles/theme';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    textColor: {
      control: {
        type: 'color',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    color: theme.colors.black,
    textColor: theme.colors.white,
    size: 'sm',
    children: '뱃지 텍스트',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const XSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
  },
};
