import { defineSlotRecipe, defaultConfig } from "@chakra-ui/react";

const defaultAlertRecipe = defaultConfig.theme?.slotRecipes?.alert;

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
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          paddingStart: "3",
          color: "fg.muted",
        },
        title: {
          color: "fg",
        },
        description: {
          color: "colorPalette.emphasized",
        },
        indicator: {
          color: "colorPalette.solid",
        },
      },
    },
    status: {
      info: {
        root: { colorPalette: "info" },
      },
      warning: {
        root: { colorPalette: "warning" },
      },
      success: {
        root: { colorPalette: "success" },
      },
      error: {
        root: { colorPalette: "error" },
      },
      neutral: {
        root: { colorPalette: "neutral" },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
    status: "info",
  },
});
