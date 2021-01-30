# Vue Evolve

Vue Evolve is a design system built with Storybook and Vue.

## Project Setup

If vue isn’t installed, run

```
npm install -g @vue/cli
```

Then

```
npm install
```

#### Launches Storybook
```
npm run storybook
```

#### Builds Storybook

```
npm run build-storybook
```

#### Deploys Storybook To Github Pages

```
git subtree push --prefix storybook-static origin gh-pages
```

In a few minutes, Github Pages should refresh with your newest repository changes. Visit [https://kimlarocca.github.io/vue-evolve](https://kimlarocca.github.io/vue-evolve) to view Storybook!

#### Runs unit tests

```
npm run test
```

#### Lints and fixes files

```
npm run lint
```

### Local Development

Create a global symlink for this package:

```
npm link (or sudo npm link)
```

Tell your application to use the global symlink:

```
npm link vue-evolve
```

Refresh your application after changes:

```
npm update
```

Unlink it:

```
npm unlink
```

### Nuxt configuration

Add this to your nuxt.config.js file to import components for use with SSR:

```
build: {
  transpile: ['vue-evolve']
}
```
