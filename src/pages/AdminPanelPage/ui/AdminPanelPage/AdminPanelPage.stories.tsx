import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import AdminPanelPage from './AdminPanelPage';

export default {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
  <AdminPanelPage {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
