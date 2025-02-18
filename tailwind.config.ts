const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
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
        border: 'var(--border)',
        orangeBg: `var(--orange-bg)`,
        borderGray: 'var(--border-gray)',
        lightGray :"var(--light-gray)",
        smokeWhite:"var(--white-smoke)"
      },
      textColor: {
        primary: "var(--text-primary)",
        borderGray: 'var(--border-gray)'
      },
      fontSize: {
        xxs: "0.5rem",

        lg: "1rem"

      },


      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        mont: "var(--font-mont-serrat)"
      },

      screens: {
        xs: '300px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(239.38deg, #B72C29 -5.27%, #F08F1B 44.83%, #E97713 65.26%, #C23C24 97.81%)',
        'custom-map-gradient': ' linear-gradient(31deg, rgba(248,88,10,1) 12%, rgba(240,143,27,1) 47%, rgba(212,94,34,1) 70%, rgba(194,60,36,1) 89%)',
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

      },
    },
    plugins: [addVariablesForColors],
  }
}


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}