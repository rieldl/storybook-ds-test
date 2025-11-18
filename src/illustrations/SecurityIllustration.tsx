import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Security/Shield Illustration
 * Represents cybersecurity and data protection
 */
export const SecurityIllustration: React.FC<IllustrationProps> = ({
  width = 200,
  height = 200,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield base - isometric 3D effect */}
      {/* Right side of shield */}
      <path
        d="M100 40L140 65L140 100C140 120 130 135 100 150L100 40Z"
        fill={AuroraColors.auroraPink.dark}
      />

      {/* Left side of shield */}
      <path
        d="M100 40L60 65L60 100C60 120 70 135 100 150L100 40Z"
        fill={AuroraColors.auroraPink.DEFAULT}
      />

      {/* Top face of shield */}
      <path
        d="M100 35L140 60L100 85L60 60L100 35Z"
        fill={AuroraColors.auroraPink.light}
      />

      {/* Lock icon on shield */}
      <g transform="translate(100, 80)">
        {/* Lock body - right */}
        <path d="M0 10L15 2L15 20L0 28L0 10Z" fill={AuroraColors.auroraGreen.dark} />
        {/* Lock body - left */}
        <path d="M0 10L-15 2L-15 20L0 28L0 10Z" fill={AuroraColors.auroraGreen.DEFAULT} />
        {/* Lock body - top */}
        <path d="M0 10L15 2L0 -6L-15 2L0 10Z" fill={AuroraColors.auroraGreen.light} />

        {/* Lock shackle */}
        <path
          d="M-8 2C-8 -5 -4 -10 0 -10C4 -10 8 -5 8 2"
          stroke={AuroraColors.auroraGreen.light}
          strokeWidth="3"
          fill="none"
        />

        {/* Keyhole */}
        <circle cx="0" cy="15" r="3" fill={AuroraColors.background.darker} />
        <rect x="-1" y="15" width="2" height="6" fill={AuroraColors.background.darker} />
      </g>

      {/* Security particles/firewall effect */}
      <g opacity="0.6">
        <circle cx="45" cy="80" r="3" fill={AuroraColors.auroraBlue.DEFAULT} />
        <circle cx="155" cy="80" r="3" fill={AuroraColors.auroraBlue.DEFAULT} />
        <circle cx="70" cy="120" r="2" fill={AuroraColors.auroraCyan.DEFAULT} />
        <circle cx="130" cy="120" r="2" fill={AuroraColors.auroraCyan.DEFAULT} />
      </g>

      {/* Data streams being protected */}
      <path
        d="M40 70L55 78"
        stroke={AuroraColors.auroraBlue.DEFAULT}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <path
        d="M160 70L145 78"
        stroke={AuroraColors.auroraBlue.DEFAULT}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.5"
      />

      {/* Checkmark for verified security */}
      <path
        d="M85 160L95 170L115 145"
        stroke={AuroraColors.auroraGreen.DEFAULT}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default SecurityIllustration;
