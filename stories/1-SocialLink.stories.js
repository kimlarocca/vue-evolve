import SocialLink from '../src/components/SocialLink'

export default {
  title: 'Components/Social Link'
}

export const Standard = () => ({
  components: { SocialLink },
  template: `
    <div class="sbdocs-large-container">
      <ul class="social-links">
        <social-link
          icon="fab fa-facebook-f"
          link="https://www.facebook.com"
          label="facebook">
        </social-link>
        <social-link
          icon="fab fa-twitter"
          link="https://www.twitter.com"
          label="twitter"
        >
        </social-link>
        <social-link
          icon="fab fa-youtube"
          link="https://www.youtube.com"
          label="youtube"
        >
        </social-link>
        <social-link
          icon="fab fa-instagram"
          link="https://www.instagram.com"
          label="instagram"
        >
        </social-link>
        <social-link
          icon="fab fa-linkedin-in"
          link="https://www.linkedin.com"
          label="linkedin"
        >
        </social-link>
      </ul>
    </div>
  `
})
