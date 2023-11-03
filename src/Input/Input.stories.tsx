import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    rightIcon: {
      control: { type: 'boolean' },
      mapping: { false: '', true: '🔎' },
    },
  },
  args: {
    customWidth: '300px',
    isError: false,
    rightIcon: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '상품 이름을 검색하세요.',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: '상품 이름을 검색하세요.',
    rightIcon: true,
  },
};

export const Error: Story = {
  args: {
    isError: true,
    errorMessage: '10글자 이내로 입력해주세요.',
  },
};

export const Disabled: Story = {
  render: () => <Input disabled />,
};
