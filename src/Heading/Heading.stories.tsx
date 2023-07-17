import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    element: {
      table: { disable: true },
    },
    css: {
      control: { type: 'text' },
    },
    as: {
      description: 'Heading 컴포넌트의 HTML 태그입니다.',
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
      <Heading as="h1">{children}</Heading>
      <Heading as="h2">{children}</Heading>
      <Heading as="h3">{children}</Heading>
    </>
  ),
};
