import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import avatarUrl from 'shared/assets/tests/avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          name: 'John',
          lastname: 'Smith',
          age: 49,
          currency: Currency.ILS,
          country: Country.Israel,
          city: 'New York',
          username: 'admin',
          avatar: avatarUrl,
        },
      },
    }),
  ],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (
  args,
) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
};

export const Loading = Template.bind({});
Loading.args = {
};
