/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    children:'Dark Theme'
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    children:'Light Theme'
  },
};