import type { Meta, StoryObj } from '@storybook/react';
import {Flex, MenuProps} from 'antd'

import { Dropdown } from './Dropdown';
import { Typography } from '../Typography';

const items: MenuProps['items'] = [
    {
        label:  <Typography>{"user"}</Typography>,
        key: 'userName',
    },
    {
        label:  <Typography>{"sign out"}</Typography>,
        key: 'logout',
    },
]

const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    args: {
        open: true,
    },
    decorators: [
        (Story) => (
            <Flex align='center' justify='center'>
                <Story menu={{items}}/>
            </Flex>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof Dropdown>;


export const Dark: Story = {
    args: {
        theme: {mode: 'dark'},
        type: "default",
    },
    
};

export const Light: Story = {
    args: {
        theme: {mode: 'light'},
        type: "light",
    },
};