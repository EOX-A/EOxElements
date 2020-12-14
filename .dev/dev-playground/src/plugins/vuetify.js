import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const mq = window.matchMedia('(prefers-color-scheme: dark)');

const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: mq.matches,
    themes: {
      light: {
        primary: '#004170',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#004170',
        secondary: '#424242',
        accent: '#FFC107',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});

try {
  // Chrome & Firefox
  mq.addEventListener('change', (e) => {
    vuetify.framework.theme.dark = e.matches;
  });
} catch (e1) {
  try {
    // Safari
    mq.addListener((e) => {
      vuetify.framework.theme.dark = e.matches;
    });
  } catch (e2) {
    console.error(e2);
  }
}
export default vuetify;