import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
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
type Story = StoryObj<typeof Modal>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    type: "default",
    children: 'Dark Modal',
    open: true
  },
};
export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    type: "light",
    children: 'Light Modal',
    open: true
  },
};