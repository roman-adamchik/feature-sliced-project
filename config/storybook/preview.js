import { addDecorator } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StyleDecorator } from "shared/config/storybook/decorators/StyleDecorator"
import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);