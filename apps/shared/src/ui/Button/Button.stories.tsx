import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    type: "default",
    children: 'Dark Button'
  },
};
export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    type: "light",
    children: 'Light Button'
  },
};