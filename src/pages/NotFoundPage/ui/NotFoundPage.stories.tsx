import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  args: {
    children: 'Link',
    to: '/',
  },
  decorators: [
    StoreDecorator({
      user: {
        _initialized: true,
        authData: {},
      },
    }),
  ],
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
  <NotFoundPage {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
