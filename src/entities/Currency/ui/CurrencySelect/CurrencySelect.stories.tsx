import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  args: {
    placeholder: 'Select currency',
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
