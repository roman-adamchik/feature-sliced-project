## Run the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - run server + frontend project in dev mode
```

---

## Scripts

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:vite` - Run frontend project on vite
- `npm run start:dev` - Run frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project on vite + backend
- `npm run start:dev:server` - Run backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (non-minified)
- `npm run lint:ts` - Lint check for ts files
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Lint check for scss style files
- `npm run lint:scss:fix` - Fix scss style files with linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:e2e` - Run e2e tests with cypress
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build Storybook
- `npm run generate:slice` - Script to generate FSD slices

---

## Project Architecture

The project is developed according to the Feature Sliced Design methodology.

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for translation management.
Translation files are stored in public/locales.

For a comfortable work, we recommend installing the plugin for WebStorm/VSCode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses 4 types of tests:

- Regular unit tests with jest - `npm run test:unit`
- Component tests with React Testing Library - `npm run test:unit`
- Screenshot testing with loki - `npm run test:ui`
- End-to-end (e2e) testing with Cypress - `npm run test:e2e`

More details about the tests can be found in the - [testing documentation](/docs/tests.md)

---

## Linters

The project uses ESLint to check TypeScript code and Stylelint to check style files.

In addition, for strict control of major architectural principles, a custom ESLint plugin [_eslint-plugin-fsd-slivki_](https://www.npmjs.com/package/eslint-plugin-fsd-slivki) is used, which includes 3 rules:

1. `path-check-relative` - prohibits the use of absolute imports within the same module
2. `path-check-layers` - checks the correct usage of layers from the FSD perspective (e.g., widgets cannot be used in features and entities)
3. `path-check-public-api` - allows imports from other modules only from the public API. It has auto fix.

##### Run linters

- `npm run lint:ts` - check ts files
- `npm run lint:ts:fix` - fix ts files
- `npm run lint:scss` - check scss files
- `npm run lint:scss:fix` - fix scss files

---

## Storybook

In the project, story cases are described for each component.
Requests to the server are mocked with storybook-addon-mock.

A file with stories creates next to the component with the extension .stories.tsx

To run storybook:

- `npm run storybook`

See more about [Storybook](/docs/storybook.md)

---

## Project config

Project has two config for dev mods:

1. Webpack - `./config/build`
2. vite - `./vite.config.ts`

Both builders are customized for base app features.

All the configs are stored in `/config`

- `/config/babel` - babel
- `/config/build` - webpack config
- `/config/jest` - jest config
- `/config/storybook` - storybook config

In `/scripts` folder there are different scripts for refactoring, automatization, code generation etc.

---

## CI pipeline and pre commit hooks

Github actions config is in `/.github/workflows`.
CI consists of project build, storybook build, all forms of testing including screenshot testing and linting.

In precommit hooks we check the project with linters. Config is in `/.husky`

---

### Work with data

Work with data api in organized with help of redux toolkit.
You should use EntityAdapter to normalize reusable entities if its possible.

Requests to server are sending with help of [RTK query](/src/shared/api/rtkApi.ts)

For enabling async reducers we use [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx). This prevents us from overloading the main chunk.

---

### Work with feature flags

Working with feature flag is possible on the project. You should use the template below:

```
// For plain ts/js
toggleFeature({
  name: "feature-name",
  on: () => ..., // arrow function if feature is on
  off: () => ... // arrow function if feature is off
})

// For tsx
<ToggleFeatures
  feature="feature-name"
  on={<Component_if_feature_on/>}
  off={<Component_if_feature_off/>}
/>
```

To remove feature from the code base you can use script from `./scripts/refactoring/removeFeature.ts`
Use the command `npm run remove-feature feature-name on/off` to run the script

---

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [AddCommentToArticle](/src/features/AddCommentToArticle)
- [ArticleCommentList](/src/features/ArticleCommentList)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
