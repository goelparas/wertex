import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
