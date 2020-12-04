<template>
  <header
    class="header"
    :class="[layout, {'responsive': responsive}]"
  >
    <div class="left">
      <slot
        v-if="layout === 'left'"
        name="menu"
        :class="{'responsive': responsive}"
      />
      <slot name="logo" />
    </div>
    <div class="right">
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
      default: 'left'
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
$breakpoint: 1200px;

.header {
  display: flex;
  justify-content: space-between;
  z-index: 100;
}

.header .left,
.header .right {
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

.header .menu.responsive {
  @media all and (min-width: $breakpoint) {
    display: none;
  }
}

.header.responsive .header-secondary-navigation {
  display: none;
  @media all and (min-width: $breakpoint) {
    display: block;
  }
}
</style>
