import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import withMock from 'storybook-addon-mock';

const notification = {
  id: '1',
  title: 'Notification 1',
  description: 'Some event passed',
  userId: '1',
};

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [
    StoreDecorator({}),
    withMock,
  ],
  parameters: {
    mockData: [
      {
        url: `${GLOBAL_API_URL}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          notification,
          { ...notification, id: '2' },
          { ...notification, id: '3' },
          { ...notification, id: '4' },
        ],
      },
    ],
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
