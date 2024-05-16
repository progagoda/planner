/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

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