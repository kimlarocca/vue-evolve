import VTooltip from '../src/components/VTooltip'
import VSpacer from '../src/components/VSpacer'

export default {
  title: 'Components/Tooltip'
}

export const Default = () => ({
  components: { VSpacer, VTooltip },
  template: `
    <div class="l-grid l-grid--3up">
      <div class="u-align--left">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--center">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--right">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--left">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--center">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--right">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
        <v-spacer size="dec" />
      </div>
      <div class="u-align--left">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
      </div>
      <div class="u-align--center">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
      </div>
      <div class="u-align--right">
        <v-tooltip
          text="Tooltips are floating pieces of contextual information about an element on screen."
          link="https:/www.google.com"
        >
          <a>Hover Over Me</a>
        </v-tooltip>
      </div>
    </div>
  `
})
