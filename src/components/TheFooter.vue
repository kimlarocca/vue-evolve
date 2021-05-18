<template>
  <footer class="footer">
    <div class="l-container">
      <div
        v-if="hasLogoSlot"
        class="footer-logo"
      >
        <slot name="logo" />
        <v-spacer size="double" />
      </div>
      <div
        v-if="hasSocialSlot"
        class="footer-social"
      >
        <slot name="social" />
        <v-spacer size="double" />
      </div>
      <div
        v-if="hasBlurbSlot"
        class="footer-blurb"
      >
        <slot name="blurb" />
        <v-spacer size="double" />
      </div>
      <div
        v-if="navigation"
        class="footer-navigation"
      >
        <secondary-navigation
          :nav-items="navigation"
          orientation="horizontal"
        />
        <v-spacer size="double" />
      </div>
      <p class="footer-copyright">Copyright © {{ currentYear }}<span v-if="companyName">&nbsp;{{ companyName }}</span>. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import SocialLink from './VIcons'
import SecondaryNavigation from '../components/SecondaryNavigation'
import VSpacer from '../components/VSpacer'

export default {
  name: 'Footer',
  components: {
    SecondaryNavigation, SocialLink, VSpacer
  },
  props: {
    companyName: {
      type: String,
      default: null
    },
    navigation: {
      type: Array,
      default: null
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    },
    hasBlurbSlot () {
      return !!this.$slots.blurb
    },
    hasLogoSlot () {
      return !!this.$slots.logo
    },
    hasSocialSlot () {
      return !!this.$slots.social
    }
  }
}
</script>

<style lang="scss">
.footer {
  padding: var(--footer-padding);
  background: var(--footer-background);
  color: var(--footer-color);
  font-size: var(--footer-font-size);
  text-align: var(--footer-alignment);
}

.footer a,
.footer a:visited,
.footer a:active {
  color: var(--footer-link-color);
  font-size: var(--footer-font-size);
  font-family: var(--font-family-primary);

  &:hover {
    color: var(--footer-color);
    opacity: var(--opacity-on-hover);
  }
}

.footer-social li a,
.footer-social li a:visited,
.footer-social li a:active {
  color: var(--footer-color);
  padding-bottom: 0;
  border-bottom: none;

  &:hover {
    color: var(--footer-color);
    opacity: var(--opacity-on-hover);
  }
}
</style>
