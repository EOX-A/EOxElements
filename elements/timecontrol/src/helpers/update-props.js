export default function updateProps(EOxTimeControl, selector, properties) {
  const Ele = EOxTimeControl.querySelector(selector);
  if (Ele) {
    Object.keys(properties).forEach((key) => {
      Ele[key] = properties[key];
    });
  }
}
