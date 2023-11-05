import type { Meta, StoryObj } from '@storybook/react';

import { useToastActionContext } from './context';
import ToastProvider from './context/ToastContext';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const { toast } = useToastActionContext();
    const handleClick = () => {
      toast.success('성공');
    };
    return (
      <div style={{ width: '375px' }}>
        <button onClick={handleClick}>토스트 성공</button>
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const { toast } = useToastActionContext();
    const handleClick = () => {
      toast.error('실패');
    };
    return (
      <div style={{ width: '375px' }}>
        <button onClick={handleClick}>토스트 에러</button>
      </div>
    );
  },
};
