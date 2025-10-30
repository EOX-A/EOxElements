export const camelize = (str) =>
  str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
