import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { RatingCard } from './RatingCard';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  args: {
    hasFeedback: true,
    feedbackTitle: 'Please leave feedback',
    title: 'Leave feedback',
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
