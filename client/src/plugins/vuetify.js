import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    primary: 'rgb(25,25,112)',
    secondary: 'rgb(49,129,185)',
    accent: 'rbg(48,182,227)',
  },
});
