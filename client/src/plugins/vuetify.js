import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: 'rgb(79,65,159)',
        secondary: 'rgb(107,176,236)',
        accent: 'rbg(114,232,255)',
      },
      dark: {
        primary: 'rgb(0,0,68)',
        secondary: 'rgb(0,85,137)',
        accent: 'rgb(0,134,177)',
      }
    },
  },
});
