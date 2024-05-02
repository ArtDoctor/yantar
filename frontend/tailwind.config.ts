import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      textColor: {
        skin: {
          base: "var(--color-base)",
          muted: "var(--color-text-muted)",
          invisible: "var(--color-text-invisible)",
          dark: "var(--color-text-dark)",
          grey: "var(--color-text-grey)",
          warning: "var(--color-warning)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-base)",
          muted: "var(--color-fill-muted)",
          subtle: "var(--color-fill-subtle)",
          light: "var(--color-fill-light)",
          warning: "var(--color-warning)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      blue: {
        from: "var(--color-blue)",
        via: "var(--color-blue-via)",
        to: "var(--color-blue-to)",
      },
      screens: {
        "3xl": "2200px",
        "4xl": "3200px",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};
export default config;
