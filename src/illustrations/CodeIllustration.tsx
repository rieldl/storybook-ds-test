import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Code/Programming Illustration
 * Represents coding and development
 */
export const CodeIllustration: React.FC<IllustrationProps> = ({
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
      {/* Laptop base - isometric */}
      {/* Screen back */}
      <path
        d="M50 60L70 48L130 48L150 60L150 120L130 132L70 132L50 120L50 60Z"
        fill={AuroraColors.background.darker}
      />

      {/* Screen content */}
      <path
        d="M60 70L75 60L125 60L140 70L140 115L125 125L75 125L60 115L60 70Z"
        fill={AuroraColors.background.dark}
      />

      {/* Code editor header */}
      <path
        d="M62 72L76 63L124 63L138 72L138 80L124 88L76 88L62 80L62 72Z"
        fill={AuroraColors.auroraPurple.DEFAULT}
      />

      {/* Traffic lights */}
      <circle cx="70" cy="75" r="2" fill="#FF5F57" />
      <circle cx="77" cy="75" r="2" fill="#FEBC2E" />
      <circle cx="84" cy="75" r="2" fill="#28C840" />

      {/* Code lines */}
      <g opacity="0.9">
        <rect x="65" y="92" width="35" height="3" fill={AuroraColors.auroraPink.DEFAULT} rx="1" />
        <rect x="70" y="98" width="45" height="3" fill={AuroraColors.auroraBlue.DEFAULT} rx="1" />
        <rect x="70" y="104" width="40" height="3" fill={AuroraColors.auroraGreen.DEFAULT} rx="1" />
        <rect x="65" y="110" width="50" height="3" fill={AuroraColors.auroraCyan.DEFAULT} rx="1" />
      </g>

      {/* Keyboard base */}
      <path
        d="M45 125L70 110L130 110L155 125L145 132L130 140L70 140L55 132L45 125Z"
        fill={AuroraColors.background.DEFAULT}
      />

      {/* Keyboard top */}
      <path
        d="M50 125L70 113L130 113L150 125L130 137L70 137L50 125Z"
        fill={AuroraColors.auroraBlue.light}
      />

      {/* Keyboard keys */}
      <g opacity="0.6">
        <rect x="75" y="122" width="8" height="6" fill={AuroraColors.background.darker} rx="1" />
        <rect x="87" y="122" width="8" height="6" fill={AuroraColors.background.darker} rx="1" />
        <rect x="99" y="122" width="8" height="6" fill={AuroraColors.background.darker} rx="1" />
        <rect x="111" y="122" width="8" height="6" fill={AuroraColors.background.darker} rx="1" />
      </g>

      {/* Floating code symbols */}
      <text
        x="30"
        y="90"
        fill={AuroraColors.auroraGreen.DEFAULT}
        fontSize="24"
        fontFamily="monospace"
        opacity="0.5"
      >
        {'<'}
      </text>
      <text
        x="155"
        y="90"
        fill={AuroraColors.auroraPink.DEFAULT}
        fontSize="24"
        fontFamily="monospace"
        opacity="0.5"
      >
        {'>'}
      </text>
    </svg>
  );
};

export default CodeIllustration;
