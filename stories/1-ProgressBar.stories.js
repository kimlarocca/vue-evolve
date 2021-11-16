import ProgressBar from '../src/components/ProgressBar'

export default {
  title: 'Components/Progress Bar'
}

export const Percent50 = () => ({
  components: { ProgressBar },
  template: '<progress-bar :percent="50" />'
})

export const Percent100 = () => ({
  components: { ProgressBar },
  template: '<progress-bar :percent="100" />'
})
