/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0fc',
          500: '#338ef6',
          600: '#1d6feb',
          700: '#1558d8',
          800: '#1748ae',
          900: '#194089',
          950: '#0f2854',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc071',
          400: '#ff9a38',
          500: '#ff7a12',
          600: '#f05e07',
          700: '#c74607',
          800: '#9e380e',
          900: '#7f300f',
        },
        ink: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d4d9e0',
          300: '#adb7c4',
          400: '#7f8ca0',
          500: '#5f6d85',
          600: '#4b576c',
          700: '#3e4759',
          800: '#363d4a',
          900: '#131720',
          950: '#0b0e14',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,14,20,.05), 0 8px 24px -12px rgba(11,14,20,.18)',
        lift: '0 4px 8px rgba(11,14,20,.06), 0 20px 40px -16px rgba(11,14,20,.28)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .5s ease both',
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};
