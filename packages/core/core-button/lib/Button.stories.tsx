import SaveIcon from '@material-ui/icons/Save';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button } from '../lib';

export default {
  title: 'core/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [undefined, 'inherit', 'primary', 'secondary', 'default'],
    },
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      mapping: {
        undefined: undefined,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Button {...args}>{args.children}</Button>;
export const Default = Template.bind({});
Default.args = {
  children: 'Hello world',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  ...Default.args,
  startIcon: <SaveIcon />,
};
export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  children: <SaveIcon />,
};
