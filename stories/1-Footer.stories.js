import TheFooter from '../src/components/TheFooter'
import VIcons from '../src/components/VIcons'
import VIconsItem from '../src/components/VIconsItem'

export default {
  title: 'Components/The Footer'
}

export const Standard = () => ({
  components: { TheFooter, VIcons, VIconsItem },
  template: `
    <the-footer
      company-name="Company Name"
      :navigation="
        [
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
        ]
    "
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
        <v-icons>
          <v-icons-item
            icon="fab fa-facebook-f"
            link="https://www.facebook.com"
            label="facebook"
          />
          <v-icons-item
            icon="fab fa-twitter"
            link="https://www.twitter.com"
            label="twitter"
          />
          <v-icons-item
            icon="fab fa-youtube"
            link="https://www.youtube.com"
            label="youtube"
          />
          <v-icons-item
            icon="fab fa-instagram"
            link="https://www.instagram.com"
            label="instagram"
          />
          <v-icons-item
            icon="fab fa-linkedin-in"
            link="https://www.linkedin.com"
            label="linkedin"
          />
        </v-icons>
      </template>
    </the-footer>
  `
})
