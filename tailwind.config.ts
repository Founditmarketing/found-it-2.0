
import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
            },
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
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
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
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            transitionTimingFunction: {
                'liquid': 'cubic-bezier(0.16, 1, 0.3, 1)',
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
                scan: {
                    '0%': { transform: 'translateY(0)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(120px)', opacity: '0' },
                },
                'bounce-dot': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                'drift-1': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.8' },
                    '33%': { transform: 'translate(28vw, 20vh) scale(1.3)', opacity: '1' },
                    '66%': { transform: 'translate(-22vw, 12vh) scale(0.8)', opacity: '0.65' },
                },
                'drift-2': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.8' },
                    '33%': { transform: 'translate(-26vw, 22vh) scale(0.85)', opacity: '0.6' },
                    '66%': { transform: 'translate(22vw, -16vh) scale(1.3)', opacity: '1' },
                },
                'drift-3': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.85' },
                    '33%': { transform: 'translate(20vw, -20vh) scale(1.25)', opacity: '1' },
                    '66%': { transform: 'translate(-28vw, -10vh) scale(0.85)', opacity: '0.65' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'reveal-up': {
                    '0%': { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                'reveal-up-sm': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                scan: 'scan 3s ease-in-out infinite',
                'bounce-dot': 'bounce-dot 2s ease-in-out infinite',
                blob: 'blob 7s infinite',
                'drift-1': 'drift-1 14s ease-in-out infinite',
                'drift-2': 'drift-2 18s ease-in-out infinite',
                'drift-3': 'drift-3 16s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-up': 'reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'reveal-up-sm': 'reveal-up-sm 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }: any) {
            const newUtilities = {
                '.animation-delay-2000': {
                    'animation-delay': '2s',
                },
                '.animation-delay-4000': {
                    'animation-delay': '4s',
                },
                '.delay-100': { 'animation-delay': '100ms' },
                '.delay-200': { 'animation-delay': '200ms' },
                '.delay-300': { 'animation-delay': '300ms' },
                '.delay-400': { 'animation-delay': '400ms' },
                '.delay-500': { 'animation-delay': '500ms' },
                '.delay-600': { 'animation-delay': '600ms' },
                '.delay-700': { 'animation-delay': '700ms' },
                '.delay-800': { 'animation-delay': '800ms' },
                '.delay-900': { 'animation-delay': '900ms' },
                '.delay-1000': { 'animation-delay': '1000ms' },
            };
            addUtilities(newUtilities);
        }
    ],
} satisfies Config

export default config
