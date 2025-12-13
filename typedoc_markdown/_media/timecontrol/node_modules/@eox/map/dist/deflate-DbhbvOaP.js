import { i as r } from "./pako.esm-Bx5X36Wo.js";
import { B as a } from "./basedecoder-PoXbLGBV.js";
class s extends a {
  decodeBlock(e) {
    return r(new Uint8Array(e)).buffer;
  }
}
export {
  s as default
};
