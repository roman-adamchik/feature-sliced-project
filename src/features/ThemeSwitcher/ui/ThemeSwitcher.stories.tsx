import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import {
  SidebarBackgroundDecorator,
} from '@/shared/config/storybook/decorators/SidebarBackgroundDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [SidebarBackgroundDecorator],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [SidebarBackgroundDecorator, ThemeDecorator(Theme.DARK)];
