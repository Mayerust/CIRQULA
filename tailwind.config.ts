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
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					card: 'hsl(var(--background-card))'
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				quantum: {
					primary: 'hsl(var(--quantum-primary))',
					secondary: 'hsl(var(--quantum-secondary))',
					tertiary: 'hsl(var(--quantum-tertiary))',
					glow: 'hsl(var(--quantum-glow))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
					'50%': { transform: 'scale(1.02)', opacity: '1' }
				},
				'pulse-eco': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--eco-healthy) / 0.4)' },
					'50%': { boxShadow: '0 0 0 20px hsl(var(--eco-healthy) / 0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				'particle-drift': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.3' },
					'25%': { transform: 'translateY(-15px) rotate(90deg)', opacity: '0.8' },
					'75%': { transform: 'translateY(-5px) rotate(270deg)', opacity: '0.6' }
				},
				'matrix-scan': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'quantum-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--quantum-primary) / 0.4)' },
					'50%': { boxShadow: '0 0 0 20px hsl(var(--quantum-primary) / 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'breathe': 'breathe 3s ease-in-out infinite',
				'pulse-eco': 'pulse-eco 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'particle-drift': 'particle-drift 4s ease-in-out infinite',
				'matrix-scan': 'matrix-scan 3s linear infinite',
				'quantum-pulse': 'quantum-pulse 2s infinite'
			},
			fontFamily: {
				'display': ['Inter', 'sans-serif'],
				'body': ['Inter', 'sans-serif']
			},
			backgroundImage: {
				'gradient-quantum': 'linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-secondary)))',
				'gradient-matrix': 'linear-gradient(135deg, hsl(var(--quantum-primary)), hsl(var(--quantum-tertiary)))',
				'gradient-surface': 'linear-gradient(145deg, hsl(var(--background-card)), hsl(var(--background-secondary)))'
			},
			boxShadow: {
				'quantum': '0 8px 32px hsl(var(--quantum-primary) / 0.15)',
				'quantum-glow': '0 0 40px hsl(var(--quantum-glow) / 0.3)',
				'elevated': '0 12px 48px hsl(0 0% 0% / 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
