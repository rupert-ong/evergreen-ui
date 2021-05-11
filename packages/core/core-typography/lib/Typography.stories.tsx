import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Typography } from '../lib';
export default {
  title: 'core/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [
        undefined,
        'inherit',
        'initial',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
        'error',
      ],
    },
    component: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span'],
    },
    variant: {
      mapping: {
        undefined: undefined,
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Typography {...args}>{args.children}</Typography>
);
export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};
