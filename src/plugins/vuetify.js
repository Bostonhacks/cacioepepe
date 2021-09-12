import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#EC602D",
        background: "#FFF0C8"
      },
      dark: {
        green: "#006525",
        primary: "#fe745f",
        yellow: "#9f8326",
        red: "#a1201a",
        lightBlue: "#00398f",
        blue: "#00115c",
        darkBlue: "#7899ff",
        tan: "#93786d",
        brown: "#532b10",
        aqua: "#004c41"
      }
    }
  }
});
