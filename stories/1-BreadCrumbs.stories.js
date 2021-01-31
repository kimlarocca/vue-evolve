import BreadCrumbs from '../src/components/BreadCrumbs'

export default {
  title: 'Components/Bread Crumbs'
}

export const Standard = () => ({
  components: { BreadCrumbs },
  template: `
    <bread-crumbs
      :crumbs="
        [
          {name: 'Home', link: 'http://www.google.com'},
          {name: 'Resources', link: 'http://www.yahoo.com'},
          {name: 'No Link On This One'}
        ]
      "
    />
  `
})
