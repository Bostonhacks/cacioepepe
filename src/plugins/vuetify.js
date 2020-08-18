import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: colors.purple,
				secondary: colors.grey.darken1,
				accent: colors.shades.black,
				error: colors.red.accent3,
				green: {
					base: '#53d186',
					darken1: '#4bbc79',
				},
				yellow: {
					base: '#f6d374',
				},
				red: {
					base: '#fe745f',
				},
				blue: {
					base: '#aee2ff',
					darken1: '#80D2FF',
				},
			},
			dark: {
				primary: colors.blue.lighten3,
			},
		},
	},
});
