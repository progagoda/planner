import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { FormItem } from './FormItem';

const meta: Meta<typeof FormItem> = {
    component: FormItem,
    decorators: [
        (Story) => (
            <Flex align='center' justify='center'>
                <Story />
            </Flex>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof FormItem>;

export const Dark: Story = {
    args: {
        theme: {mode: 'dark'},
        type: "default",
        label: 'Test Label',
        children: 'Dark Button'
    },
};
export const Light: Story = {
    args: {
        theme: {mode: 'light'},
        type: "light",
        label: 'Test Label',
        children: 'Light Button'
    },
};