<template>
  <div class="menu">
    <div
      class="menu-hamburger"
      @click="toggleMenu"
    >
      <i class="fas fa-bars" />
    </div>
    <transition name="slide-right">
      <nav
        v-if="menuOpen"
        class="menu-panel"
      >
        <div
          class="menu-close"
          @click="menuOpen = false"
        >
          <i class="fas fa-times" />
        </div>
        <div
          v-if="hasLogoSlot"
          class="menu-logo"
        >
          <slot name="logo" />
        </div>
        <div
          v-if="hasButtonSlot"
          class="menu-button"
        >
          <v-spacer size="triple" />
          <slot name="button" />
        </div>
        <div
          v-if="primaryNav"
          class="menu-primary-navigation"
        >
          <v-spacer size="triple" />
          <secondary-navigation :nav-items="primaryNav" />
        </div>
        <div
          v-if="hasComponentSlot"
          class="menu-component"
        >
          <v-spacer size="triple" />
          <slot name="component" />
        </div>
        <div
          v-if="secondaryNav"
          class="menu-secondary-navigation"
        >
          <v-spacer size="triple" />
          <secondary-navigation :nav-items="secondaryNav" />
        </div>
        <div
          v-if="hasSocialSlot"
          class="menu-social"
        >
          <v-spacer size="triple" />
          <slot name="social" />
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import SecondaryNavigation from '../components/SecondaryNavigation'
import VSpacer from '../components/VSpacer'

export default {
  name: 'VMenu',
  components: {
    SecondaryNavigation,
    VSpacer
  },
  props: {
    primaryNav: {
      type: Array,
      default: null
    },
    secondaryNav: {
      type: Array,
      default: null
    }
  },
  data: function () {
    return {
      menuOpen: false
    }
  },
  computed: {
    hasButtonSlot () {
      return !!this.$slots.button
    },
    hasComponentSlot () {
      return !!this.$slots.component
    },
    hasLogoSlot () {
      return !!this.$slots.logo
    },
    hasSocialSlot () {
      return !!this.$slots.social
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss">
.menu .menu-hamburger {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  font-size: 30px;
}

.menu.not-fixed .menu-hamburger {
  position: relative;
}

.menu .menu-close {
  cursor: pointer;
  position: absolute;
  font-size: 25px;
  top: var(--space-3);
  right: var(--space-3);
  transition: var(--transition);

  &:hover {
    opacity: var(--opacity-on-hover);
  }
}

.menu .menu-panel {
  overflow-y: auto;
  color: RGB(var(--menu-text));
  background-color: var(--menu-background);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  padding: var(--space-4);
  width: var(--menu-width);
  max-width: 100vw;
  text-align: center;
}
</style>
