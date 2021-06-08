import VButton from '../src/components/VButton'

export default {
  title: 'Components/Button'
}

export const Standard = () => ({
  components: { VButton },
  template: `
    <v-button href="https://www.google.com">Test Button</v-button>
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
      href="https://www.google.com"
    >
      Test Button
    </v-button>
  `
})

export const IconOnly = () => ({
  components: { VButton },
  template: `
    <v-button
      class="icon-only"
      icon="fas fa-cog"
      href="https://www.google.com"
    />
  `
})

export const OpensInANewWindow = () => ({
  components: { VButton },
  template: `
    <v-button
      target="_blank"
      href="https://www.google.com"
    >
      Test Button
    </v-button>
  `
})
