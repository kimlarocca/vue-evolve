import Card from '../src/components/Card'

export default {
  title: 'Components/Card'
}

export const WithAnImage = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        title="Title"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-4_3.png"
        altText="alternative text"
        subtitle="subtitle"
        :hasTextLink="true"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      >
      </card>
    </div>
  `
})

export const WithAVideo = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        title="Title"
        link="http://www.google.com"
        video="https://player.vimeo.com/video/90283590"
        altText="alternative text"
        subtitle="subtitle"
        :hasTextLink="true"
        cta="Click Here"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      >
      </card>
    </div>
  `
})

export const WithAnIcon = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        icon="fas fa-heart"
        link="http://www.google.com"
        subtitle="subtitle"
        :hasTextLink="true"
        cta="Click Here"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      >
      </card>
    </div>
  `
})

export const WithoutTextLink = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        icon="fas fa-heart"
        link="http://www.google.com"
        title="Title"
        video="https://player.vimeo.com/video/90283590"
        altText="alternative text"
        subtitle="subtitle"
        cta="Click Here"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      >
      </card>
    </div>
  `
})
