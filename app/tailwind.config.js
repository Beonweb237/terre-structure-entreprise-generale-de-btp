/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'concrete-grey': '#656565',
        'safety-orange': '#F36B22',
        'midnight-black': '#050505',
        'asphalt-grey': '#121212',
        'blueprint-blue': '#BDD6E3',
        'warning-yellow': '#FFCE67',
        'unfinished-wood': '#CBAC8C',
        'steel': '#D8D8D8',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1.0', letterSpacing: '-2px' }],
        'display-lg': ['80px', { lineHeight: '1.0', letterSpacing: '-1.5px' }],
        'display-sm': ['64px', { lineHeight: '1.1', letterSpacing: '-1px' }],
        'heading-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'heading-md': ['40px', { lineHeight: '1.2', letterSpacing: '0' }],
        'heading-sm': ['32px', { lineHeight: '1.2', letterSpacing: '0' }],
        'body-lg': ['20px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-rg': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['12px', { lineHeight: '1.4', letterSpacing: '0.5px' }],
      },
      spacing: {
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
        '80px': '80px',
        '120px': '120px',
        '160px': '160px',
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
        'card': '12px',
        'btn': '8px',
        'badge': '12px',
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
