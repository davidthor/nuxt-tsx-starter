import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '~/vue-component';

interface HeroProps {
  title: string;
  subtitle?: string;
}

@Component
export default class HeroComponent extends VueComponent<HeroProps> {
  @Prop({ required: true })
  title!: string;

  @Prop()
  subtitle?: string;

  render() {
    return <v-card>
      <v-card-title>{this.title}</v-card-title>
      <v-card-subtitle>{this.subtitle}</v-card-subtitle>
      <v-card-text>
        {this.$slots.default}
      </v-card-text>
    </v-card>
  }
}
