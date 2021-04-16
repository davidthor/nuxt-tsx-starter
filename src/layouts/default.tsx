import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {
  drawer: boolean = true;

  render() {
    const theme = this.$vuetify.theme.currentTheme;
    const avatars = [...Array(6).keys()];

    return (
      <v-app
        id="inspire"
        style={theme.background ? { background: theme.background } : {}}
      >
        <v-navigation-drawer
          vModel={this.drawer}
          app
          class="pt-4"
          color="primary"
          mini-variant
        >
          {avatars.map((n) => (
            <v-avatar
              color={`primary ${n === 0 ? 'darken' : 'lighten'}-2`}
              size={n === 0 ? 36 : 20}
              class="d-block text-center mx-auto mb-9"
            />
          ))}
        </v-navigation-drawer>

        <v-main>
          <nuxt />

          <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
            <v-btn
              href="https://github.com/davidthor/nuxt-tsx-starter"
              target="_blank"
              elevation="2"
              color="primary"
              fab
              large
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-main>
      </v-app>
    );
  }
}
