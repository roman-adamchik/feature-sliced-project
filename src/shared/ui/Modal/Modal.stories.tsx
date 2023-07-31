import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus consequuntur nesciunt, quidem incidunt reprehenderit nemo quasi libero eveniet sit. Explicabo!',
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
