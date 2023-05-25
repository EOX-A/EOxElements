import Map from 'ol/Map.js';
import Draw from 'ol/interaction/Draw.js';
import {MapboxLayer} from './types';
import { getSource } from 'ol-mapbox-style';
import VectorSource from 'ol/source/Vector';

export function addDraw(
  map: Map,
  styleJson: any
): void {
  
  const sourceKeys = Object.keys(styleJson.sources)
  sourceKeys.forEach(sourceKey => {
    const mapboxLayers: [MapboxLayer] = styleJson.layers;
    const drawLayer = mapboxLayers.find(l => l.source === sourceKey)

    if (drawLayer) {
      const drawDefinition = drawLayer.metadata.draw
      const source = getSource(map, sourceKey) as VectorSource;

      if (drawDefinition) {
        const drawInteraction = new Draw({
          type: drawDefinition.type,
          source
        });
        // identifier to retrieve the interaction
        drawInteraction.set('id', `draw_${sourceKey}`)
        map.addInteraction(drawInteraction);
      }
    }
  })
  
}