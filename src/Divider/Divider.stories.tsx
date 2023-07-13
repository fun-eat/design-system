import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';

const meta = {
  title: 'Divider',
  component: Divider,
  argTypes: {
    variant: {
      description: 'divider의 종류입니다.',
    },
    length: { description: 'divider의 길이입니다.' },
  },
} satisfies Meta<typeof Divider>;

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
