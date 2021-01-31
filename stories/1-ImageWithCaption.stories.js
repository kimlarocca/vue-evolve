import ImageWithCaption from '../src/components/ImageWithCaption'

export default {
  title: 'Components/Image With Caption'
}

export const WithGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <image-with-caption
      image="./assets/Placeholder-Image-4_3.png"
      altText="lorem ipsum dolor"
      caption="by john doe"
      link="http://www.bing.com"
    />
  `
})

export const WithoutGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <image-with-caption
      image="./assets/Placeholder-Image-4_3.png"
      altText="lorem ipsum dolor"
      caption="by john doe"
      link="http://www.bing.com"
      :hasGradient="false"
    />
  `
})

export const WithoutALink = () => ({
  components: { ImageWithCaption },
  template: `
    <image-with-caption
      image="./assets/Placeholder-Image-4_3.png"
      altText="lorem ipsum dolor"
      caption="by john doe"
    />
  `
})
