<template>
  <div class="tag" :class="name">
    <nuxt-link v-if="slug" :to="slug">{{ name }}</nuxt-link>
    <span v-else>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'VTag',
  props: {
    slug: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.tag {
  display: inline;
  margin: 0 var(--space-2) var(--space-2) 0;
  font-weight: bold;
  text-transform: uppercase;
  font-size: var(--font-size-2);
  letter-spacing: 1.1px;
  line-height: var(--font-size-2);
  a,
  a:visited,
  a:active {
    background: var(--color-tag-background);
    color: var(--color-tag-text);
    border-radius: 12px;
    padding: var(--space-1) var(--space-3);
    transition: var(--transition);
    opacity: 1;
    &:hover {
      opacity: var(--opacity-on-hover);
      text-decoration: none;
    }
  }
  span {
    background: var(--color-tag-background);
    color: var(--color-tag-text);
    border-radius: 12px;
    padding: var(--space-1) var(--space-3);
  }
}
</style>
