import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--poppins-font)', "sans-serif"],
        inter: ['var(--inter-font)', "sans-serif"],
      },
      colors: {
        primary: "#1D51AB",
        secondary: "#A0AFC4",
        dark: "#040404",
        light: "#FDFDFD",
        purpleSpecial: "#1812BFC2",
      },
    },
  },
  plugins: [],
}
export default config
