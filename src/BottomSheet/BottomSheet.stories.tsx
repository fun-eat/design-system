import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useRef } from 'react';

import BottomSheet from './BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
  argTypes: {
    children: {
      description: 'BottomSheet 컴포넌트 내부에 들어갈 내용입니다.',
      control: false,
    },
    close: {
      description: 'BottomSheet 컴포넌트를 닫는 함수를 전달합니다.',
    },
  },
  args: {
    children: <div>바텀시트 컴포넌트입니다.</div>,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      ref.current?.showModal();
    }, []);

    const closeBottomSheet = () => {
      ref.current?.close();
    };

    return (
      <BottomSheet close={closeBottomSheet} ref={ref}>
        <div>바텀시트 컴포넌트</div>
      </BottomSheet>
    );
  },
};