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
        green: "#4bbc79",
        primary: "#fe755f",
        yellow: "#f6d374",
        red: "#fe745f",
        lightBlue: "#aee2ff",
        blue: "#70D2FF",
        darkBlue: "#24b1ff",
        tan: "#e6c8bc",
        brown: "#683614",
        aqua: "#21998a"
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
