import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

let darkModeEnabled =
  window.matchMedia("(prefers-color-scheme: dark)").matches || false;

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", e => {
    // const newColorScheme = e.matches ? "dark" : "light";
    darkModeEnabled = e.matches || false;
  });

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: darkModeEnabled,
    themes: {
      light: {
        green: "#53d186",
        primary: "#fe745f",
        yellow: "#f6d374",
        red: "#fe745f",
        lightBlue: "#aee2ff",
        blue: "#80d2ff",
        darkBlue: "#0098FF",
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
