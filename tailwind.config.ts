import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#02DE0B',
        'light-red': 'rgba(255, 66, 66, 1)',
        'light-blue': '#71AAEB',
        'main-bg': '#141414',
        'block-bg': '#222',
        'grey': '#424242',
        'light-grey': '#636363',
      },
      borderColor: {
        'light-blue': '#71AAEB'
      }
    },
  },
  plugins: [],
}
export default config
