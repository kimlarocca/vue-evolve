import '!style-loader!css-loader!sass-loader!./storybook-styles.css';
import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import Vue from 'vue'
import { action } from '@storybook/addon-actions'

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

Vue.component('nuxt-link', {
  props:   ['route'],
  methods: {
    log() {
      action('link target')(this.route)
    },
  },
  template: '<a :href="route" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

Vue.component('router-link', {
  props:   ['route'],
  methods: {
    log() {
      action('link target')(this.route)
    },
  },
  template: '<a :href="route" @click.prevent="log()"><slot>RouterLink</slot></a>',
})
