export const fadeLayer = (layer, targetOpacity, step = 0.03) => {
  return new Promise((resolve) => {
    const fadeStep = () => {
      const currentOpacity = layer.getOpacity();
      const direction = targetOpacity > currentOpacity ? 1 : -1;
      const newOpacity = currentOpacity + direction * step;
      if (
        (direction === 1 && newOpacity >= targetOpacity) ||
        (direction === -1 && newOpacity <= targetOpacity)
      ) {
        layer.setOpacity(targetOpacity);
        resolve();
        return;
      }
      layer.setOpacity(newOpacity);
      requestAnimationFrame(fadeStep);
    };

    fadeStep();
  });
};
