<template>
  <button
    class="btn"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="navigate()"
  >
    <v-dialog v-model="dialog" hide-overlay max-width="600">
      <template v-slot:default="dialog">
        <v-card>
          <v-card-text>
            <div class="text-h5 text-center pa-6">
              Check back on the day of the event to access Bramble
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-row class="pr-4">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5.97 6 146.28 172.7"
      >
        <g
          filter="url(#filter0_f_573:394)"
          :class="hover ? `logo-glow-on` : `logo-glow-off`"
        >
          <path
            d="M39.8576 166.093H139.637V68.4819C139.637 55.0567 134.335 42.87 125.709 33.9022M39.8576 166.093V68.4819C39.8576 40.9284 62.194 18.5919 89.7475 18.5919C103.876 18.5919 116.632 24.4647 125.709 33.9022M39.8576 166.093L53.9569 151.993V70.1087C53.9569 45.2507 74.1083 25.0993 98.9663 25.0993C108.981 25.0993 118.232 28.3703 125.709 33.9022M147.229 173.684V68.4819C147.229 36.7355 121.494 11 89.7475 11C58.0011 11 32.2656 36.7355 32.2656 68.4819V173.684H147.229Z"
            stroke="white"
            stroke-width="2"
          />
          <path d="M53.9561 151.993H139.637" stroke="white" stroke-width="2" />
          <path
            d="M26.8421 100.477C24.4922 100.115 19.9009 100.585 20.3347 105.357C17.4425 107.526 12.6342 112.624 16.5387 115.66C12.0198 117.83 6.01892 122.385 18.166 123.252C30.3131 124.12 32.2654 123.975 31.7232 123.795C33.5308 127.048 40.6166 133.014 54.499 130.844C57.0297 131.206 62.3079 131.278 63.1755 128.675C63.3563 128.314 63.9347 127.808 64.8024 128.675C65.887 129.76 72.3943 132.471 77.8171 130.844C80.5286 130.664 87.3613 129.76 93.001 127.591C95.3509 127.591 99.8338 126.723 98.9661 123.252C101.316 122.891 106.341 121.842 107.643 120.541C111.077 120.903 117.621 120.866 116.319 117.83C117.946 117.649 121.2 116.962 121.2 115.66C121.2 114.359 115.054 114.034 111.981 114.034C110.716 112.949 106.992 110.888 102.22 111.322C100.774 109.515 95.9294 106.225 88.1205 107.526C89.0243 103.369 87.3613 95.1622 73.4789 95.5961C71.129 92.8847 65.2362 88.8718 60.4641 94.5115C60.2834 94.6923 59.488 94.8369 57.7527 93.9693C55.7644 91.4386 49.2931 87.5704 39.3152 92.3424C35.8803 91.6194 28.577 92.234 26.8421 100.477Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M129.334 69.0241C127.165 62.5168 134.214 58.7208 138.01 57.6362C140.722 58.1785 140.179 89.0886 139.637 89.0886C139.095 89.0886 132.045 89.0886 129.334 88.004C126.622 86.9194 124.995 88.004 122.826 87.4617C121.091 87.0279 121.019 85.4734 121.2 84.7503C118.488 83.1235 108.727 83.6658 107.1 83.6658C105.799 83.6658 105.112 82.2197 104.931 81.4966C103.666 81.4966 101.026 81.1713 100.592 79.8698C100.159 78.5683 105.473 77.8814 108.184 77.7007C110.787 74.6639 115.415 74.2662 117.403 74.447C119.138 70.1087 126.08 69.0241 129.334 69.0241Z"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <g>
          <path
            d="M39.8576 166.093H139.637V68.4819C139.637 55.0567 134.335 42.87 125.709 33.9022M39.8576 166.093V68.4819C39.8576 40.9284 62.194 18.5919 89.7475 18.5919C103.876 18.5919 116.632 24.4647 125.709 33.9022M39.8576 166.093L53.9569 151.993V70.1087C53.9569 45.2507 74.1083 25.0993 98.9663 25.0993C108.981 25.0993 118.232 28.3703 125.709 33.9022M147.229 173.684V68.4819C147.229 36.7355 121.494 11 89.7475 11C58.0011 11 32.2656 36.7355 32.2656 68.4819V173.684H147.229Z"
            stroke="white"
            stroke-width="2"
          />
          <path d="M53.9561 151.993H139.637" stroke="white" stroke-width="2" />
          <path
            d="M26.8421 100.477C24.4922 100.115 19.9009 100.585 20.3347 105.357C17.4425 107.526 12.6342 112.624 16.5387 115.66C12.0198 117.83 6.01892 122.385 18.166 123.252C30.3131 124.12 32.2654 123.975 31.7232 123.795C33.5308 127.048 40.6166 133.014 54.499 130.844C57.0297 131.206 62.3079 131.278 63.1755 128.675C63.3563 128.314 63.9347 127.808 64.8024 128.675C65.887 129.76 72.3943 132.471 77.8171 130.844C80.5286 130.664 87.3613 129.76 93.001 127.591C95.3509 127.591 99.8338 126.723 98.9661 123.252C101.316 122.891 106.341 121.842 107.643 120.541C111.077 120.903 117.621 120.866 116.319 117.83C117.946 117.649 121.2 116.962 121.2 115.66C121.2 114.359 115.054 114.034 111.981 114.034C110.716 112.949 106.992 110.888 102.22 111.322C100.774 109.515 95.9294 106.225 88.1205 107.526C89.0243 103.369 87.3613 95.1622 73.4789 95.5961C71.129 92.8847 65.2362 88.8718 60.4641 94.5115C60.2834 94.6923 59.488 94.8369 57.7527 93.9693C55.7644 91.4386 49.2931 87.5704 39.3152 92.3424C35.8803 91.6194 28.577 92.234 26.8421 100.477Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M129.334 69.0241C127.165 62.5168 134.214 58.7208 138.01 57.6362C140.722 58.1785 140.179 89.0886 139.637 89.0886C139.095 89.0886 132.045 89.0886 129.334 88.004C126.622 86.9194 124.995 88.004 122.826 87.4617C121.091 87.0279 121.019 85.4734 121.2 84.7503C118.488 83.1235 108.727 83.6658 107.1 83.6658C105.799 83.6658 105.112 82.2197 104.931 81.4966C103.666 81.4966 101.026 81.1713 100.592 79.8698C100.159 78.5683 105.473 77.8814 108.184 77.7007C110.787 74.6639 115.415 74.2662 117.403 74.447C119.138 70.1087 126.08 69.0241 129.334 69.0241Z"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_573:394"
            x="0"
            y="0"
            width="158.229"
            height="184.685"
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
              result="effect1_foregroundBlur_573:394"
            />
          </filter>
          <filter
            id="filter1_f_573:394"
            x="20.5957"
            y="191.948"
            width="133.809"
            height="29.3281"
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
              result="effect1_foregroundBlur_573:394"
            />
          </filter>
        </defs>
      </svg>
    </v-row>
    <v-row
      :class="hover ? `text-glow-on` : `text-glow-off`"
      class="mt-5 font-weight-bold text-h4 justify-center"
    >
      BRAMBLE
    </v-row>
  </button>
</template>

<script>
export default {
  name: "BrambleButton",
  data() {
    return {
      hover: false,
      dialog: false
    };
  },
  methods: {
    alertLater() {
      this.dialog = true;
    },
    navigate() {
      window.open("https://app.bramble.live/space/boston-hacks");
    }
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
