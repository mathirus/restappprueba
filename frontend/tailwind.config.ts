import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF742F',
        secondary: '#0D0D0D',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
}
export default config
