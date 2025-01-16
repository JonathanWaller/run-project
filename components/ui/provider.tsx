"use client"

import { ChakraProvider, 
  // defaultSystem, 
  defineConfig, createSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"


const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0
    }
  },
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        red: { value: "#EE0F0F" },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red"},
      }
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
})

const system = createSystem(config)

export function Provider(props: ColorModeProviderProps) {
  return (
    // <ChakraProvider value={defaultSystem}>
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
