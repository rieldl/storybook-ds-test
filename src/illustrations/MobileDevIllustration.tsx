import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Mobile Development Illustration
 * Represents mobile app development
 */
export const MobileDevIllustration: React.FC<IllustrationProps> = ({
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
      {/* Phone - isometric view */}
      {/* Right side */}
      <path
        d="M120 50L140 62L140 140L120 152L120 50Z"
        fill={AuroraColors.auroraPurple.dark}
      />
      {/* Left side */}
      <path
        d="M80 50L60 62L60 140L80 152L80 50Z"
        fill={AuroraColors.auroraPurple.DEFAULT}
      />
      {/* Top face (screen) */}
      <path
        d="M80 50L120 50L140 62L100 82L60 62L80 50Z"
        fill={AuroraColors.auroraPurple.light}
      />

      {/* Screen content */}
      <path
        d="M85 75L115 75L130 85L130 125L100 140L70 125L70 85L85 75Z"
        fill={AuroraColors.background.dark}
      />

      {/* App UI elements on screen */}
      {/* Header bar */}
      <path
        d="M87 80L113 80L125 87L125 95L100 107L75 95L75 87L87 80Z"
        fill={AuroraColors.auroraPink.DEFAULT}
      />

      {/* Content cards */}
      <rect
        x="80"
        y="100"
        width="20"
        height="15"
        fill={AuroraColors.auroraBlue.light}
        opacity="0.8"
      />
      <rect
        x="105"
        y="100"
        width="20"
        height="15"
        fill={AuroraColors.auroraGreen.light}
        opacity="0.8"
      />

      {/* Code symbols floating around */}
      <text
        x="45"
        y="70"
        fill={AuroraColors.auroraGreen.DEFAULT}
        fontSize="20"
        fontFamily="monospace"
        opacity="0.7"
      >
        {'</>'}
      </text>
      <text
        x="145"
        y="100"
        fill={AuroraColors.auroraPink.DEFAULT}
        fontSize="16"
        fontFamily="monospace"
        opacity="0.7"
      >
        {'{}'}
      </text>

      {/* Home button */}
      <circle cx="100" cy="145" r="4" fill={AuroraColors.auroraBlue.light} />
    </svg>
  );
};

export default MobileDevIllustration;
