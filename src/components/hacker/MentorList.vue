<template>
  <div id="Mentors">
    <v-row class="justify-center">
      <v-container class="justify-center align-center">
        <v-card class="mx-auto">
          <v-toolbar color="light-blue" dark class="d-flex justify-center">
            <v-toolbar-title class="display-1 font-weight-bold"
              >Mentors</v-toolbar-title
            >
          </v-toolbar>
          <v-text-field
            class="mx-12"
            v-model="searchM"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <div class="mx-8">
            <v-list three-line>
              <template v-for="(mentor, index) in filteredItemsM">
                <v-subheader
                  v-if="mentor.header"
                  :key="mentor.header"
                  v-text="mentor.header"
                ></v-subheader>

                <v-divider
                  v-else-if="mentor.divider"
                  :key="index"
                  :inset="mentor.inset"
                ></v-divider>

                <v-list-item v-else :key="mentor.title">
                  <v-list-item-avatar>
                    <v-avatar color="indigo">
                      <v-icon dark>
                        mdi-account-circle
                      </v-icon>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="mentor.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </div>
        </v-card>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mentorList: [
        { header: "Mentor List" },
        {
          value: "Rudy Raveendran",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Rudy Raveendran",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Jason Cho",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Jason Cho",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Micheal Hendrick",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Micheal Hendrick",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Charles Ma",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Charles Ma",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Ekta",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Ekta",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Yash",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Yash",
          description: ""
        },
        { divider: true, inset: true },
        {
          value: "Sharif",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Sharif",
          description: ""
        }
      ],
      null: "No result",
      searchM: "",
      searchItemM: []
    };
  },
  mounted() {
    this.searchItemM = this.mentorList;
  },
  computed: {
    mentor() {
      return this.$store.state.mentor;
    },
    filteredItemsM() {
      return this.searchItemM.filter(item => {
        if ("value" in item) {
          return item.value.toLowerCase().match(this.searchM);
        } else {
          return this.null;
        }
      });
    }
  }
};
</script>
