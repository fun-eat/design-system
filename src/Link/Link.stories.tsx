import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    href: {
      table: { disable: true },
    },
  },
  args: {
    children: '외부 링크로 이동합니다.',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const Block: Story = {
  render: ({ children }) => (
    <>
      <Link href="#" block isExternal>
        {children}
      </Link>
      <Link href="#" block>
        {children}
      </Link>
    </>
  ),
};
