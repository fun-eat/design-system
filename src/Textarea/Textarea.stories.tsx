import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    resize: {
      description: 'Textarea 컴포넌트 사이즈 재조정 방향 설정입니다.',
      control: 'radio',
      options: ['both', 'horizontal', 'vertical', 'none'],
    },
    focusBorderColor: {
      description: 'Textarea 컴포넌트 포커스 시 border 색상입니다.',
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
