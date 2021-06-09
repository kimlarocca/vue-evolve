import SearchSelect from '../src/components/SearchSelect'

export default {
  title: 'Components/Search Select'
}

export const Standard = () => ({
  components: { SearchSelect },
  template: `
    <search-select
      :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}, { id: 2, name: 'Option 3'}, { id: 2, name: 'Option 4'}, { id: 2, name: 'Option 5'}, { id: 2, name: 'Option 6'}, { id: 2, name: 'Option 7'}, { id: 2, name: 'Option 8'}]"
      :disabled="false"
      name="select"
      :max-items="1000"
      placeholder="select an option"
      @selected="doSomething"
    />
  `
})
