import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: false,
        username: 'test',
        password: 'test',
      },
    }),
  ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: false,
      username: 'test',
      password: 'test',
      error: 'error',
    },
  }),
];

export const WithErrorDark = Template.bind({});
WithErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      isLoading: false,
      username: 'test',
      password: 'test',
      error: 'error',
    },
  }),
];
