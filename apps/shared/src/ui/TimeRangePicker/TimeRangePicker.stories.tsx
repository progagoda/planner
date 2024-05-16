import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { TimeRangePicker } from './TimeRangePicker';

const meta: Meta<typeof TimeRangePicker> = {
  component: TimeRangePicker,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof TimeRangePicker>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    type: "default",
    open: true
  },
};
export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    type: "light",
  },
};