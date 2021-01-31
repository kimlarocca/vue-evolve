import '!style-loader!css-loader!sass-loader!./storybook-styles.css';
import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';

export const parameters = {
  themes: [
    { name: 'light mode', class: 'light-mode', color: '#ffffff', default: true },
    { name: 'dark mode', class: 'dark-mode', color: '#111111' }
  ],
  options: {
    storySort: {
      order: ['Foundations', ['Intro', 'Using Npm Link', 'CSS Guidelines', 'Creating A Component', 'Testing A Component'], 'Components'],
    },
  },
};
