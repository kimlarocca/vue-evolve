<template>
  <header
    class="header l-container"
    :class="[layout, {'responsive': responsive}]"
  >
    <div class="header-left">
      <slot
        name="menu"
        v-if="layout === 'left'"
        :class="{'responsive': responsive}"
      />
      <slot name="logo" />
    </div>
    <div class="header-right">
      <div class="header-secondary-navigation">
        <slot name="navigation" />
      </div>
      <slot name="button" />
      <slot
        v-if="layout === 'right'"
        name="menu"
        :class="{'responsive': responsive}"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader',
  props: {
    layout: {
      type: String,
      default: 'left'
    },
    responsive: {
      type: String,
      default: false
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background: var(--header-background);
  color: var(--header-color);
}

.header .secondary-navigation a,
.header .secondary-navigation a:visited,
.header .secondary-navigation a:active {
  color: var(--header-link-color);

  &:hover {
    color: var(--header-link-color-hover);
    opacity: var(--opacity-on-hover);
  }
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
}

.header .button {
  margin-left: var(--space-4);
}

.header.left .menu {
  margin-right: var(--space-4);
}

.header.right .menu {
  margin-left: var(--space-4);
}

.header.responsive .menu {
  @media all and (min-width: 1200px) {
    display: none;
  }
}

.header.responsive .header-secondary-navigation {
  display: none;
  @media all and (min-width: 1200px) {
    display: block;
  }
}

.header .secondary-navigation-item {
  margin-bottom: 0;
}
</style>
