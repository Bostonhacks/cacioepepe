import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        green: {
          base: "#53d186",
          darken1: "#4bbc79"
        },
        yellow: {
          base: "#f6d374"
        },
        red: {
          base: "#fe745f"
        },
        blue: {
          base: "#aee2ff",
          darken1: "#80D2FF"
        }
      }
    }
  }
});
