/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import {Typography} from '../Typography';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Header>;

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
