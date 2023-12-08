import { LitElement } from "lit";
import install from "@twind/with-web-components";
import config from "../twind.config";

const withTwind = install(config);
export class TwindLitElement extends withTwind(LitElement) {
  constructor() {
    super();
  }
}
