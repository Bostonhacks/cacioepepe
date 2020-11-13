<template>
  <v-container class="justify-center pl-lg-10">
    <v-card max-width="500" class="mx-auto">
      <v-toolbar color="brown" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Schedule</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list subheader>
        <v-subheader>Saturday</v-subheader>

        <v-list-item v-for="daily in satschedule" :key="daily.title">
          <v-list-item-content>
            <v-list-item-title v-text="daily.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader>
        <v-subheader>Sunday</v-subheader>

        <v-list-item v-for="daily in sunschedule" :key="daily.title">
          <v-list-item-content>
            <v-list-item-title v-text="daily.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      satschedule: [
        { title: "9:00 AM - Open Ceremony" },
        { title: "10:00 AM - React Workshop" },
        { title: "11:00 AM - Vue Workshop" },
        { title: "12:00 PM - Ghidra Workshop" }
      ],
      sunschedule: [
        { title: "9:00 AM - Open Ceremony" },
        { title: "10:00 AM - React Workshop" },
        { title: "11:00 AM - Vue Workshop" },
        { title: "12:00 PM - Ghidra Workshop" }
      ]
    };
  }
};
</script>
