<script>
import TileLayer from 'ol/layer/WebGLTile';
import { tileLayer } from 'vuelayers/dist/mixins';

export default {
  name: 'WebGLTileLayer',
  mixins: [
    tileLayer,
  ],
  props: {
    id: String,
    visible: Boolean,
    zIndex: Number,
    lStyle: Object,
  },
  data() {
    return {
      webGlLayer: null,
    };
  },
  methods: {
    createLayer() {
      this.webGlLayer = new TileLayer({
        style: this.lStyle,
        source: this.$source,
        zIndex: this.zIndex,
        id: this.id,
        visible: this.visible,
      });
      return this.webGlLayer;
    },
  },
  watch: {
    'lStyle.variables': {
      deep: true,
      handler(newVars) {
        this.webGlLayer.updateStyleVariables(newVars);
      },
    },
  },
};
</script>
