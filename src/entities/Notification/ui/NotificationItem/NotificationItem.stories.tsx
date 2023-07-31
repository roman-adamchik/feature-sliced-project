import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  args: {
    item: {
      description: 'Some event',
      id: '1',
      title: 'Notification 1',
      href: '',
    },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
