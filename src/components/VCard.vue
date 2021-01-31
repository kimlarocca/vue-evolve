<template>
  <div class="card">
    <div
      v-if="title"
      class="card-title u-padding"
    >
      {{ title }}
    </div>
    <a
      v-if="link"
      :href="link"
      :aria-label="title"
      class="card-link"
    />
    <img
      v-if="image"
      :src="image"
      :alt="altText"
      class="card-image"
    />
    <div v-if="video">
      <media-block :url="video" />
    </div>
    <div class="card-content u-padding">
      <i
        v-if="icon"
        :class="icon"
        class="card-icon"
      />
      <div
        v-if="subtitle"
        class="card-subtitle u-space--bottom"
      >
        {{ subtitle }}
      </div>
      <div
        v-if="description"
        class="card-description"
      >
        {{ description }}
      </div>
      <template v-if="hasTextLink">
        <div class="card-cta u-space--top">
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

<style lang="scss">
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
}

.card-link {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.card-title {
  color: var(--card-header-text);
  background: var(--card-header-background);
  font-weight: 700;
}

.card-image {
  top: 0;
  left: 0;
}

.card-icon {
  margin: var(--space-2) 0 var(--space-3);
}

.card-subtitle {
  font-weight: 700;
}

.card-cta {
  color: var(--card-color-link);
}
</style>
