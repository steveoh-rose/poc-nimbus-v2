import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe({
  base: {
    color: "primary.fg",

    _hover: {
      color: "blue.focusRing",
    },
  },
});
