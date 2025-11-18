import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric API/Integration Illustration
 * Represents API connections and integrations
 */
export const APIIllustration: React.FC<IllustrationProps> = ({
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
      {/* Central hub/node - isometric cube */}
      <g transform="translate(100, 100)">
        {/* Right side */}
        <path
          d="M0 -10L20 0L20 20L0 10L0 -10Z"
          fill={AuroraColors.auroraPurple.dark}
        />
        {/* Left side */}
        <path
          d="M0 -10L-20 0L-20 20L0 10L0 -10Z"
          fill={AuroraColors.auroraPurple.DEFAULT}
        />
        {/* Top */}
        <path
          d="M0 -10L20 0L0 10L-20 0L0 -10Z"
          fill={AuroraColors.auroraPurple.light}
        />

        {/* API text */}
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill="white"
          fontSize="10"
          fontWeight="bold"
        >
          API
        </text>
      </g>

      {/* Connected nodes around the hub */}
      {/* Top node */}
      <g transform="translate(100, 40)">
        <path d="M0 -5L10 0L10 10L0 5L0 -5Z" fill={AuroraColors.auroraBlue.dark} />
        <path d="M0 -5L-10 0L-10 10L0 5L0 -5Z" fill={AuroraColors.auroraBlue.DEFAULT} />
        <path d="M0 -5L10 0L0 5L-10 0L0 -5Z" fill={AuroraColors.auroraBlue.light} />
        {/* Connection line */}
        <path
          d="M0 10L0 45"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </g>

      {/* Right node */}
      <g transform="translate(160, 100)">
        <path d="M0 -5L10 0L10 10L0 5L0 -5Z" fill={AuroraColors.auroraPink.dark} />
        <path d="M0 -5L-10 0L-10 10L0 5L0 -5Z" fill={AuroraColors.auroraPink.DEFAULT} />
        <path d="M0 -5L10 0L0 5L-10 0L0 -5Z" fill={AuroraColors.auroraPink.light} />
        <path
          d="M-10 0L-55 0"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </g>

      {/* Bottom node */}
      <g transform="translate(100, 160)">
        <path d="M0 -5L10 0L10 10L0 5L0 -5Z" fill={AuroraColors.auroraCyan.dark} />
        <path d="M0 -5L-10 0L-10 10L0 5L0 -5Z" fill={AuroraColors.auroraCyan.DEFAULT} />
        <path d="M0 -5L10 0L0 5L-10 0L0 -5Z" fill={AuroraColors.auroraCyan.light} />
        <path
          d="M0 -5L0 -50"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </g>

      {/* Left node */}
      <g transform="translate(40, 100)">
        <path d="M0 -5L10 0L10 10L0 5L0 -5Z" fill={AuroraColors.auroraGreen.dark} />
        <path d="M0 -5L-10 0L-10 10L0 5L0 -5Z" fill={AuroraColors.auroraGreen.DEFAULT} />
        <path d="M0 -5L10 0L0 5L-10 0L0 -5Z" fill={AuroraColors.auroraGreen.light} />
        <path
          d="M10 0L55 0"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </g>

      {/* Data packets traveling on connections */}
      <g opacity="0.8">
        <circle cx="100" cy="70" r="3" fill={AuroraColors.auroraPink.DEFAULT}>
          <animate attributeName="cy" values="70;110" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="100" r="3" fill={AuroraColors.auroraBlue.DEFAULT}>
          <animate attributeName="cx" values="130;105" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* REST/JSON labels */}
      <text
        x="20"
        y="60"
        fill={AuroraColors.auroraBlue.DEFAULT}
        fontSize="12"
        fontFamily="monospace"
        opacity="0.6"
      >
        REST
      </text>
      <text
        x="160"
        y="140"
        fill={AuroraColors.auroraPink.DEFAULT}
        fontSize="12"
        fontFamily="monospace"
        opacity="0.6"
      >
        JSON
      </text>
    </svg>
  );
};

export default APIIllustration;
