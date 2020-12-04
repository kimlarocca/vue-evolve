import VFooter from '../src/components/VFooter'
import SocialLink from '../src/components/SocialLink'

export default {
  title: 'Footer'
}

export const Standard = () => ({
  components: { VFooter, SocialLink },
  template: `
    <v-footer
      company-name="Company Name"
      :navigation="[
                    {
                      url: 'http://www.google.com',
                      text: 'Primary Link 1',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Primary Link 2',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Primary Link 3',
                    }
                  ]"
    >
    <template v-slot:logo>
      <img
        src="https://place-hold.it/150x51?text=logo"
        alt="logo"
      />
    </template>

    <template v-slot:blurb>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </template>

    <template v-slot:social>
      <ul class="social-links">
        <social-link
          icon="fab fa-facebook-f"
          link="https://www.facebook.com"
          label="facebook"
        >
        </social-link>
        <social-link
          icon="fab fa-twitter"
          link="https://www.twitter.com"
          label="twitter"
        >
        </social-link>
        <social-link
          icon="fab fa-youtube"
          link="https://www.youtube.com"
          label="youtube"
        >
        </social-link>
        <social-link
          icon="fab fa-instagram"
          link="https://www.instagram.com"
          label="instagram"
        >
        </social-link>
        <social-link
          icon="fab fa-linkedin-in"
          link="https://www.linkedin.com"
          label="linkedin"
        >
        </social-link>
      </ul>
    </template>
    </v-footer>
  `
})
