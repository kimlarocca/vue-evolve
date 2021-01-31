import VHeader from '../src/components/TheHeader'
import VMenu from '../src/components/TheMenu'
import VButton from '../src/components/VButton'
import SecondaryNavigation from '../src/components/SecondaryNavigation'

export default {
  title: 'Components/The Header'
}

export const MenuOnLeft = () => ({
  components: { VHeader, VMenu, VButton, SecondaryNavigation },
  template: `
    <v-header
      layout="left"
    >
    <template v-slot:logo>
      <img
        src="https://place-hold.it/150x51?text=logo"
        alt="logo"
      />
    </template>
    <template v-slot:button>
      <v-button href="http://www.google.com">
        Click Me
      </v-button>
    </template>
    <template v-slot:menu>
      <v-menu
        layout="left"
        :primaryNav="[
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
        :secondaryNav="[
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 1',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 2',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 3',
                    }
                  ]"
      >
        <template v-slot:logo>
          <img
            src="https://place-hold.it/150x50?text=logo"
            alt="logo"
          />
        </template>
        <template v-slot:button>
          <v-button href="http://www.google.com">
            Click Me
          </v-button>
        </template>
        <template v-slot:component>
          <p class="u-align--center"><em>slot for component</em></p>
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
      </v-menu>
    </template>
    </v-header>`
})

export const MenuOnRight = () => ({
  components: { VHeader, VMenu, VButton, SecondaryNavigation },
  template: `
    <v-header
      layout="right"
    >
    <template v-slot:logo>
      <img
        src="https://place-hold.it/150x51?text=logo"
        alt="logo"
      />
    </template>
    <template v-slot:button>
      <v-button href="http://www.google.com">
        Click Me
      </v-button>
    </template>
    <template v-slot:menu>
      <v-menu
        layout="right"
        :primaryNav="[
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
        :secondaryNav="[
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 1',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 2',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 3',
                    }
                  ]"
      >
        <template v-slot:logo>
          <img
            src="https://place-hold.it/150x50?text=logo"
            alt="logo"
          />
        </template>
        <template v-slot:button>
          <v-button href="http://www.google.com">
            Click Me
          </v-button>
        </template>
        <template v-slot:component>
          <p class="u-align--center"><em>slot for component</em></p>
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
      </v-menu>
    </template>
    </v-header>`
})

export const ResponsiveMenuOnLeft = () => ({
  components: { VHeader, VMenu, VButton, SecondaryNavigation },
  template: `
    <v-header
      layout="left"
      :responsive="true"
    >
    <template v-slot:logo>
      <img
        src="https://place-hold.it/150x51?text=logo"
        alt="logo"
      />
    </template>
    <template v-slot:button>
      <v-button href="http://www.google.com">
        Click Me
      </v-button>
    </template>
    <template v-slot:menu>
      <v-menu
        layout="left"
        :primaryNav="[
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
        :secondaryNav="[
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 1',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 2',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 3',
                    }
                  ]"
      >
        <template v-slot:logo>
          <img
            src="https://place-hold.it/150x50?text=logo"
            alt="logo"
          />
        </template>
        <template v-slot:button>
          <v-button href="http://www.google.com">
            Click Me
          </v-button>
        </template>
        <template v-slot:component>
          <p class="u-align--center"><em>slot for component</em></p>
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
      </v-menu>
    </template>
    <template v-slot:navigation>
      <secondary-navigation
        orientation="horizontal"
        :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]"
      />
    </template>
    </v-header>`
})

export const ResponsiveMenuOnRight = () => ({
  components: { VHeader, VMenu, VButton, SecondaryNavigation },
  template: `
    <v-header
      layout="right"
      :responsive="true"
    >
    <template v-slot:logo>
      <img
        src="https://place-hold.it/150x51?text=logo"
        alt="logo"
      />
    </template>
    <template v-slot:button>
      <v-button href="http://www.google.com">
        Click Me
      </v-button>
    </template>
    <template v-slot:menu>
      <v-menu
        layout="right"
        :primaryNav="[
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
        :secondaryNav="[
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 1',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 2',
                    },
                    {
                      url: 'http://www.google.com',
                      text: 'Secondary Link 3',
                    }
                  ]"
      >
        <template v-slot:logo>
          <img
            src="https://place-hold.it/150x50?text=logo"
            alt="logo"
          />
        </template>
        <template v-slot:button>
          <v-button href="http://www.google.com">
            Click Me
          </v-button>
        </template>
        <template v-slot:component>
          <p class="u-align--center"><em>slot for component</em></p>
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
      </v-menu>
    </template>
    <template v-slot:navigation>
      <secondary-navigation
        orientation="horizontal"
        :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]"
      />
    </template>
    </v-header>`
})
