import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    css: {
      control: { type: 'text' },
    },
    as: {
      table: { disable: true },
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
      <Text align="left">{children}</Text>
      <Text align="center">{children}</Text>
      <Text align="right">{children}</Text>
    </>
  ),
};

export const Elements: Story = {
  render: ({ children }) => (
    <>
      <Text>{children}</Text>
      <Text as="span">{children}</Text>
    </>
  ),
};
