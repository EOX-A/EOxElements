
import { EOxTestelement } from "./eoxTest";

export * from "./eoxTest";

declare global {
  interface HTMLElementTagNameMap {
    "eox-testelement": EOxTestelement;
  }
}