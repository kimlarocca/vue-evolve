import CalloutBanner from '../src/components/CalloutBanner'

export default {
  title: 'Components/Callout Banner'
}

export const Standard = () => ({
  components: { CalloutBanner },
  template: `
    <div class="sbdocs-large-container">
    <callout-banner>
      <template slot="message">
        <p>
          We use cookies to better understand how you use our website so that we can improve in our
          experience. By continuing to browse or closing this banner, you indicate your agreement. To learn
          more, please visit our <a href="http://www.google.com">Privacy Policy.</a>
        </p>
      </template>
    </callout-banner>
    </div>
  `
})
