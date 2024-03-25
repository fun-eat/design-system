import type { Meta, StoryObj } from '@storybook/react';

import { useBottomSheet } from './useBottomSheet';
// 오류로 인해 임시 설정
import React from 'react';
import BottomSheet from './BottomSheet';
import { useToastActionContext } from '../Toast/context/useToastActionContext';

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

export const MaxWidth: Story = {
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

export const MaxHeight: Story = {
  render: () => {
    const { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

    return (
      <>
        <button type="button" style={{ padding: '10px', border: '1px solid gray' }} onClick={handleOpenBottomSheet}>
          바텀시트 열기
        </button>
        <BottomSheet isClosing={isClosing} close={handleCloseBottomSheet} ref={ref}>
          <div style={{ padding: '20px' }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </div>
        </BottomSheet>
      </>
    );
  },
};

export const WithToast: Story = {
  render: () => {
    const { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
    const { toast } = useToastActionContext();

    return (
      <>
        <button type="button" style={{ padding: '10px', border: '1px solid gray' }} onClick={handleOpenBottomSheet}>
          바텀시트 열기
        </button>
        <BottomSheet hasToast isClosing={isClosing} close={handleCloseBottomSheet} ref={ref}>
          <div style={{ padding: '20px' }}>
            <button onClick={() => toast.success('토스트 테스트 중')}>토스트 버튼</button>
          </div>
        </BottomSheet>
      </>
    );
  },
};
