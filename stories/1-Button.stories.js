import VButton from '../src/components/VButton'

export default {
  title: 'Components/Button'
}

export const Standard = () => ({
  components: { VButton },
  template: `
    <v-button href="http://www.google.com">Test Button</v-button>
  `
})

export const WithoutLink = () => ({
  components: { VButton },
  template: `
    <v-button>Test Button</v-button>
  `
})

export const WithIcon = () => ({
  components: { VButton },
  template: `
    <v-button
      icon="fas fa-long-arrow-alt-right"
      href="http://www.google.com"
    >
      Test Button
    </v-button>
  `
})

export const OpensInANewWindow = () => ({
  components: { VButton },
  template: `
    <v-button
      target="_blank"
      href="http://www.google.com"
    >
      Test Button
    </v-button>
  `
})
