import VButton from '../src/components/VButton'

export default {
  title: 'Button',
  component: VButton
}

export const Standard = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-large-container">
      <v-button href="http://www.google.com">Test Button</v-button>
    </div>
`
})

export const WithoutLink = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-large-container">
      <v-button>Test Button</v-button>
    </div>
`
})

export const WithIcon = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-large-container">
      <v-button icon="fas fa-long-arrow-alt-right" href="http://www.google.com">Test Button</v-button>
    </div>
`
})
