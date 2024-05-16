/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Typography } from '../Typography';
import { Sider } from './Sider';

const meta: Meta<typeof Sider> = {
  component: Sider,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Sider>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    children:<Typography theme= {{mode: 'dark'}}>Dark Theme</Typography>
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    children:<Typography theme= {{mode: 'light'}}>Light Theme</Typography>
  },
};