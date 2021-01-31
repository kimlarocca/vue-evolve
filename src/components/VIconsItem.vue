<template>
  <li class="icon-links-item">
    <a
      v-if="link"
      :href="link"
      :aria-label="label"
      :target="newWindow && '_blank'"
    >
      <i :class="icon" />
    </a>
    <i v-else :class="icon" />
  </li>
</template>

<script>
export default {
  name: 'IconLinksItem',
  props: {
    icon: String,
    link: String,
    label: String,
    newWindow: String
  }
}
</script>

<style lang="scss">
.icon-links-item {
  display: inline-block;
  margin-right: 1rem;

  a,
  a:visited,
  a:active {
    color: var(--icon-color);
    background: var(--icon-background-color);
    height: var(--icon-size);
    display: inline-block;
    font-size: var(--icon-size);
    transition: var(--transition);
    opacity: 1;

    &:hover {
      color: var(--icon-color-hover);
      background: var(--icon-background-color-hover);
      opacity: var(--opacity-on-hover);
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
