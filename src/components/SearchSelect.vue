<template>
  <div
    class="search-select"
    v-if="options"
  >

    <!-- Dropdown Input -->
    <input
      class="search-select-input"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :disabled="disabled"
      :placeholder="placeholder"
    />

    <!-- Dropdown Menu -->
    <div
      class="search-select-content"
      v-show="optionsShown"
    >
      <div
        class="search-select-item"
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index"
      >
        {{ option.name || option.id || '-' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  template: 'Dropdown',
  props: {
    name: {
      type: String,
      required: false,
      default: 'dropdown',
      note: 'Input name'
    },
    options: {
      type: Array,
      required: true,
      default: []
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Please select an option'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    maxItems: {
      type: Number,
      required: false,
      default: 6
    }
  },
  data () {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: ''
    }
  },
  created () {
    this.$emit('selected', this.selected);
  },
  computed: {
    filteredOptions () {
      const filtered = [];
      const regOption = new RegExp(this.searchFilter, 'ig');
      for (const option of this.options) {
        if (this.searchFilter.length < 1 || option.name.match(regOption)) {
          if (filtered.length < this.maxItems) filtered.push(option);
        }
      }
      return filtered;
    }
  },
  methods: {
    selectOption (option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected.name;
      this.$emit('selected', this.selected);
    },
    showOptions () {
      if (!this.disabled) {
        this.searchFilter = '';
        this.optionsShown = true;
      }
    },
    exit () {
      if (!this.selected.id) {
        this.selected = {};
        this.searchFilter = '';
      } else {
        this.searchFilter = this.selected.name;
      }
      this.$emit('selected', this.selected);
      this.optionsShown = false;
    },
    // Selecting when pressing Enter
    keyMonitor: function (event) {
      if (event.key === "Enter" && this.filteredOptions[0])
        this.selectOption(this.filteredOptions[0]);
    }
  },
  watch: {
    searchFilter () {
      if (this.filteredOptions.length === 0) {
        this.selected = {};
      } else {
        this.selected = this.filteredOptions[0];
      }
      this.$emit('filter', this.searchFilter);
    }
  }
};
</script>


<style lang="scss">
.form-element-styles {
  font-family: var(--forms-input-font-family);
  font-size: var(--forms-input-font-size);
  font-weight: normal;
  line-height: calc(var(--forms-input-height) / 2);
  color: var(--forms-input-color);
  max-width: 100%;
}

.search-select {
  position: relative;
  display: block;
  margin: auto;

  .search-select-input {
    @extend .form-element-styles;
    cursor: pointer;
    height: var(--forms-input-height);
    width: var(--forms-input-width);
    padding: var(--forms-input-padding);
    border: var(--forms-input-border);
    display: block;

    &::placeholder {
      @extend .form-element-styles;
    }

    &:focus {
      outline: var(--forms-input-outline-color);
      border: none;
      outline-offset: -1px;
    }
  }

  .search-select-content {
    position: absolute;
    background-color: #fff;
    width: var(--forms-input-width);
    max-width: 100%;
    max-height: 248px;
    border: var(--forms-input-border);
    box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
    overflow: auto;
    z-index: 1;

    .search-select-item {
      @extend .form-element-styles;
      padding: var(--space-2);
      text-decoration: none;
      display: block;
      cursor: pointer;

      &:hover {
        background-color: var(--color-light-gray);
      }
    }
  }

  .search-select:hover .search-select-content {
    display: block;
  }
}
</style>
