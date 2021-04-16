import { Component, Prop, Vue } from 'vue-property-decorator';

export interface RenderedError {
  statusCode: number;
  message?: string;
}

@Component
export default class ErrorLayout extends Vue {
  @Prop({
    type: Object,
    required: false
  })
  error?: RenderedError;

  render() {
    const theme = this.$vuetify.theme.currentTheme;
    const error = this.error?.statusCode === 404
      ? '404 Not Found'
      : this.error?.message
        ? this.error.message
        : 'An error occurred';

    return (
      <v-app style={{ background: theme.background }}>
        <v-main>
          <v-container>
            <v-card outlined>
              <v-card-title>{error}</v-card-title>
            </v-card>
          </v-container>
        </v-main>
      </v-app>
    );
  }
}
