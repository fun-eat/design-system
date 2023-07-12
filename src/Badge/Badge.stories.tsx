import type { Meta, StoryObj } from '@storybook/react';
import theme from '@styles/theme';
import Badge from './Badge';

const meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      description: 'Badge 컴포넌트에 채워지는 색상',
      control: {
        type: 'color',
      },
    },
    textColor: {
      description: 'Badge 컴포넌트에 채워지는 색상',
      control: {
        type: 'color',
      },
    },
    size: {
      description: 'Badge 컴포넌트 내부 사이즈',
    },
    children: {
      description: 'Badge 컴포넌트 들어갈 내용',
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
} satisfies Meta<typeof Badge>;

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
