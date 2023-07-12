import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import theme from '@styles/theme';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      description: 'button이 채워지는 배경 색상입니다.',
    },
    textColor: {
      description: 'button의 텍스트 색상입니다.',
    },
    styleType: {
      description:
        'button의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지 설정할 수 있습니다.',
    },
    size: {
      description: 'button의 사이즈입니다.',
    },
  },
  args: {
    color: theme.colors.black,
    textColor: theme.colors.white,
    styleType: 'filled',
    size: 'md',
    children: '버튼',
  },
} satisfies Meta<typeof Button>;

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
    styleType: 'outFilled',
  },
};

export const Filled: Story = {
  args: {
    styleType: 'filled',
  },
};
