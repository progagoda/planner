/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex, MenuProps} from 'antd'

import { Typography } from '../Typography';
import { Menu } from './Menu';

const getItems = (theme: 'light'| 'dark'): MenuProps['items'] => (
  [
    {key: 'Item1', label: <Typography theme={{mode: theme}}>Item 1</Typography>},
    {key: 'Item2', label: <Typography theme={{mode: theme}}>Item 2</Typography>},
    {key: 'Item3', label: <Typography theme={{mode: theme}}>Item 3</Typography>},
  ]
)
   
const meta: Meta<typeof Menu> = {
  component: Menu,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story/>
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Menu>;

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    items: getItems('dark'),
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    items: getItems('light'),
  },
};