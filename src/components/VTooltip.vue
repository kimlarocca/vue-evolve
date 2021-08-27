<template>
  <div class="tooltip" ref="tooltip">
    {{ position }}
    <div
      ref="tooltip-content"
      class="tooltip-content"
      :class="position"
    >
      <p class="tooltip-text" role="tooltip">
        {{ text }}
      </p>
      <p class="tooltip-link">
        <a
          v-if="link"
          :href="link"
        >
          Learn More
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTooltip',
  props: {
    link: {
      type: String
    },
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      position: ''
    }
  },
  mounted () {
    this.handleTooltipPosition()
  },
  methods : {
    handleTooltipPosition() {
      let tooltip = this.$refs['tooltip']
      const tooltipRect = tooltip.getBoundingClientRect()
      let tooltipContent = this.$refs['tooltip-content']
      const tooltipContentRect = tooltipContent.getBoundingClientRect()
      const totalHeight = tooltipRect.height + tooltipContentRect.height
      let totalWidth = tooltipRect.width
      if (tooltipContentRect.width > totalWidth) {
        totalWidth = tooltipContentRect.width
      }
      if ((totalHeight / 2) > 0) {
        this.position = 'above'
      }
      if ((totalHeight / 2) > tooltipContentRect.y) {
        this.position = 'below'
      }
      if (tooltipContentRect.x < 0) {
        this.position += ' right'
      }
      if ((tooltipContentRect.x + totalWidth) > window.outerWidth) {
        this.position += ' left'
      }
      // still need to get just left or just right
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  --tooltip-width: 300px;
  --tooltip-margin: var(--space-3);
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover .tooltip-content {
    opacity: 1;
  }

  .tooltip-content {
    color: var(--color-text);
    text-align: left;
    font-size: var(--font-size-4);
    width: var(--tooltip-width);
    left: 50%;
    margin-left: calc((var(--tooltip-width) / 2) * -1);
    opacity: 0;
    transition: opacity var(--transition);
    position: absolute;
    z-index: 1;
    background-color: var(--color-white);
    padding: var(--space-3);
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .tooltip-content.left {
    bottom: calc(-250% + var(--tooltip-margin));
    left: calc(-150% - var(--tooltip-margin));
  }

  .tooltip-content.right {
    bottom: calc(-250% + var(--tooltip-margin));
    left: calc(250% + var(--tooltip-margin));
  }

  .tooltip-content.above {
    top: auto;
    bottom: calc(100% + var(--tooltip-margin));
  }

  .tooltip-content.below {
    bottom: auto;
    top: calc(100% + var(--tooltip-margin));
  }

  .tooltip-link {
    margin-top: var(--space-2);
  }

  .tooltip-text::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
  }
}
</style>
