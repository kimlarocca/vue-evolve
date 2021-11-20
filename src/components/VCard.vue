<template>
  <div class="card">
    <div
      v-if="tag"
      class="card-tag"
    >
      {{ tag }}
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
      loading="lazy"
    />
    <template v-if="video">
      <media-block :url="video" />
    </template>
    <i
      v-if="icon"
      :class="icon"
      class="card-icon"
    />
    <div
      v-if="title"
      class="card-title"
    >
      {{ title }}
    </div>
    <div
      v-if="subtitle"
      class="card-subtitle"
    >
      {{ subtitle }}
    </div>
    <div
      v-if="description"
      class="card-description"
      v-html="description"
    />
    <template v-if="hasTextLink">
      <div class="card-cta">
        {{ cta }}
      </div>
    </template>
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
    title: {
      type: String,
      default: null
    },
    video: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    altText: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    cta: {
      type: String,
      default: 'Learn More'
    },
    icon: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    hasTextLink: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  position: relative;
  color: var(--card-color-text);
  background: var(--card-background);
  opacity: 1;
  transition: var(--transition);
  padding: var(--space-4) var(--space-6);

  &:hover {
    opacity: var(--opacity-on-hover);
    cursor: pointer;
  }
}

.card-tag {
  background: var(--card-background);
  width: fit-content;
  margin-bottom: var(--space-2);
}

.card-link {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.card-icon {
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--font-size-8);
  line-height:  var(--font-size-8);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.card-image {
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  margin-bottom: var(--space-4);
}

.card .media-block {
  margin-bottom: var(--space-4);
}

.card-subtitle {
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.card-description {
  margin-bottom: var(--space-2);
}

.card-cta {
  color: var(--card-color-link);
  margin-top: auto;
}
</style>
