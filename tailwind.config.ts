import type { Config } from 'tailwindcss'
import { futureNormal } from './app/fonts'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futureNormal: ['var(--font-future-normal)'],
        futureItalic: ['var(--font-future-italic)'],
        futureCondensed: ['var(--font-future-condensed)'],
        futureHalftone: ['var(--font-future-halftone)'],
        futureHalftoneItalic: ['var(--font-future-halftone-italic)'],
        futureSemiItalic: ['var(--font-future-semi-italic)'],
      }

    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
export default config
