<template>
  <v-container class="justify-center pl-lg-10">
    <v-card max-width="450" class="mx-auto">
      <v-toolbar color="orange" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Slack Channels</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle class="pd-10"
            >Communicate with hundreds of hackers! Reach out to learn about our
            workshops, update with announcements!</v-list-item-subtitle
          >
          <v-card-actions>
            <v-list>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #general Channel</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #sponsor Channel</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #workshops Channel</v-btn
                >
              </v-list-item>
            </v-list>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
export default {};
</script>
