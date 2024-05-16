/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react';
import {Flex, SelectProps, Space} from 'antd'
import { DefaultOptionType } from 'antd/es/select';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [
    (Story) => (
      <Flex align='center' justify='center'>
        <Story />
      </Flex>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Select>;

const options: SelectProps['options'] = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

export const Dark: Story = {
  args: {
    theme: {mode: 'dark'},
    mode: "multiple",
    style: { flex: 1 },
    placeholder: "select one country",
    open: true,
    options: options,
    optionRender: (option: DefaultOptionType) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )
  },
};

export const Light: Story = {
  args: {
    theme: {mode: 'light'},
    mode: "multiple",
    style: { flex: 1 },
    placeholder: "select one country",
    open: true,
    options: options,
    optionRender: (option: DefaultOptionType) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )
  },
};