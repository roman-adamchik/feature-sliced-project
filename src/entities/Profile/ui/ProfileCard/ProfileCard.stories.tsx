import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatarUrl from 'shared/assets/tests/avatar.jpg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  args: {
    data: {
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
