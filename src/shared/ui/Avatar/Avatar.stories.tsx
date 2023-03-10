import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarUrl from './avatar.jpg';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: avatarUrl,
    alt: 'avatar',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 50,
};
