import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    type: {
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
};

export default meta;
type Story = StoryObj<typeof Text>;

const text = '안녕하세요 펀잇입니다';

export const Default: Story = {
  args: {
    children: text,
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Text size="xs">{`${text}: xs`}</Text>
      <Text size="sm">{`${text}: sm`}</Text>
      <Text size="md">{`${text}: md (default)`}</Text>
      <Text size="lg">{`${text}: lg`}</Text>
      <Text size="xl">{`${text}: xl`}</Text>
    </>
  ),
};

export const Weights: Story = {
  render: () => (
    <>
      <Text weight="light">{`${text}: light`}</Text>
      <Text weight="regular">{`${text}: regular (default)`}</Text>
      <Text weight="bold">{`${text}: bold`}</Text>
    </>
  ),
};

export const Aligns: Story = {
  render: () => (
    <>
      <Text align="left" lineHeight="xl">
        {text}
      </Text>
      <Text align="center" lineHeight="xl">
        {text}
      </Text>
      <Text align="right" lineHeight="xl">
        {text}
      </Text>
    </>
  ),
};
