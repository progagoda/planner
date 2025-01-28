import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { Popconfirm } from './Popconfirm';

const meta: Meta<typeof Popconfirm> = {
    component: Popconfirm,
    decorators: [
        (Story) => (
            <Flex align='center' justify='center'>
                <Story />
            </Flex>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Dark: Story = {
    args: {
        theme: {mode: 'dark'},
        type: "default",
        children: 'Dark Button'
    },
};
export const Light: Story = {
    args: {
        theme: {mode: 'light'},
        type: "light",
        children: 'Light Button'
    },
};