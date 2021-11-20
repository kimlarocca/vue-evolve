import VCard from '../src/components/VCard'

export default {
  title: 'Components/Card'
}

export const WithAnImage = () => ({
  components: { VCard },
  template: `
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      image="https://via.placeholder.com/800x600?text=4:3"
      altText="alternative text"
      subtitle="subtitle"
      :hasTextLink="true"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  `
})

export const WithAVideo = () => ({
  components: { VCard },
  template: `
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      video="https://player.vimeo.com/video/90283590"
      altText="alternative text"
      subtitle="subtitle"
      :hasTextLink="true"
      cta="Click Here"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  `
})

export const WithAnIcon = () => ({
  components: { VCard },
  template: `
    <v-card
      tag="News"
      icon="fas fa-heart"
      link="http://www.google.com"
      subtitle="subtitle"
      :hasTextLink="true"
      cta="Click Here"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  `
})

export const WithoutTextLink = () => ({
  components: { VCard },
  template: `
    <v-card
      tag="News"
      icon="fas fa-heart"
      link="http://www.google.com"
      title="Title"
      video="https://player.vimeo.com/video/90283590"
      altText="alternative text"
      subtitle="subtitle"
      cta="Click Here"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  `
})

export const WithoutImageOrVideo = () => ({
  components: { VCard },
  template: `
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      subtitle="subtitle"
      :hasTextLink="true"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
  `
})

export const InAGrid = () => ({
  components: { VCard },
  template: `
    <div class="l-grid l-grid--3up">
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      image="https://via.placeholder.com/800x600?text=4:3"
      altText="alternative text"
      subtitle="subtitle"
      :hasTextLink="true"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      image="https://via.placeholder.com/800x600?text=4:3"
      altText="alternative text"
      subtitle="subtitle"
      :hasTextLink="true"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
    <v-card
      tag="News"
      title="Title"
      link="http://www.google.com"
      image="https://via.placeholder.com/800x600?text=4:3"
      altText="alternative text"
      subtitle="subtitle"
      :hasTextLink="true"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
    />
    </div>
  `
})
