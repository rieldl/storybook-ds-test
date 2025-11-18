/**
 * Aurora Color Palette
 * Inspired by aurora borealis - vibrant, tech-focused colors
 */

export const AuroraColors = {
  // Aurora Green
  auroraGreen: {
    light: '#B4FF00',
    DEFAULT: '#00FFB9',
    dark: '#00D9A0',
  },

  // Aurora Blue
  auroraBlue: {
    light: '#4DA6FF',
    DEFAULT: '#0080FF',
    dark: '#0066CC',
  },

  // Aurora Purple
  auroraPurple: {
    light: '#B366FF',
    DEFAULT: '#9D00FF',
    dark: '#7B00CC',
  },

  // Aurora Pink
  auroraPink: {
    light: '#FF6B8A',
    DEFAULT: '#FF4566',
    dark: '#FF0080',
  },

  // Aurora Cyan
  auroraCyan: {
    light: '#66FFE6',
    DEFAULT: '#00FFCC',
    dark: '#00CCB3',
  },

  // Neutrals
  background: {
    light: '#F8FAFC',
    DEFAULT: '#E2E8F0',
    dark: '#1E293B',
    darker: '#0F172A',
  },

  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #00FFB9 0%, #0080FF 100%)',
    secondary: 'linear-gradient(135deg, #9D00FF 0%, #FF4566 100%)',
    accent: 'linear-gradient(135deg, #B4FF00 0%, #00FFCC 100%)',
  },
} as const;

export default AuroraColors;
