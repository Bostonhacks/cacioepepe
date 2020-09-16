<template>
  <div id="dropzone" class="pa-2">
    <div v-if="file && loading == false">
      <v-row justify="center" class="mx-5 mt-5">
        <v-icon color="indigo darken-2" size="75" @click="viewFile"
          >mdi-book-plus
        </v-icon>
        <v-icon color="indigo darken-2" size="75" @click="deleteFile()"
          >mdi-delete
        </v-icon>
      </v-row>
      <v-row justify="center" class="mx-5 mb-5">
        <span class="title indigo--text text--darken-2"
          >View/delete uploaded file!</span
        >
      </v-row>
    </div>
    <div v-else-if="file == null && loading == false">
      <input
        id="fileUpload"
        type="file"
        accept="application/pdf"
        @change="onFileUpload($event)"
        @dragenter="dragover = true"
        @dragover="dragover = true"
        @dragleave="dragover = false"
        v-if="loading == false && file == null"
      />
      <v-row justify="center" class="mx-5">
        <v-icon color="indigo darken-2" size="75"
          >mdi-cloud-upload-outline
        </v-icon>
      </v-row>
      <v-row justify="center" class="mx-5 mb-5">
        <span class="title indigo--text text--darken-2"
          >Drag'n drop or click to upload file!</span
        >
      </v-row>
    </div>
    <div v-else id="fileLoad" justify="center" class="mx-5 mb-5">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>
<script>
export default {
  name: "Filedrop",
  props: ["loading", "file"],
  data() {
    return {
      dragover: false,
      localFile: this.file
    };
  },
  methods: {
    onFileUpload(obj) {
      this.$emit("change", obj.target.files);
      this.dragover = true;
    },
    viewFile() {
      this.$emit("click", "viewFile");
    },
    deleteFile() {
      this.$emit("click", "deleteFile");
    }
  }
};
</script>
<style scoped>
#dropzone {
  position: relative;
  background-color: #d7d8fa;
  width: "100%";
  height: inherit;
}
#fileUpload {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
#fileLoad {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
