import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    carouselList: [
      {
        id: 0,
        children: <div>1</div>,
      },
      {
        id: 1,
        children: <div>2</div>,
      },
      {
        id: 2,
        children: <div>3</div>,
      },
    ],
  },
};
