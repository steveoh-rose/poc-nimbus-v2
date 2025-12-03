import { defineSlotRecipe, defaultConfig } from "@chakra-ui/react";

const defaultAlertRecipe = defaultConfig.theme?.slotRecipes?.alert;

console.log("Default Alert Recipe:", defaultAlertRecipe);

export const alertRecipe = defineSlotRecipe({
  slots: ["root", "title", "description", "indicator", "content"],
  ...defaultAlertRecipe,
  variants: {
    variant: {
      ...defaultAlertRecipe?.variants?.variant,
      subtle: {
        root: {
          bg: "colorPalette.subtle",
          borderStartWidth: "4px",
          borderStartColor: "colorPalette.solid",
          paddingStart: "3",
          color: "fg.muted",
        },
        title: {
          color: "fg",
        },
        indicator: {
          color: "colorPalette.solid",
        },
      },
    },
    status: {
      info: {
        root: { colorPalette: "ocean" },
      },
      warning: {
        root: { colorPalette: "amber" },
      },
      success: {
        root: { colorPalette: "emerald" },
      },
      error: {
        root: { colorPalette: "ruby" },
      },
    },
  },

  defaultVariants: {
    variant: "subtle",
    status: "info",
  },
});
