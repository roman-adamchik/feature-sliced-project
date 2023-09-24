import { action } from '@storybook/addon-actions';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { type ListBoxItem } from './ListBox';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ListBox } from './ListBox';

const items: ListBoxItem[] = [
  { value: 'USD', content: 'USD' },
  { value: 'EUR', content: 'EUR' },
  { value: 'ILS', content: 'ILS' },
  { value: 'BYN', content: 'BYN', unavailable: true },
];

export default {
  title: 'shared/ListBox',
  component: ListBox,
  args: {
    onChange: action,
    items,
    value: 'USD',
    defaultValue: 'Select currency',
    label: 'Select currency',
    readonly: false,
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Light = Template.bind({});

export const LightReadonly = Template.bind({});
LightReadonly.args = {
  readOnly: true,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkReadonly = Template.bind({});
DarkReadonly.decorators = [ThemeDecorator(Theme.DARK)];
DarkReadonly.args = {
  readOnly: true,
};
