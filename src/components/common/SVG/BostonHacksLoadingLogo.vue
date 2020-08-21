<template>
  <div class="logoContainer">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g stroke="gray">
        <g stroke-dasharray="18" stroke-dashoffset="18">
          <path
            d="m51 10 8 14"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
            id="firstLine"
          >
            <animate
              id="firstAnim"
              attributeName="stroke-dashoffset"
              values="18;0"
              dur="0.5s"
              begin="0s; thirdAnim.end"
              fill="freeze"
              repeatCount="1"
            />
          </path>
          <path
            d="m73 48 8 14"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
          >
            <animate
              id="secondAnim"
              attributeName="stroke-dashoffset"
              values="18;0"
              dur="0.5s"
              begin="firstAnim.end"
              fill="freeze"
              repeatCount="1"
            />
          </path>
        </g>
        <path
          d="m87 72 9 16"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="19"
          stroke-dashoffset="19"
        >
          <animate
            id="thirdAnim"
            attributeName="stroke-dashoffset"
            values="19;0"
            dur="0.5s"
            begin="secondAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>
        <path
          d="m68 67 12.5 22"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="26"
          stroke-dashoffset="26"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="26;0"
            dur="0.5s"
            begin="secondAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>

        <g stroke-dasharray="20" stroke-dashoffset="20">
          <path
            d="m31 40 17 -10"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="20;0"
              dur="0.5s"
              begin="0; thirdAnim.end"
              fill="freeze"
              repeatCount="1"
            />
          </path>
          <path
            d="m49 46 17 -10"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="9"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="20;0"
              dur="0.5s"
              begin="firstAnim.end"
              fill="freeze"
              repeatCount="1"
            />
          </path>
        </g>
        <path
          d="m18 63.5 20 -11.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="24"
          stroke-dashoffset="24"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="24;0"
            dur="0.5s"
            begin="firstAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>

        <path
          d="m4 88 57 -33"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="66"
          stroke-dashoffset="66"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="66;0"
            dur="0.5s"
            begin="firstAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>
        <path
          d="m30 89 27 -15.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="33"
          stroke-dashoffset="33"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="33;0"
            dur="0.5s"
            begin="secondAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>
        <path
          d="m58 89 5 -3"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="9"
          stroke-dasharray="7"
          stroke-dashoffset="7"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="7;0"
            dur="0.5s"
            begin="secondAnim.end"
            fill="freeze"
            repeatCount="1"
          />
        </path>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.logoContainer {
  position: absolute;
  top: calc(50vh - 75px);
  left: calc(50vw - 75px);
  width: 150px;
  width: 150px;
  z-index: 0;
  opacity: 0;
}
</style>
