# frontity-menu

This package is

## Setup

`npm install frontity-block-template-parts`

in `frontity.settings.js` add:

```js

{
  name: "frontity-block-template-parts",
    state: {
      blockTemplateParts: {
        templates: ["footer"],
      },
    },
  },

  {
      name: "@frontity/wp-source",
      state: {
        source: {
          postTypes: [
            {
              type: "/wp_template_part",
              endpoint: "template-parts",
            },
          ],
          ....
        },
      },
    },


```

## Usage

```tsx
/**
 * External dependencies
 */
import { Box, Container, useStyleConfig } from "@chakra-ui/core";
import { connect, useConnect } from "frontity";
import React from "react";

/**
 * Internal dependencies
 */
import { Packages } from "../../../types";

/**
 * Footer
 */
const Footer = () => {
  const { state, libraries } = useConnect<Packages>();
  const Html2React = libraries.html2react.Component;

  const data = state.source.get("/wp_template_part/footer/");
  const footer = state.source["wp_template_part"][data.id];

  const bootstrapContainer = useStyleConfig("Container", {
    variant: "bootstrap",
  });

  const year = new Date().getFullYear();

  return (
    <>
      <Box as="footer" bg="black" py="15px">
        <Container sx={bootstrapContainer}>
          <Html2React html={footer.content.rendered} />
        </Container>
      </Box>
    </>
  );
};

export default connect(Footer);
```

## Wordpress

### Theme

Ensure the template part is defined.
