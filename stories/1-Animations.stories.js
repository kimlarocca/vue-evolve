import VLoading from '../src/components/VLoading'

export default {
  title: 'Components/Animations'
}

export const LoadingIndicator = () => ({
  components: { VLoading },
  template: `
    <v-loading />
  `
})
