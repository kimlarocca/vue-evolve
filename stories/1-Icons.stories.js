import VIcons from '../src/components/VIcons'
import VIconsItem from '../src/components/VIconsItem'

export default {
  title: 'Components/Icons'
}

export const Standard = () => ({
  components: { VIconsItem },
  template: `
    <v-icons-item
      icon="fab fa-facebook-f"
      label="facebook"
    />
  `
})

export const WithALink = () => ({
  components: { VIconsItem },
  template: `
    <v-icons-item
      icon="fab fa-facebook-f"
      link="https://www.facebook.com"
      label="facebook"
    />
  `
})

export const OpensANewWindow = () => ({
  components: { VIconsItem },
  template: `
    <v-icons-item
      icon="fab fa-facebook-f"
      link="https://www.facebook.com"
      label="facebook"
      :new-window="true"
    />
  `
})

export const GroupsOfIcons = () => ({
  components: { VIcons, VIconsItem },
  template: `
    <v-icons>
      <v-icons-item
        icon="fab fa-facebook-f"
        link="https://www.facebook.com"
        label="facebook"
      />
      <v-icons-item
        icon="fab fa-twitter"
        link="https://www.twitter.com"
        label="twitter"
      />
      <v-icons-item
        icon="fab fa-youtube"
        link="https://www.youtube.com"
        label="youtube"
      />
      <v-icons-item
        icon="fab fa-instagram"
        link="https://www.instagram.com"
        label="instagram"
      />
      <v-icons-item
        icon="fab fa-linkedin-in"
        link="https://www.linkedin.com"
        label="linkedin"
      />
    </v-icons>
  `
})
