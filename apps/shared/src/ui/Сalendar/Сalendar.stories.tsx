import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
  parameters: {
    loki: { skip: true },
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
  },
};