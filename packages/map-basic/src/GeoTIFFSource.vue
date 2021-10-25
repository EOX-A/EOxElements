<script>
import GeoTIFF from 'ol/source/GeoTIFF';
import { source } from 'vuelayers/dist/mixins';

export default {
  name: 'GeoTIFFSource',
  mixins: [
    source,
  ],
  methods: {
    createSource() {
      const gT = new GeoTIFF({
        sources: this.$attrs.sources,
      });
      gT.setAttributions(this.$attrs.attribution);
      // TODO auto-set view from await source.getView()?
      return gT;
    },
  },
};
</script>
