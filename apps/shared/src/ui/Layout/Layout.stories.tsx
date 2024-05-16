/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Typography } from '../Typography';
import { Layout } from './Layout';

const meta: Meta<typeof Layout> = {
  component: Layout,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Layout>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    children: <Typography theme= {{mode: 'dark'}}>Dark Theme</Typography>,
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    children: <Typography theme= {{mode: 'light'}}>Light Theme</Typography>
  },
};