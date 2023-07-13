import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    element: {
      description: '대체할 HTML 태그입니다.',
    },
    size: {
      description: '폰트 크기입니다.',
    },
    weight: {
      description: '폰트 가중치입니다.',
    },
    lineHeight: {
      description: '텍스트 높이입니다.',
    },
    color: {
      description: '텍스트 색상입니다.',
    },
    align: {
      description: '텍스트 정렬입니다.',
    },
  },
  args: {
    children: '안녕하세요 펀잇입니다. 로망오우타해황',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Sizes: Story = {
  render: ({ children }) => (
    <>
      <Text size="xs">{children}</Text>
      <Text size="sm">{children}</Text>
      <Text size="md">{children}</Text>
      <Text size="lg">{children}</Text>
      <Text size="xl">{children}</Text>
    </>
  ),
};

export const Weights: Story = {
  render: ({ children }) => (
    <>
      <Text weight="light">{children}</Text>
      <Text weight="regular">{children}</Text>
      <Text weight="bold">{children}</Text>
    </>
  ),
};

export const Aligns: Story = {
  render: ({ children }) => (
    <>
      <Text align="left" lineHeight="xl">
        {children}
      </Text>
      <Text align="center" lineHeight="xl">
        {children}
      </Text>
      <Text align="right" lineHeight="xl">
        {children}
      </Text>
    </>
  ),
};
