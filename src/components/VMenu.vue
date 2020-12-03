<template>
  <div
    class="menu"
    :class="layout"
  >
    <div
      class="menu-hamburger"
      @click="toggleMenu"
    >
      <i class="fas fa-bars" />
    </div>
    <transition :name="transitionName">
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
    },
    layout: {
      type: String,
      default: 'left'
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
    },
    transitionName () {
      if (this.layout === 'right') return 'slide-left'
      return 'slide-right'
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
  cursor: pointer;
  font-size: 30px;
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
  top: 0;
  height: 100vh;
  z-index: 9999;
  padding: var(--space-4);
  width: var(--menu-width);
  max-width: 100vw;
  text-align: center;
}

.menu.left .menu-panel {
  left: 0;
}

.menu.right .menu-panel {
  right: 0;
}
</style>
