import { defineSlotRecipe } from "@chakra-ui/react";

export const breadcrumbRecipe = defineSlotRecipe({
  slots: [
    "root",
    "list",
    "item",
    "link",
    "separator",
    "ellipsis",
    "currentLink",
  ],

  variants: {
    variant: {
      plain: {
        root: {
          colorPalette: "primary",
        },
        link: {
          color: "colorPalette.text",
          _hover: {
            color: "colorPalette.text.emphasized",
            textDecoration: "underline",
          },
        },
        currentLink: {
          color: "colorPalette.text.emphasized",
        },
        separator: {
          color: "colorPalette.solid",
        },
      },
    },
  },
});
