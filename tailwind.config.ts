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
        'heading': ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        'sans': ['var(--font-sourcesans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#0066cc',
        'primary-dark': '#0052a3',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
