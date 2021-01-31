import VAccordion from '../src/components/VAccordion'

export default {
  title: 'Components/Accordions'
}

export const ClosedOnLoad = () => ({
  components: {
    VAccordion
  },
  template: `
    <v-accordion class="u-space--bottom">
      <template v-slot:header>
        <h4>Accordion Header</h4>
      </template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
  `
})

export const OpenOnLoad = () => ({
  components: {
    VAccordion
  },
  template: `
    <v-accordion should-open-on-load class="u-space--bottom">
      <template v-slot:header>
        <h4>Accordion Header</h4>
      </template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
  `
})

export const ClosedOnMobile = () => ({
  components: {
    VAccordion
  },
  template: `
    <v-accordion should-open-on-load closed-on-mobile class="u-space--bottom">
      <template v-slot:header>
        <h4>Accordion Header</h4>
      </template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
  `
})
