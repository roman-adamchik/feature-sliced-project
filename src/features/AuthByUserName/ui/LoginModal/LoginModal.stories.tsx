import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  args: {
    isOpen: true,
    onClose: () => {},
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: false,
        username: 'test',
        password: 'test',
      },
    }),
  ],
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

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
