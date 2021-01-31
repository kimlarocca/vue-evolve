<template>
  <div class="image-with-caption">
    <a
      v-if="hasLink"
      :href="link"
      :aria-label="caption"
      class="image-with-caption-link"
    />
    <img
      :src="image"
      :alt="altText"
      class="image-with-caption-image"
    >
    <div
      v-if="hasCaption"
      class="image-with-caption-caption"
    >{{ caption }}
    </div>
    <div
      v-if="hasGradient"
      class="image-with-caption-gradient"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithCaption',
  props: {
    image: String,
    altText: String,
    caption: String,
    link: String,
    hasGradient: {
      default: true
    }
  },
  computed: {
    hasLink () {
      return !!this.$props.link
    },
    hasCaption () {
      return !!this.$props.caption
    }
  }
}
</script>

<style lang="scss">
.image-with-caption {
  position: relative;
  display: inline-block;
}

.image-with-caption-link,
.image-with-caption-link:visited,
.image-with-caption-link:active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
}

.image-with-caption-caption {
  position: absolute;
  color: var(--image-with-caption-text);
  z-index: 2;
  right: 1rem;
  bottom: 1rem;
}

.image-with-caption-gradient {
  background: var(--image-with-caption-gradient);
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  right: 0;
  left: 0;
  z-index: 1;
}
</style>
