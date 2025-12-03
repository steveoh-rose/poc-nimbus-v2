import { defineRecipe, defaultConfig } from "@chakra-ui/react";

const defaultButtonRecipe = defaultConfig.theme?.recipes?.button;

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      ...defaultButtonRecipe?.variants?.variant,
    },
    colorPalette: {
      primary: {
        bg: "sky.500",
        _hover: { bg: "sky.600" },
        _active: { bg: "sky.700" },
      },
      secondary: {
        bg: "white",
        _hover: { bg: "slate.100" },
        _active: { bg: "slate.200" },
      },
    },
  },
});
