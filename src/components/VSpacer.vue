<template>
  <div
    class="v-spacer"
    :class="spacingClass"
  ></div>
</template>

<script>
export default {
  name: 'VSpacer',
  props: {
    size: String
  },
  computed: {
    spacingClass () {
      if (this.$props.size) {
        return 'u-padding--' + this.size + '--top'
      } else {
        return 'u-padding--top'
      }
    }
  }
}
</script>

<style lang="scss">
.v-spacer {
  clear: both;
}
</style>
