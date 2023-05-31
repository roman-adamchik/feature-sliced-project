import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  args: {
    text: 'export const Code = memo((props: CodeProps) => {\nconst {\n  className = \'\',\n  children,\n} = props;\n    \nreturn (\n  <pre>\n    <code className={classNames(cls.code, {}, [className])}>\n       {children}\n    </code>\n  </pre>\n  );\n});',
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args}/>;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
