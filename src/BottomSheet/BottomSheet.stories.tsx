import type { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './BottomSheet';
import { useBottomSheet } from './useBottomSheet';

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
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    const { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

    return (
      <>
        <button type="button" style={{ padding: '10px', border: '1px solid gray' }} onClick={handleOpenBottomSheet}>
          바텀시트 열기
        </button>
        <BottomSheet isClosing={isClosing} close={handleCloseBottomSheet} ref={ref}>
          <div style={{ padding: '20px' }}>바텀시트 컴포넌트</div>
        </BottomSheet>
      </>
    );
  },
};

export const WithMaxWidth: Story = {
  render: () => {
    const { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

    return (
      <>
        <button type="button" style={{ padding: '10px', border: '1px solid gray' }} onClick={handleOpenBottomSheet}>
          바텀시트 열기
        </button>
        <BottomSheet isClosing={isClosing} maxWidth="300px" close={handleCloseBottomSheet} ref={ref}>
          <div style={{ padding: '20px' }}>바텀시트 컴포넌트</div>
        </BottomSheet>
      </>
    );
  },
};
