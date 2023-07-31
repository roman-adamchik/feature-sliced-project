import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'entities/comment/AddCommentForm',
  component: AddCommentForm,
  args: {
    sendComment: action('sendComment'),
  },
  decorators: [
    StoreDecorator({
      addCommentForm: {
        text: 'New comment',
        error: undefined,
      },
    }),
  ],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
