import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    type: "default",
    children: 'Dark Card'
  },
};
export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    type: "light",
    children: 'Light Card'
  },
};