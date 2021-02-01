<template>
  <div>
    <the-menu
      :primaryNav="
        [
          {
            route: '/',
            text: 'Home',
          },
          {
            route: 'About',
            text: 'About',
          }
        ]
      "
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
    </the-menu>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import TheMenu from '../components/TheMenu'
import VButton from '../components/VButton'
import VIcons from '../components/VIcons'
import VIconsItem from '../components/VIconsItem'

export default {
  name: 'Default',
  components: { TheMenu, VButton, VIcons, VIconsItem }
}
</script>
