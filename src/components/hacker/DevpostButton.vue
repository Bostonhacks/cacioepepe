<template>
  <button
    class="btn"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="dialog = true"
  >
    <v-dialog v-model="dialog" hide-overlay max-width="600">
      <template v-slot:default="dialog">
        <v-card>
          <v-card-text>
            <div class="text-h5 text-center pa-6">
              Check back on the day of the event to access Devpost
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-row class="px-1">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="4.5 4.5 161 141.05"
      >
        <g
          filter="url(#filter0_f_573:385)"
          :class="hover ? `logo-glow-on` : `logo-glow-off`"
        >
          <path
            d="M121.5 12L158 75.0139L121.5 138.028H48.5L12 75.0139L48.5 12L121.5 12Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M57.3068 113.382V36.7391H82.3809C89.5449 36.7391 95.944 38.2657 101.578 41.3188C107.25 44.3368 111.671 48.6532 114.843 54.268C118.014 59.8478 119.6 66.1996 119.6 73.3235V76.8503C119.6 83.9742 118.033 90.3084 114.899 95.8531C111.802 101.398 107.418 105.697 101.746 108.75C96.0746 111.803 89.6755 113.347 82.5488 113.382H57.3068ZM74.0975 49.5305V100.696H82.213C88.78 100.696 93.7985 98.6781 97.2686 94.6424C100.739 90.6067 102.511 84.8339 102.586 77.3241V73.2708C102.586 65.4802 100.869 59.5846 97.4365 55.584C94.0037 51.5483 88.9852 49.5305 82.3809 49.5305H74.0975Z"
            stroke="white"
            stroke-width="3"
          />
        </g>
        <path
          d="M121.5 12L158 75.0139L121.5 138.028H48.5L12 75.0139L48.5 12L121.5 12Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M57.3068 113.382V36.7391H82.3809C89.5449 36.7391 95.944 38.2657 101.578 41.3188C107.25 44.3368 111.671 48.6532 114.843 54.268C118.014 59.8478 119.6 66.1996 119.6 73.3235V76.8503C119.6 83.9742 118.033 90.3084 114.899 95.8531C111.802 101.398 107.418 105.697 101.746 108.75C96.0746 111.803 89.6755 113.347 82.5488 113.382H57.3068ZM74.0975 49.5305V100.696H82.213C88.78 100.696 93.7985 98.6781 97.2686 94.6424C100.739 90.6067 102.511 84.8339 102.586 77.3241V73.2708C102.586 65.4802 100.869 59.5846 97.4365 55.584C94.0037 51.5483 88.9852 49.5305 82.3809 49.5305H74.0975Z"
          stroke="white"
          stroke-width="3"
        />
        <defs>
          <filter
            id="filter0_f_573:385"
            x="0.266602"
            y="0.5"
            width="169.467"
            height="149.028"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="5"
              result="effect1_foregroundBlur_573:385"
            />
          </filter>
          <filter
            id="filter1_f_573:385"
            x="20.4551"
            y="161.483"
            width="130.204"
            height="29.9141"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_573:385"
            />
          </filter>
        </defs>
      </svg>
    </v-row>
    <v-row
      :class="hover ? `text-glow-on` : `text-glow-off`"
      class="mt-5 glow font-weight-bold text-h4 justify-center"
    >
      DEVPOST
    </v-row>
  </button>
</template>

<script>
export default {
  name: "DevpostButton",
  data() {
    return {
      hover: false,
      dialog: false
    };
  }
};
</script>

<style scoped>
.text-glow-on {
  text-shadow: 0 0 32px white;
  transition: text-shadow 0.2s ease-in-out;
}

.text-glow-off {
  text-shadow: 0 0 0px white;
  transition: text-shadow 0.2s ease-in-out;
}

.btn {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.btn:active {
  transform: translateY(8px) translateX(5px);
}

.logo-glow-off {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.logo-glow-on {
  opacity: 100%;
  transition: opacity 0.2s ease-in-out;
}
</style>
