import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../packages/core/core-theme';

export const decorators = [muiTheme([theme])];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Intro', 'base-ui', ['Intro']],
    },
  },
};
