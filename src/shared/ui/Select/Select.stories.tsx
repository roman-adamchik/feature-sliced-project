import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    placeholder: 'Enter value',
    options: [
      {
        value: '1',
        content: '123',
      },
      {
        value: '2',
        content: '1234',
      },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
