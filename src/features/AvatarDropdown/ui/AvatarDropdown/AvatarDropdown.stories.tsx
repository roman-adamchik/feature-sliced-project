import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import avatarUrl from '@/shared/assets/tests/avatar.jpg';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [
    StoreDecorator({
      user: {
        _initialized: true,
        authData: {
          avatar: avatarUrl,
        },
      },
    }),
  ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
