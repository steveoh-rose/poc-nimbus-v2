"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig as defaultChakraConfig,
  defineConfig,
} from "@chakra-ui/react";

/** ************************************************************
 * Theme Tokens
 * *************************************************************/

// Colors
import { palette } from "./colors";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

/** ************************************************************
 * Components
 * *************************************************************/
import { buttonRecipe } from "../recipes/button.recipe";
import { fontFamily } from "@/components/theme/font-family";
import { alertRecipe } from "@/components/recipes/alert.recipe";

const {
  red,
  green,
  blue,
  yellow,
  purple,
  orange,
  teal,
  cyan,
  pink,
  ...baseColors
} = defaultChakraConfig.theme?.tokens?.colors ?? {};

const cleanDefaultConfig = {
  ...defaultChakraConfig,
  theme: {
    ...defaultChakraConfig.theme,
    tokens: {
      ...defaultChakraConfig.theme?.tokens,
      colors: baseColors, // Only contains gray, black, white, etc.
    },
  },
};

const config = defineConfig({
  cssVarsPrefix: "nimbus",
  theme: {
    tokens: {
      colors: {
        ...palette,
        red: palette.ruby,
        green: palette.emerald,
        blue: palette.ocean,
        orange: palette.amber,
        yellow: palette.gold,
        purple: palette.lavender,
        gray: palette.graphite,
      },
      fonts: {
        ...fontFamily,
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "{colors.black}" },
          },
          panel: {
            value: { _light: "{colors.white}", _dark: "{colors.stone.950}" },
          },
          subtle: {
            value: {
              _light: "{colors.stone.100}",
              _dark: "{colors.stone.950}",
            },
          },
          muted: {
            value: {
              _light: "{colors.stone.200}",
              _dark: "{colors.stone.900}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.stone.200}",
              _dark: "{colors.stone.800}",
            },
          },
          inverted: {
            value: { _light: "{colors.black}", _dark: "{colors.white}" },
          },
          error: {
            value: { _light: "{colors.ruby.50}", _dark: "{colors.ruby.950}" },
          },
          info: {
            value: { _light: "{colors.ocean.50}", _dark: "{colors.ocean.950}" },
          },
          success: {
            value: {
              _light: "{colors.emerald.50}",
              _dark: "{colors.emerald.950}",
            },
          },
          warning: {
            value: { _light: "{colors.amber.50}", _dark: "{colors.amber.950}" },
          },
        },
        fg: {
          DEFAULT: {
            value: {
              _light: "{colors.graphite.800}",
              _dark: "{colors.graphite.50}",
            },
          },
          muted: {
            value: {
              _light: "{colors.graphite.500}",
              _dark: "{colors.graphite.600}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.graphite.300}",
              _dark: "{colors.graphite.800}",
            },
          },
          inverted: {
            value: { _light: "{colors.stone.50}", _dark: "{colors.black}" },
          },
          error: {
            value: { _light: "{colors.ruby.500}", _dark: "{colors.ruby.400}" },
          },
          info: {
            value: {
              _light: "{colors.ocean.600}",
              _dark: "{colors.ocean.300}",
            },
          },
          success: {
            value: {
              _light: "{colors.emerald.600}",
              _dark: "{colors.emerald.300}",
            },
          },
          warning: {
            value: {
              _light: "{colors.amber.600}",
              _dark: "{colors.amber.300}",
            },
          },
        },
        border: {
          DEFAULT: {
            value: {
              _light: "{colors.stone.300}",
              _dark: "{colors.stone.500}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.stone.400}",
              _dark: "{colors.stone.600}",
            },
          },
          muted: {
            value: {
              _light: "{colors.stone.200}",
              _dark: "{colors.stone.800}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.stone.100}",
              _dark: "{colors.stone.900}",
            },
          },
          inverted: {
            value: {
              _light: "{colors.stone.800}",
              _dark: "{colors.stone.200}",
            },
          },
          error: {
            value: { _light: "{colors.ruby.500}", _dark: "{colors.ruby.400}" },
          },
          info: {
            value: {
              _light: "{colors.ocean.500}",
              _dark: "{colors.ocean.400}",
            },
          },
          success: {
            value: {
              _light: "{colors.emerald.500}",
              _dark: "{colors.emerald.400}",
            },
          },
          warning: {
            value: {
              _light: "{colors.amber.500}",
              _dark: "{colors.amber.400}",
            },
          },
        },
      },
    },
    recipes: {
      ...defaultChakraConfig.theme?.recipes,
      button: buttonRecipe,
    },
    slotRecipes: {
      ...defaultChakraConfig.theme?.slotRecipes,
      alert: alertRecipe,
    },
  },
});

console.log(config);
console.log(cleanDefaultConfig.theme);

const system = createSystem(cleanDefaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
