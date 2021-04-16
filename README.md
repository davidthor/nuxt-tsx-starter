# Nuxt.js TSX starter project

I love Nuxt and Vue for heavy web applications, but have recently grown to love React in large part due to JSX. I wanted to setup a way for me to get the SSR support I love from Nuxt while writing templates using JSX, and found that can be done through a combination of [first class support from Vue](https://vuejs.org/v2/guide/render-function.html#JSX) and [some clever babel presents](https://github.com/vuejs/jsx)! The usage of JSX allows me to further benefit from Typescript and type checking inside my template logic to let me develop faster and make better use of my IDE.

I've put together this project to help myself and others setup new web application projects easily. Enjoy!

## Getting started

All the regular npm commands that come with the Nuxt starter project are available for use, but I like to debug in more production-ready environments to ensure that my projects can be promoted to production more quickly. To accomplish this, I use [Docker](https://www.docker.com/) and [Architect](http://docs.architect.io/), which allows me to start my application with the following command:

```sh
$ architect deploy --local ./architect.yml -i app:app
# Application now available at http://app.arc.localhost/
```

Once I'm ready to go live, all I have to do is register my environment with Architect and run the same deploy command:

```sh
# Push the code to the registry
$ architect register ./architect.yml --tag latest

# Create my environment
$ architect platform:create --type "kubernetes" --account "<my-account>" my-platform
$ architect environment:create --account "<my-account>" --platform "my-platform" production

# Deploy
$ architect deploy --account "<my-account>" --environment "production" davidthor/nuxt-tsx-starter:latest
```
