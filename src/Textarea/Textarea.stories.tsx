import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

import Textarea from './Textarea';
import Text from '../Text/Text';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  argTypes: {
    resize: {
      description: 'Textarea 컴포넌트 사이즈 재조정 방향 설정입니다.',
      control: 'radio',
      options: ['both', 'horizontal', 'vertical', 'none'],
    },
    placeholder: {
      description: 'Textarea 컴포넌트의 placeholder입니다.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '최소 20자 이상 입력해주세요.',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;

    const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      setValue(e.currentTarget.value);
    };

    return (
      <>
        <Textarea value={value} onChange={handleInputChange} maxLength={maxLength} />
        <Text>
          작성한 길이: {value.length} / {maxLength}
        </Text>
      </>
    );
  },
};
