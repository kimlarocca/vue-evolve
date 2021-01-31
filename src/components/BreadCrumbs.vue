<template>
  <section class="breadcrumbs">
    <ul class="breadcrumbs-list">
      <li
        :key="index"
        v-for="(crumb, index) in crumbs"
        class="breadcrumbs-list-item"
      >
        <a
          v-if="hasLink(crumb)"
          :href="crumb.link"
          class="breadcrumbs-list-item-link"
        >{{ crumb.name }}</a>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    crumbs: Array
  },
  methods: {
    hasLink (crumb) {
      return !!crumb.link
    }
  }
}
</script>

<style lang="scss">
.breadcrumbs-list-item-link,
.breadcrumbs-list-item-link:visited,
.breadcrumbs-list-item-link:active {
  color: var(--breadcrumbs-link-color);
  text-decoration: none;

  &:hover {
    color: var(--breadcrumbs-link-color-hover);
  }
}

.breadcrumbs-list {
  list-style: none;
}

.breadcrumbs-list-item {
  display: inline;
  margin-right: var(--breadcrumbs-spacing);
  color: var(--breadcrumbs-text);

  &:after {
    margin-left: var(--breadcrumbs-spacing);
    content: var(--breadcrumbs-seperator);
    color: var(--breadcrumbs-seperator-color);
  }

  &:last-of-type {
    &:after {
      content: '';
    }
  }
}
</style>
