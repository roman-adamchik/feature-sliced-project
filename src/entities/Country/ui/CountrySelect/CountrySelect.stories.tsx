import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {
    placeholder: 'Select country',
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const Primary = Template.bind({});
