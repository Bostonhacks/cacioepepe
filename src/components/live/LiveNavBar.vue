<template>
  <nav>
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Boston</span>
        <span>Hacks</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <svg height="100" width="50" class="blinking">
        <circle cx="30" cy="50" r="10" fill="red" />
      </svg>
      Live
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <a href="#home" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </a>

          <a href="#faq" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-question-answer</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
          </a>

          <a href="#schedule" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Schedule</v-list-item-title>
            </v-list-item>
          </a>

          <a href="#map" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Map</v-list-item-title>
            </v-list-item>
          </a>

          <a href="#workshops" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Workshops</v-list-item-title>
            </v-list-item>
          </a>

          <a href="#prizes" class="link-style">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Prizes</v-list-item-title>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "LiveNavBar",
  data() {
    return {
      drawer: false,
      group: 0
    };
  }
};
</script>

<style>
.link-style {
  text-decoration: none;
}

.blinking {
  -webkit-animation: 1s blink ease infinite;
  -moz-animation: 1s blink ease infinite;
  -ms-animation: 1s blink ease infinite;
  -o-animation: 1s blink ease infinite;
  animation: 1s blink ease infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-ms-keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
