
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				handsy: {
					"primary": "#6366F1",    // Indigo
					"secondary": "#8B5CF6",  // Purple
					"tertiary": "#C4B5FD",   // Light Purple
					"quaternary": "#EEF2FF", // Very Light Indigo
					"light": "#F8FAFC"       // Lightest Blue Gray
				},
				primary: {
					DEFAULT: '#6366F1',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#8B5CF6',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			scale: {
				'102': '1.02',
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
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						boxShadow: "0 0 15px 0 rgba(126, 105, 171, 0.3)", 
						transform: "scale(1)" 
					},
					"50%": { 
						boxShadow: "0 0 25px 5px rgba(126, 105, 171, 0.5)", 
						transform: "scale(1.03)" 
					},
				},
				"wave": {
					"0%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(-25%)" },
					"100%": { transform: "translateX(0)" },
				},
				"page-fade-in": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"gradient-flow": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"bounce-gentle": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
				"ticker": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"float-cloud": {
					"0%": { transform: "translateX(-300px)" },
					"100%": { transform: "translateX(100vw)" }
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"float": "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 3s ease-in-out infinite",
				"wave": "wave 25s linear infinite",
				"page-fade-in": "page-fade-in 0.7s ease-out forwards",
				"gradient-flow": "gradient-flow 10s ease infinite",
				"spin-slow": "spin-slow 15s linear infinite",
				"bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
				"ticker": "ticker 30s linear infinite",
				"float-cloud": "float-cloud 60s linear infinite",
			},
			backgroundImage: {
				"wave-pattern": "url('/lovable-uploads/a8cfc39c-2f16-4a59-bc93-9d1f48289c89.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-primary": "linear-gradient(135deg, #7E69AB 0%, #9b87f5 100%)",
				"gradient-flow": "linear-gradient(90deg, #7E69AB, #9b87f5, #D6BCFA, #9b87f5, #7E69AB)",
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
