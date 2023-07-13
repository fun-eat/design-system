import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

import theme from '@styles/theme';

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      description: 'Badge 컴포넌트에 채워지는 색상입니다.',
      control: {
        type: 'color',
      },
    },
    textColor: {
      description: 'Badge 컴포넌트의 텍스트 색상입니다.',
      control: {
        type: 'color',
      },
    },
    size: {
      description: 'Badge 컴포넌트 사이즈입니다.',
    },
    children: {
      description: 'Badge 컴포넌트에 들어갈 내용입니다.',
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
