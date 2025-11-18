import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric AI/Machine Learning Illustration
 * Represents artificial intelligence and ML
 */
export const AIIllustration: React.FC<IllustrationProps> = ({
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
      {/* Brain/Neural network center */}
      <g transform="translate(100, 90)">
        {/* Central processing unit - isometric cube */}
        <path
          d="M0 -15L25 -5L25 15L0 5L0 -15Z"
          fill={AuroraColors.auroraPurple.dark}
        />
        <path
          d="M0 -15L-25 -5L-25 15L0 5L0 -15Z"
          fill={AuroraColors.auroraPurple.DEFAULT}
        />
        <path
          d="M-25 -5L0 -15L25 -5L0 5L-25 -5Z"
          fill={AuroraColors.auroraPurple.light}
        />

        {/* AI chip pattern */}
        <g opacity="0.6">
          <rect x="-15" y="-8" width="8" height="8" fill={AuroraColors.auroraGreen.DEFAULT} />
          <rect x="7" y="-8" width="8" height="8" fill={AuroraColors.auroraPink.DEFAULT} />
          <rect x="-15" y="2" width="8" height="8" fill={AuroraColors.auroraCyan.DEFAULT} />
          <rect x="7" y="2" width="8" height="8" fill={AuroraColors.auroraBlue.DEFAULT} />
        </g>
      </g>

      {/* Neural network nodes and connections */}
      {/* Input layer */}
      <g>
        <circle cx="40" cy="60" r="8" fill={AuroraColors.auroraBlue.DEFAULT} opacity="0.8" />
        <circle cx="40" cy="90" r="8" fill={AuroraColors.auroraBlue.DEFAULT} opacity="0.8" />
        <circle cx="40" cy="120" r="8" fill={AuroraColors.auroraBlue.DEFAULT} opacity="0.8" />
      </g>

      {/* Hidden layer */}
      <g>
        <circle cx="100" cy="50" r="8" fill={AuroraColors.auroraPurple.DEFAULT} opacity="0.8" />
        <circle cx="100" cy="90" r="12" fill={AuroraColors.auroraPurple.DEFAULT} opacity="0.9" />
        <circle cx="100" cy="130" r="8" fill={AuroraColors.auroraPurple.DEFAULT} opacity="0.8" />
      </g>

      {/* Output layer */}
      <g>
        <circle cx="160" cy="70" r="8" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
        <circle cx="160" cy="110" r="8" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
      </g>

      {/* Connections - input to hidden */}
      <g opacity="0.3" stroke={AuroraColors.auroraCyan.DEFAULT} strokeWidth="2">
        <line x1="48" y1="60" x2="92" y2="50" />
        <line x1="48" y1="60" x2="92" y2="90" />
        <line x1="48" y1="90" x2="92" y2="50" />
        <line x1="48" y1="90" x2="92" y2="90" />
        <line x1="48" y1="90" x2="92" y2="130" />
        <line x1="48" y1="120" x2="92" y2="90" />
        <line x1="48" y1="120" x2="92" y2="130" />
      </g>

      {/* Connections - hidden to output */}
      <g opacity="0.3" stroke={AuroraColors.auroraGreen.DEFAULT} strokeWidth="2">
        <line x1="108" y1="50" x2="152" y2="70" />
        <line x1="108" y1="90" x2="152" y2="70" />
        <line x1="108" y1="90" x2="152" y2="110" />
        <line x1="108" y1="130" x2="152" y2="110" />
      </g>

      {/* Data pulse animation on connections */}
      <g>
        <circle r="3" fill={AuroraColors.auroraPink.DEFAULT}>
          <animateMotion dur="2s" repeatCount="indefinite" path="M40,60 L100,90" />
        </circle>
        <circle r="3" fill={AuroraColors.auroraCyan.DEFAULT}>
          <animateMotion dur="2s" repeatCount="indefinite" path="M100,90 L160,70" />
        </circle>
      </g>

      {/* AI Label */}
      <g transform="translate(100, 160)">
        <rect x="-20" y="-10" width="40" height="20" rx="10" fill={AuroraColors.auroraPurple.DEFAULT} opacity="0.2" />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill={AuroraColors.auroraPurple.DEFAULT}
          fontSize="14"
          fontWeight="bold"
        >
          AI/ML
        </text>
      </g>

      {/* Learning progress indicator */}
      <g transform="translate(30, 30)">
        <circle r="12" fill="none" stroke={AuroraColors.background.DEFAULT} strokeWidth="3" />
        <circle
          r="12"
          fill="none"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="3"
          strokeDasharray="75.4"
          strokeDashoffset="18.85"
          transform="rotate(-90)"
        />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fill={AuroraColors.auroraGreen.DEFAULT}
          fontSize="8"
          fontWeight="bold"
        >
          75%
        </text>
      </g>
    </svg>
  );
};

export default AIIllustration;
