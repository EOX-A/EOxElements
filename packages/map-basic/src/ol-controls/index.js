import MousePosition from './MousePosition.vue';

function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return;
  }
  plugin.installed = true;

  console.log(options);
  // options = pick(options, 'dataProjection');
  // Object.assign(MousePosition, options);

  Vue.component(MousePosition.name, MousePosition);
}

export default plugin;

export {
  plugin as install,
  MousePosition,
};
