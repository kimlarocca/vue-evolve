import VSpacer from '../src/components/VSpacer'

export default {
  title: 'Foundations/Spacing'
}

export const Spacing = () => ({
  components: {VSpacer},
  template: `
    <div class="sbdocs-large-container">
      <p class="u-space--bottom">Half:</p>
      <v-spacer size="half" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Default:</p>
      <v-spacer class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Double:</p>
      <v-spacer size="double" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Triple:</p>
      <v-spacer size="triple" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Quad:</p>
      <v-spacer size="quad" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Quin:</p>
      <v-spacer size="quin" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Hex:</p>
      <v-spacer size="hex" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Sept:</p>
      <v-spacer size="sept" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Oct:</p>
      <v-spacer size="oct" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Non:</p>
      <v-spacer size="non" class="u-background-color--gray--light"/>
      <p class="u-space--top u-space--bottom">Dec:</p>
      <v-spacer size="dec" class="u-background-color--gray--light"/>
    </div>
  `
})
