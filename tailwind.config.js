/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./server.js",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        velora: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          card: 'var(--color-card)',
          cardHover: 'var(--color-card-hover)',
          border: 'var(--color-border)',
          borderStrong: 'var(--color-border-strong)',
          accent: 'var(--color-accent)',
          accentLight: 'var(--color-accent-light)',
          text: 'var(--color-text-main)',
          muted: 'var(--color-text-muted)',
          faint: 'var(--color-faint)',
          faintHover: 'var(--color-faint-hover)',
          button: 'var(--color-btn-bg)',
          buttonText: 'var(--color-btn-text)',
          buttonHover: 'var(--color-btn-hover)'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: [],
}