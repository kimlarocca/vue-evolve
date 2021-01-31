<template>
  <div
    v-if="active"
    class="callout-banner"
    :class="{'callout-banner-active': active}"
  >
    <div
      class="callout-banner-close"
      @click="active=false"
    >
      <i class="fas fa-times" />
    </div>
    <div class="callout-banner-message">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalloutBanner',
  data () {
    return {
      active: true
    }
  }
}
</script>

<style lang="scss">
.callout-banner {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--callout-banner-text);
  background-color: var(--callout-banner-background-color);
  align-items: center;
  padding: var(--space-5);
}

.callout-banner-close {
  position: absolute;
  cursor: pointer;
  top: var(--space-2);
  right: var(--space-2);
  font-size: 25px;
  transition: var(--transition);

  &:hover {
    opacity: var(--opacity-on-hover);
  }
}
</style>
