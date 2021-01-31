<template>
  <div>
    <ul
        class="secondary-navigation"
        :class="orientation"
    >
      <li
          v-for="(item, index) in navItems"
          :key="index"
          class="secondary-navigation-item"
      >
        <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="secondary-navigation-item-link"
        >
          {{ item.text }}
        </a>
        <router-link
            v-else
            :to="item.route"
            class="secondary-navigation-item-link"
        >
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SecondaryNavigation',
  props: {
    navItems: {
      type: Array,
      default: null
    },
    orientation: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>

<style lang="scss">
.secondary-navigation {
  list-style: none;
}

.secondary-navigation-item {
  margin-bottom: var(--space-2);
}

.secondary-navigation.horizontal .secondary-navigation-item {
  display: inline-block;
}

.secondary-navigation.horizontal .secondary-navigation-item:not(:last-child) {
  margin-right: var(--space-5);
}
</style>
