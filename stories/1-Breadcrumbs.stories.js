import Breadcrumbs from '../src/components/Breadcrumbs'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs
}

export const Standard = () => ({
  components: { Breadcrumbs },
  template: `
    <div class="sbdocs-large-container">
      <breadcrumbs
        :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
      >
      </breadcrumbs>
    </div>
  `
})
