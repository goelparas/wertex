const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        lightGray: 'var(--light-gray)',
        smokeWhite: 'var(--white-smoke)',
        mutedGray: 'var(--muted-gray)',
        "gray-muted-100": 'var(--gray-muted-100)',
        "background-200": 'var(--background-200)',
        "background-300": 'var(--background-300)',
        "background-400": 'var(--background-400)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        borderGray: 'var(--border-gray)',
      },
      fontSize: {
        xxs: '0.5rem',
        xsm: '0.625rem',
        lg: '1rem',
        xl2: '1.375rem', // 22px
        '3.5xl':'2rem'
      },

      fontFamily: {
        mono: 'var(--font-mono)',
        mont:  'var(--font-montserrat)',
      },

      screens: {
        xs: '300px',
        xsm: '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      backgroundImage: {
        'custom-gradient':
          'linear-gradient(239.38deg, #B72C29 -5.27%, #F08F1B 44.83%, #E97713 65.26%, #C23C24 97.81%)',
        'custom-map-gradient':
          ' linear-gradient(31deg, rgba(248,88,10,1) 12%, rgba(240,143,27,1) 47%, rgba(212,94,34,1) 70%, rgba(194,60,36,1) 89%)',
        'custom-card-gradient-lt-br':
          'linear-gradient(239.38deg, #B72C29 -5.27%, #F08F1B 44.83%, #E97713 65.26%, #C23C24 97.81%)',
        'cnc-bg':
          "url('/src/cdn/images/cnc/metalworking-cnc-milling-machine.png')",
          "gradient-gray-shine":'linear-gradient(234.97deg, #353535 -49.8%, #161616 22.01%, #4A4A4A 51.29%, #141414 97.95%)',
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
    plugins: [addVariablesForColors],
  },
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
