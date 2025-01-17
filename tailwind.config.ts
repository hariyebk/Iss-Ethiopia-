import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: "#C3EBFA",
        lightSky: "#EDF9FD",
        purple: "#CFCEFF",
        lightPurple: "#F1F0FF",
        yellow: "#FAE27C",
        lightYellow: "#FEFCE8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mid': '1021px',
        'aboveMid': '1136px',
        'midlarge': '1264px',
        'large': '1324px',
      }
    },
  },
  plugins: [],
} satisfies Config;
