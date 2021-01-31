import ContentCard from '../src/components/ContentCard'

export default {
  title: 'Components/Content Card'
}

export const MediaOnLeft = () => ({
  components: { ContentCard },
  template: `
    <content-card
      pretitle="pretitle"
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      image="./assets/Placeholder-Image-4_3.png"
      altText="alt text"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const MediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <content-card
      pretitle="pretitle"
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      video="https://player.vimeo.com/video/90283590"
      alignment="right"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const MiddleAlignment = () => ({
  components: { ContentCard },
  template: `
    <content-card
      pretitle="pretitle"
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      image="./assets/Placeholder-Image-4_3.png"
      altText="alt text"
      verticalAlignment="middle"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const TwoThirdsLayout = () => ({
  components: { ContentCard },
  template: `
    <content-card
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      image="./assets/Placeholder-Image-4_3.png"
      layout="2x3"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const TwoThirdsWithMediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <content-card
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      image="./assets/Placeholder-Image-4_3.png"
      layout="2x3"
      alignment="right"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const OneQuarterLayout = () => ({
  components: { ContentCard },
  template: `
    <content-card
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      image="./assets/Placeholder-Image-4_3.png"
      layout="1x4"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})

export const OneQuarterWithMediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <content-card
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      image="./assets/Placeholder-Image-4_3.png"
      layout="1x4"
      alignment="right"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
         dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
         Enim facilis ipsum odio praesentium quis.</p>
    </content-card>
  `
})
