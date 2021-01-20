import WpSource from "@frontity/wp-source/types";
import { MergePackages, Package, ServerAction } from "frontity/types";

export interface FrontityTemplateParts extends Package {
  name: "frontity-template-parts";
  actions: {
    frontityTemplateParts: {
      /**
       * Before SSR action, to fetch the menu content from the REST API.
       */
      beforeSSR: ServerAction<Packages>;
    };
  };
}

/**
 * Packages used internally.
 */
export type Packages = MergePackages<FrontityTemplateParts, WpSource>;
