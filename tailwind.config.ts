import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varta: ["Varta", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        primary: '#A06056',
        secondary: '#706458',
        tertiary: '#534B42',
        background: '#F3EEE8',
        extra: '#121212',
      },
      fontSize: {
        '6xl': '3.25rem',
      }
    },
  },
  plugins: [],
}
export default config
