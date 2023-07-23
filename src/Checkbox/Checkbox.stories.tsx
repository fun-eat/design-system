import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      description: 'Checkbox 컴포넌트 라벨에 들어갈 내용입니다.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    children: '재구매 의사가 있으신가요?',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '40px' }}>
      <Checkbox size="xs">재구매 의사가 있으신가요?</Checkbox>
      <Checkbox size="sm">재구매 의사가 있으신가요?</Checkbox>
      <Checkbox size="md">재구매 의사가 있으신가요?</Checkbox>
      <Checkbox size="lg">재구매 의사가 있으신가요?</Checkbox>
      <Checkbox size="xl">재구매 의사가 있으신가요?</Checkbox>
    </div>
  ),
};
