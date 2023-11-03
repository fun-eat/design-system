import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '375px' }}>
      <Skeleton width={100} height={100} />
    </div>
  ),
};
