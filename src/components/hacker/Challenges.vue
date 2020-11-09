<template>
  <v-container class="justify-center align-center">
    <v-card max-width="450" class="mx-auto">
      <v-toolbar color="deep-orange lighten-1" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Challenges</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="searchC"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(challenge, index) in filteredItemsC">
          <v-subheader
            v-if="challenge.header"
            :key="challenge.header"
            v-text="challenge.header"
          ></v-subheader>

          <v-divider
            v-else-if="challenge.divider"
            :key="index"
            :inset="challenge.inset"
          ></v-divider>

          <v-list-item v-else :key="challenge.title">
            <v-list-item-avatar>
              <v-img :src="challenge.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="challenge.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="challenge.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      challengeList: [
        { header: "Challenge List" },
        {
          value: "Google",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Google",
          description:
            "<span class='text--primary'>God of Everything</span> &mdash; Vue, Firebase"
        },
        { divider: true, inset: true },
        {
          value: "FaceBook",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "FaceBook",
          description:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        }
      ],
      null: "No result",
      searchC: "",
      searchItemC: []
    };
  },
  mounted() {
    this.searchItemC = this.challengeList;
  },
  computed: {
    filteredItemsC() {
      return this.searchItemC.filter(item => {
        if ("value" in item) {
          return item.value.toLowerCase().match(this.searchC);
        } else {
          return this.null;
        }
      });
    }
  }
};
</script>
