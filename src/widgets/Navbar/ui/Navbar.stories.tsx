import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';
import avatarImage from '@/shared/assets/tests/avatar.jpg';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: 'Test',
          avatar: avatarImage,
        },
      },
    }),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
