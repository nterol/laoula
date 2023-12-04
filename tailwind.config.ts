import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      heading: ['Circular Bold', 'sans-serif'],
      medium: ['Circular Medium', 'sans-serif'],
      circular: ['Circular', 'sans-serif'],
    },
    extend: {
      colors: {
        legal: '#3d3c3a',
        owhite: { DEFAULT: '#f1f1f1', dim: '#f4f4f4' },
        ogrey: '#e5e5e5',
        cherry: { DEFAULT: '#e9064e', dim: '#f1004a', light: '#f20348' },
        iello: { DEFAULT: '#ffff00', dim: '#f6d855' },
      },
      fontFamily: {
        heading: ['Circular Bold', 'sans-serif'],
        medium: ['Circular Medium', 'sans-serif'],
        circular: ['Circular', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
