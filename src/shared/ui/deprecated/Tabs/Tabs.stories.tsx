import { action } from '@storybook/addon-actions';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
      {
        value: 'tab 4',
        content: 'tab 4',
      },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
