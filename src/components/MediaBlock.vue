<template>
  <div class="media-block">
    <iframe
      class="media-block-iframe"
      width="1240"
      height="700"
      :src="url"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'Template',
  props: {
    url: String
  }
}
</script>

<style lang="scss">
.media-block {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.media-block-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
