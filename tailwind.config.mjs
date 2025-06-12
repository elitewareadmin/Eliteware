/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fe',
          100: '#dde5fc',
          200: '#c2d3fb',
          300: '#9ab7f8',
          400: '#7092f4',
          500: '#4a69f0',
          600: '#3d4de5',
          700: '#323ccf',
          800: '#2c33a8',
          900: '#2a3084',
          950: '#1b1d4b'
        },
        secondary: {
          50: '#f2fbfb',
          100: '#d6f3f5',
          200: '#ade6eb',
          300: '#74d3dc',
          400: '#39b8c5',
          500: '#279caa',
          600: '#237c8f',
          700: '#216274',
          800: '#1f4f5f',
          900: '#1d4451',
          950: '#0c2a36'
        },
        accent: {
          50: '#fbf1ff',
          100: '#f5e2ff',
          200: '#eec4ff',
          300: '#e397ff',
          400: '#d25dff',
          500: '#c32afc',
          600: '#af0eea',
          700: '#940ac7',
          800: '#7b0ca2',
          900: '#650e83',
          950: '#40025a'
        },
        dark: {
          100: '#d5d5d8',
          200: '#ababb1',
          300: '#80828a',
          400: '#565863',
          500: '#2b2e3c',
          600: '#222530',
          700: '#1a1c24',
          800: '#111218',
          900: '#08090c'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-in-out',
        'slide-down': 'slide-down 0.5s ease-in-out'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}