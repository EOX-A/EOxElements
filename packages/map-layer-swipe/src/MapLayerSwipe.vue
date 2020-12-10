<template>
  <v-btn
    v-if="!swipeActive"
    color="primary"
    @click="enableSwipe(true)"
  >
    <v-icon left>mdi-compare</v-icon>
    Compare layers
  </v-btn>
  <div
    v-else
    class="container"
    ref="container"
  >
    <v-btn
      v-if="!embeddedMode"
      fab
      small
      color="primary"
      @click="enableSwipe(false)"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <input id="swipe" type="range" v-model="swipe">
    <div
      class="swipeinfo swipeinfoLeft"
      ref="swipeinfoLeft"
      :style="`clip-path: inset(0px ${clipLeft}px 0px 0px`"
    >{{ reverseDirection
      ? swipeLayerName
      : originalLayerName }}</div>
    <div
      class="swipeinfo swipeinfoRight"
      ref="swipeinfoRight"
      :style="`clip-path: inset(0px 0px 0px ${clipRight}px`"
    >{{ reverseDirection
      ? originalLayerName
      : swipeLayerName }}</div>
    <div id="swipe_handle_separator" :style="`left: calc(${swipe}% - 1px)`">
      <div id="swipe_handle">
        <v-icon color="white">mdi-arrow-left-right-bold</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { VBtn, VIcon } from 'vuetify/lib';
import gsap from 'gsap';

export default {
  name: 'map-layer-swipe',
  props: {
    mapObject: Object,
    embeddedMode: Boolean,
    reverseDirection: Boolean,
    swipeLayer: String,
    swipeLayerName: {
      type: String,
      default: 'Comparison',
    },
    originalLayerName: {
      type: String,
      default: 'Original',
    },
  },
  components: {
    VBtn,
    VIcon,
  },
  data: () => ({
    swipeLayerObject: null,
    swipeActive: false,
    swipe: 100,
    clipLeft: 0,
    clipRight: 0,
  }),
  watch: {
    swipe() {
      this.$root.$emit('renderMap');
    },
  },
  created() {
    if (this.reverseDirection) {
      this.swipe = 0;
    }
  },
  mounted() {
    console.log('map-layer-swipe loaded');
    if (this.embeddedMode) {
      this.enableSwipe(true);
    }
    this.mapObject.$map.on('postcompose', () => {
      this.swipeLayerObject = this.mapObject.getLayerById(this.swipeLayer);
      if (this.swipeLayerObject) {
        this.swipeLayerObject.on('precompose', this.onPrecompose);
        this.swipeLayerObject.on('postcompose', this.onPostcompose);
      }
    });
  },
  methods: {
    enableSwipe(enable) {
      if (enable) {
        this.swipeActive = true;
        gsap.to(this.$data, { duration: 0.8, swipe: 50 });
      } else {
        const deactivate = () => { this.swipeActive = false; };
        const reset = this.reverseDirection ? 0 : 100;
        gsap.to(this.$data, { duration: 0.8, swipe: reset, onComplete: deactivate });
      }
    },
    onPrecompose(evt) {
      const ctx = evt.context;
      const width = ctx.canvas.width * (this.swipe / 100);

      ctx.save();
      ctx.beginPath();
      if (this.reverseDirection) {
        ctx.rect(0, 0, width, ctx.canvas.height);
      } else {
        ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
      }
      ctx.clip();

      if (Object.keys(this.$refs).length > 0) {
        const w = this.$refs.container.clientWidth * (this.swipe / 100);
        this.clipLeft = this.$refs.swipeinfoLeft.clientWidth - w;
        this.clipRight = w - this.$refs.container.clientWidth
          + this.$refs.swipeinfoRight.clientWidth;
      }
    },
    onPostcompose(evt) {
      const ctx = evt.context;
      ctx.restore();
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
}

.v-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  box-shadow:
    0 0 0 3px rgba(255, 255, 255, 0.5);
  z-index: 3;
}

#swipe_handle {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: var(--v-primary-base);
    top: 50%;
    left: 100%;
    transform: translate3d(-26px, -25px, 0);
}
#swipe:hover ~ #swipe_handle {
    background-color: var(--v-primary-base);
}
#swipe_handle_separator {
    position: absolute;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #fff;
    filter: drop-shadow(0 0 3px rgba(50, 50, 0, 0.5));
    z-index: 2;
}
#swipe {
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 50%;
    pointer-events: none;
}
input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
}
input[type="range"]:focus {
    outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0;
    cursor: pointer;
    box-shadow: 0 0 0 #000, 0 0 0 #0d0d0d;
    background: 0 0;
    border-radius: 1.3px;
    border: 0.2px solid transparent;
}
input[type="range"]::-webkit-slider-thumb {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: 0 0;
    cursor: ew-resize;
    -webkit-appearance: none;
    margin-top: -16.9px;
    pointer-events: all;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
    background: transparent;
}
input[type="range"]::-moz-range-track {
    width: 100%;
    height: 0;
    cursor: pointer;
    box-shadow: 0 0 0 #000, 0 0 0 #0d0d0d;
    background: 0 0;
    border-radius: 1.3px;
    border: 0.2px solid transparent;
}
input[type="range"]::-moz-range-thumb {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: 0 0;
    cursor: ew-resize;
    border: 0.2px solid transparent;
    pointer-events: all;
}
input[type="range"]::-moz-focus-outer {
    border: 0;
}
input[type="range"]::-ms-track {
    width: 100%;
    height: 0;
    cursor: pointer;
    background: 0 0;
    border-color: transparent;
    color: transparent;
}
input[type="range"]::-ms-fill-lower {
    background: 0 0;
    border: 0.2px solid transparent;
    border-radius: 2.6px;
    box-shadow: 0 0 0 #000, 0 0 0 #0d0d0d;
}
input[type="range"]::-ms-fill-upper {
    background: 0 0;
    border: 0.2px solid transparent;
    border-radius: 2.6px;
    box-shadow: 0 0 0 #000, 0 0 0 #0d0d0d;
}
input[type="range"]::-ms-thumb {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: 0 0;
    cursor: ew-resize;
    height: 1.6px;
    pointer-events: all;
}
input[type="range"]:focus::-ms-fill-lower {
    background: transparent;
}
input[type="range"]:focus::-ms-fill-upper {
    background: transparent;
}
.swipeinfo {
    position: absolute;
    top: 50%;
    background: var(--v-primary-base);
    width: auto;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    transform: translateY(-25px);
    font-size: 30px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 0 0 0 #000, 0 0 0 #0d0d0d;
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
}
.swipeinfoLeft {
    left: 0;
    text-align: left;
    clip-path: inset(0px);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.swipeinfoRight {
    right: 0;
    text-align: right;
    clip-path: inset(0px);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
</style>

<style>
.ol-attribution, .ol-control {
  z-index: 2;
}
</style>
