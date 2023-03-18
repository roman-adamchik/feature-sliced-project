import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    width: '100%',
    height: 200,
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleLight = Template.bind({});
CircleLight.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};

export const CircleDark = Template.bind({});
CircleDark.args = {
  width: 100,
  height: 100,
  borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
