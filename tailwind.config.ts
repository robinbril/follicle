import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0A',
                foreground: '#FAFAFA',
                primary: {
                    900: '#0D2818',
                    800: '#1A4D2E',
                    700: '#2D6A4F',
                    600: '#40916C',
                    500: '#52B788',
                    400: '#74C69D',
                },
                neutral: {
                    950: '#0A0A0A',
                    900: '#171717',
                    800: '#262626',
                    700: '#404040',
                    400: '#A3A3A3',
                    200: '#E5E5E5',
                    100: '#F5F5F5',
                    50: '#FAFAFA',
                },
                accent: {
                    600: '#B8860B',
                    500: '#D4A574',
                    400: '#E5B896',
                },
                success: '#22C55E',
                warning: '#F59E0B',
                error: '#EF4444',
            },
            fontFamily: {
                display: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['DM Sans', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(82, 183, 136, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(82, 183, 136, 0.6)' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
