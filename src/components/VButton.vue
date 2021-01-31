<template>
  <a
    class="button"
    role="button"
    tabindex="0"
    :href="href"
    @click="$emit('click', $event);"
  >
    <slot>button</slot>
    <i
      v-if="hasIcon"
      class="button-icon"
      :class="icon"
    />
  </a>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    icon: String,
    href: String
  },
  computed: {
    hasIcon () {
      return !!this.$props.icon
    }
  }
}
</script>

<style lang="scss">
.button,
.button:visited,
.button:focus,
.button:active {
  cursor: pointer;
  display: inline-block;
  background: var(--button-background);
  color: var(--button-text);
  border: var(--button-border);
  text-transform: var(--button-text-transform);
  font-weight: var(--button-font-weight);
  font-size: var(--button-font-size);
  padding: var(--button-padding);
  transition: var(--transition);
  opacity: 1;

  &:hover {
    background: var(--button-background-hover);
    border: var(--button-border-hover);
    color: var(--button-text-hover);
    opacity: var(--opacity-on-hover);
  }
}

.button-icon {
  margin-left: 0.5rem;
}
</style>
