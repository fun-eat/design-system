import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  argTypes: {
    href: {
      table: { disable: true },
    },
    css: {
      control: {
        type: 'text',
      },
    },
    as: {
      table: { disable: true },
    },
  },
  args: {
    children: '링크로 이동합니다.',
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
      <Link href="#" isExternal>
        {children}
      </Link>
      <Link href="#">{children}</Link>
    </>
  ),
};
