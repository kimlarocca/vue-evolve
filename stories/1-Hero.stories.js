import VHero from '../src/components/VHero'

export default {
  title: 'Components/Hero'
}

export const Standard = () => ({
  components: { VHero },
  template: `
    <v-hero
        background="https://images.unsplash.com/photo-1644703203770-03fbf142031f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        title="You Are My Hero"
        body="Lorem ipsum dolor site amet, lorem ipsum dolor site amet"
        cta-link="contact"
    />
  `
})

export const NoImage = () => ({
  components: { VHero },
  template: `
    <v-hero
        title="You Are My Hero"
        body="Lorem ipsum dolor site amet, lorem ipsum dolor site amet"
        cta-link="contact"
    />
  `
})
