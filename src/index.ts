import { Packages } from "../types";

const myFrontityTemplateParts: Packages = {
  name: "frontity-template-parts",
  actions: {
    frontityTemplateParts: {
      beforeSSR: async ({ state, actions }) => {

        await Promise.all(
          state.blockTemplateParts.templates.map((slug) =>
            actions.source.fetch(`/wp_template_part/${slug}`)
          )
        );
      },
    },
  },
};

export default myFrontityTemplateParts;
