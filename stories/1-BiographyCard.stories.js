import BiographyCard from '../src/components/BiographyCard'

export default {
  title: 'Components/Biography Card'
}

export const VerticalLayout = () => ({
  components: { BiographyCard },
  template: `
    <biography-card
      image="https://via.placeholder.com/300x300?text=1:1"
      altText="alternative text"
      name="John Doe 1"
      title="President, Google.com, Seattle"
      link="http://www.google.com"
      layout="vertical"
      hasTextLink
      cta="Learn More"
    >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
      dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
      Enim facilis ipsum odio praesentium quis.
    </p>
    </biography-card>
  `
})

export const HorizontalLayout = () => ({
  components: { BiographyCard },
  template: `
    <biography-card
      image="https://via.placeholder.com/300x300?text=1:1"
      altText="alternative text"
      name="John Doe 1"
      title="President, Google.com, Seattle"
      link="http://www.google.com"
      layout="horizontal"
      hasTextLink
      cta="Learn more about John"
    >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
      dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
      Enim facilis ipsum odio praesentium quis.
    </p>
    </biography-card>
  `
})

export const InAGrid = () => ({
  components: { BiographyCard },
  template: `
    <div class="l-grid l-grid--3up">
    <biography-card
      image="https://via.placeholder.com/300x300?text=1:1"
      altText="alternative text"
      name="John Doe 1"
      title="President, Google.com, Seattle"
      link="http://www.google.com"
      layout="vertical"
      hasTextLink
      cta="Learn More"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
        dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
        Enim facilis ipsum odio praesentium quis.
      </p>
    </biography-card>
    <biography-card
      image="https://via.placeholder.com/300x300?text=1:1"
      altText="alternative text"
      name="John Doe 1"
      title="President, Google.com, Seattle"
      link="http://www.google.com"
      layout="vertical"
      hasTextLink
      cta="Learn More"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
        dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
        Enim facilis ipsum odio praesentium quis.
      </p>
    </biography-card>
    <biography-card
      image="https://via.placeholder.com/300x300?text=1:1"
      altText="alternative text"
      name="John Doe 1"
      title="President, Google.com, Seattle"
      link="http://www.google.com"
      layout="vertical"
      hasTextLink
      cta="Learn More"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
        dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
        Enim facilis ipsum odio praesentium quis.
      </p>
    </biography-card>
    </div>
  `
})
