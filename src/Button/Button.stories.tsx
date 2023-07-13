import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      description: 'Button이 채워지는 배경 색상입니다.',
    },
    textColor: {
      description: 'Button의 텍스트 색상입니다.',
    },
    variant: {
      description:
        'Button의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지 설정할 수 있습니다.',
    },
    size: {
      description: 'Button의 사이즈입니다.',
    },
  },
  args: {
    color: 'black',
    textColor: 'white',
    variant: 'filled',
    size: 'md',
    children: '버튼',
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

export const OutFilled: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};
