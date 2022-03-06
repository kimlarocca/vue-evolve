import VTag from '../src/components/VTag'

export default {
  title: 'Components/Tag'
}

export const Standard = () => ({
  components: { VTag },
  template: `
    <div><v-tag name="news" slug="news" /><v-tag name="food" slug="food" /><v-tag name="technology" slug="technology" /><v-tag name="no slug" /></div>
  `
})
