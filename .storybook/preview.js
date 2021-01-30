import '!style-loader!css-loader!sass-loader!./storybook-styles.css';
import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';

export const parameters = {
  options: {
    storySort: {
      order: ['Foundations', ['Intro', 'Using Npm Link', 'Creating A Component', 'Testing A Component'], 'Components'],
    },
  },
};
