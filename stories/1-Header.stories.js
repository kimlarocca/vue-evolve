import TheHeader from '../src/components/TheHeader'
import TheMenu from '../src/components/TheMenu'
import VButton from '../src/components/VButton'
import SecondaryNavigation from '../src/components/SecondaryNavigation'

export default {
  title: 'Components/The Header'
}

export const MenuOnLeft = () => ({
  components: { TheHeader, TheMenu, VButton, SecondaryNavigation },
  template: `
    <the-header
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
      <the-menu
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
      </the-menu>
    </template>
    </the-header>`
})

export const MenuOnRight = () => ({
  components: { TheHeader, TheMenu, VButton, SecondaryNavigation },
  template: `
    <the-header
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
      <the-menu
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
      </the-menu>
    </template>
    </the-header>`
})

export const ResponsiveMenuOnLeft = () => ({
  components: { TheHeader, TheMenu, VButton, SecondaryNavigation },
  template: `
    <the-header
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
      <the-menu
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
      </the-menu>
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
    </the-header>`
})

export const ResponsiveMenuOnRight = () => ({
  components: { TheHeader, TheMenu, VButton, SecondaryNavigation },
  template: `
    <the-header
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
      <the-menu
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
      </the-menu>
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
    </the-header>`
})
