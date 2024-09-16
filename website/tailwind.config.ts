import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "var(--alert-error)",
        success: "var(--alert-success)",
        blue: {
          DEFAULT: "var(--color-blue)",
          dark: "var(--color-blue-dark)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
          solid: {
            DEFAULT: "var(--color-border-solid)",
            light: "var(--color-border-solid-light)",
          },
        },
        dark: {
          DEFAULT: "var(--color-dark)",
          dark: "var(--color-dark-dark)",
        },
        gray: "var(--color-gray)",
        light: "var(--color-light)",
        lightgray: "var(--color-lightgray)",
        text: {
          DEFAULT: "var(--color-text)",
          light: "var(--color-text-light)",
        },
        white: "var(--color-white)",
        yellow: "var(--color-yellow)",
      },
    },
  },
  plugins: [],
}
export default config
