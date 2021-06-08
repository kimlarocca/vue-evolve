import SecondaryNavigation from '../src/components/SecondaryNavigation'

export default {
  title: 'Components/Secondary Navigation'
}

export const Vertical = () => ({
  components: { SecondaryNavigation },
  template: `
    <secondary-navigation
      :nav-items="
        [
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 1',
          },
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 2',
          },
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 3',
          }
        ]
    "
    />
  `
})

export const Horizontal = () => ({
  components: { SecondaryNavigation },
  template: `
    <secondary-navigation
      orientation="horizontal"
      :nav-items="
        [
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 1',
          },
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 2',
          },
          {
            url: 'http://www.google.com',
            text: 'Secondary Link 3',
          }
        ]
      "
    />
  `
})

export const RouterLinks = () => ({
  components: { SecondaryNavigation },
  template: `
    <secondary-navigation
      orientation="horizontal"
      :nav-items="
        [
          {
            route: 'about',
            text: 'Secondary Link 1'
          },
          {
            route: 'about2',
            text: 'Secondary Link 2'
          },
          {
            route: 'about3',
            text: 'Secondary Link 3'
          }
        ]
      "
    />
  `
})

export const NuxtLinks = () => ({
  components: { SecondaryNavigation },
  template: `
    <secondary-navigation
      orientation="horizontal"
      :nav-items="
        [
          {
            route: 'about',
            text: 'Secondary Link 1',
            type: 'nuxt'
          },
          {
            route: 'about2',
            text: 'Secondary Link 2',
            type: 'nuxt'
          },
          {
            route: 'about3',
            text: 'Secondary Link 3',
            type: 'nuxt'
          }
        ]
      "
    />
  `
})
