import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      // Add perspective and transform style utilities
      perspective: {
        'default': '1000px', // default perspective
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d', // preserve 3D transformations
      },
      rotateY: {
        '180': '180deg', // add rotate-y utility
      },
    },
  },
  plugins: [],
};

export default config;
