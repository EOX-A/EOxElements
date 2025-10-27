import {Globe, CanvasTiles, quadTreeStrategyType} from '@openglobus/og';


const create = ({target}) => {
    console.log("Creating Globe in target:", target);
    return new Globe({
        // name: 'Globe',
        target,
        // tileStrategy: quadTreeStrategyType,
        layers: [],
        controls: []
    });
}

window.eoxMapGlobe = {
   create
}