
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 0%)",
        primarylight: "hsl(0, 0%, 15%)",
        primarylighter: "hsl(0, 0%, 25%)",

        secondary: "hsl(0 0% 100%)",
        secondarydark: "hsl(0 0% 85%)",
        secondarydarker: "hsl(0 0% 70%)",

        alternate: "hsl(28 70% 40%)",
        alternatebright: "hsl(28 100% 50%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        opacityIn: 'opacityIn 1s ease-in forwards',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'scale(0.5)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      opacityIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    },
  },
  plugins: [],
};
export default config;
