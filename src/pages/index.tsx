import HeroComponent from '~/components/hero';

export default () => {
  const title = process.env.APP_NAME || 'Nuxt TSX Starter';

  return (
    <v-container>
      <v-row>
        <v-col>
          <HeroComponent
            title={title}
            subtitle="Starter project showing how to use JSX with Typescript and Nuxt.js"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Uses Typescript</v-card-title>
            <v-card-subtitle>
              Nuxt.js comes w/ native support for Typescript
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Uses JSX</v-card-title>
            <v-card-subtitle>
              This project uses{' '}
              <a
                href="https://github.com/nuxt-community/nuxt-property-decorator"
                target="_blank"
              >
                nuxt-property-decorator
              </a>{' '}
              and{' '}
              <a href="https://github.com/vuejs/jsx" target="_blank">
                @vue/babel-preset-jsx
              </a>{' '}
              to allow you to write components using JSX instead of a separate{' '}
              {'<template>'} block
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>Uses Vuetify</v-card-title>
            <v-card-subtitle>
              This project also uses{' '}
              <a href="https://vuetifyjs.com/" target="_blank">
                Vuetify
              </a>{' '}
              for easy styling.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  );
};
