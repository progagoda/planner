/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    children:'Dark Theme',

  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    children:'Light Theme'
  },
};