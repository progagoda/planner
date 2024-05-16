/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Input>;

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