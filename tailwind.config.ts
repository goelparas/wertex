import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(239.38deg, #B72C29 -5.27%, #F08F1B 44.83%, #E97713 65.26%, #C23C24 97.81%)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        muted: 'var(--muted)',
        border:'var(--border)'
      },

      
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        mont:"var(--font-mont-serrat)"
      },
      
      screens: {
        sm: 'var(--screen-sm)',
        md: 'var(--screen-md)',
        lg: 'var(--screen-lg)',
        xl: 'var(--screen-xl)',
        '2xl': 'var(--screen-2xl)',
      }

    },
  },
  plugins: [],
} satisfies Config;
