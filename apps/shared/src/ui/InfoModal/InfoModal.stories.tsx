import type { Meta, StoryObj } from '@storybook/react';
import {Flex} from 'antd'

import { InfoModal } from './InfoModal';

const meta: Meta<typeof InfoModal> = {
    component: InfoModal,
    decorators: [
        (Story) => (
            <Flex align='center' justify='center'>
                <Story />
            </Flex>
        ),
    ],
    parameters: {
        loki: { skip: true },
    },
};

export default meta;
type Story = StoryObj<typeof InfoModal>;

export const Dark: Story = {
    args: {
        theme: {mode: 'dark'},
        type: "dark",
        open: true,
        title: 'Some Title',
        children: 'Some Children'
    },
};
export const Light: Story = {
    args: {
        theme: {mode: 'light'},
        type: "light",
        open: true,
        title: 'Some Title',
        children: 'Some Children'
    },
};