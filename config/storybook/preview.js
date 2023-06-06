import { addDecorator } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { StyleDecorator } from "shared/config/storybook/decorators/StyleDecorator"
import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { SuspenseDecorator } from "shared/config/storybook/decorators/SuspenseDecorator";
import { Theme } from "@/shared/const/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#0232c2' },
      { name: 'dark', class: Theme.DARK, color: '#04ff04' },
      { name: 'orange', class: Theme.YELLOW, color: '#9a1a0e' },
    ],
  },
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);