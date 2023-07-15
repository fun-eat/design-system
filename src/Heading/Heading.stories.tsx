import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
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
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Variant: Story = {
  render: ({ children }) => (
    <>
      <Heading element="h1">{children}</Heading>
      <Heading element="h2">{children}</Heading>
      <Heading element="h3">{children}</Heading>
    </>
  ),
};
