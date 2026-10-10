/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070A10',
          900: '#0B0F17',
          850: '#0E1420',
          800: '#111827',
          700: '#1E293B',
          600: '#334155',
        },
        tone: {
          ngang: '#06B6D4',   // Flat / Electric Cyan
          huyen: '#10B981',   // Falling / Emerald Neon
          sac: '#F59E0B',     // Rising / Warm Amber
          hoi: '#8B5CF6',     // Asking / Purple
          nga: '#EC4899',     // Broken / Pink
          nang: '#EF4444',    // Heavy / Crimson Red
        },
        brand: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          navy: '#0B0F17',
          gold: '#E5C384'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.5)' },
          '50%': { transform: 'scaleY(1)' },
        }
      }
    },
  },
  plugins: [],
}
