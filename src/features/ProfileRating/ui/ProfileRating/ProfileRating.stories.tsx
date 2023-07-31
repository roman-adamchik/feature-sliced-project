import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import withMock from 'storybook-addon-mock';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: '1',
        },
      },
    }),
    withMock,
  ],
  parameters: {
    mockData: [
      {
        url: `${GLOBAL_API_URL}/profile-ratings?userId=1&profileId=1`,
        method: 'GET',
        status: 200,
        response: [],
      },
    ],
  },
  args: {
    profileId: '1',
  },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  <ProfileRating {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightRated = Template.bind({});
LightRated.parameters = {
  mockData: [
    {
      url: `${GLOBAL_API_URL}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          profileId: '1',
          userId: '1',
          rate: 3,
          id: '8W4Nxv0',
        },
      ],
    },
  ],
};

export const DarkRated = Template.bind({});
DarkRated.decorators = [ThemeDecorator(Theme.DARK)];
DarkRated.parameters = {
  mockData: [
    {
      url: `${GLOBAL_API_URL}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          profileId: '1',
          userId: '1',
          rate: 3,
          id: '8W4Nxv0',
        },
      ],
    },
  ],
};
