<template>
  <div class="card">
    <div
      v-if="title"
      class="title u-padding"
    >
      {{ title }}
    </div>
    <a
      v-if="link"
      :href="link"
      :aria-label="title"
    />
    <img
      v-if="image"
      :src="image"
      :alt="altText"
    />
    <div v-if="video">
      <media-block :url="video" />
    </div>
    <div class="content u-padding">
      <i
        v-if="icon"
        :class="icon"
        class="icon"
      />
      <div
        v-if="subtitle"
        class="subtitle u-space--bottom"
      >
        {{ subtitle }}
      </div>
      <div
        v-if="description"
        class="description"
      >
        {{ description }}
      </div>
      <template v-if="hasTextLink">
        <div class="cta u-space--top">
          {{ cta }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MediaBlock from './MediaBlock'

export default {
  name: 'Card',
  components: {
    'media-block': MediaBlock
  },
  props: {
    title: String,
    video: String,
    image: String,
    altText: String,
    subtitle: String,
    description: String,
    cta: {
      type: String,
      default: 'Learn More'
    },
    icon: {
      type: String,
      default: null
    },
    link: String,
    hasTextLink: {
      default: false
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.card {
  width: 100%;
  height: 100%;
  opacity: 1;
  background: var(--card-background);
  transition: var(--transition);
  position: relative;

  &:hover {
    opacity: var(--opacity-on-hover);
    cursor: pointer;
  }

  .title {
    background: var(--card-header-background);
    font-weight: 700;
  }

  img {
    top: 0;
    left: 0;
  }

  .content {

    .icon {
      margin: var(--space-2) 0 var(--space-3);
    }

    .subtitle {
      font-weight: 700;
    }

    .cta {
      color: var(--card-color-link);
    }
  }
}
</style>
