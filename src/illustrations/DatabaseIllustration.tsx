import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Database Illustration
 * Represents data storage and databases
 */
export const DatabaseIllustration: React.FC<IllustrationProps> = ({
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
      {/* Database cylinder stack */}

      {/* Bottom cylinder */}
      <g>
        {/* Side */}
        <path
          d="M100 140C125 140 145 135 145 128L145 108C145 115 125 120 100 120C75 120 55 115 55 108L55 128C55 135 75 140 100 140Z"
          fill={AuroraColors.auroraCyan.DEFAULT}
        />
        {/* Top ellipse */}
        <ellipse cx="100" cy="108" rx="45" ry="12" fill={AuroraColors.auroraCyan.light} />
        {/* Highlight */}
        <ellipse cx="100" cy="108" rx="35" ry="8" fill={AuroraColors.auroraCyan.light} opacity="0.3" />
      </g>

      {/* Middle cylinder */}
      <g>
        <path
          d="M100 110C125 110 145 105 145 98L145 78C145 85 125 90 100 90C75 90 55 85 55 78L55 98C55 105 75 110 100 110Z"
          fill={AuroraColors.auroraBlue.DEFAULT}
        />
        <ellipse cx="100" cy="78" rx="45" ry="12" fill={AuroraColors.auroraBlue.light} />
        <ellipse cx="100" cy="78" rx="35" ry="8" fill={AuroraColors.auroraBlue.light} opacity="0.3" />
      </g>

      {/* Top cylinder */}
      <g>
        <path
          d="M100 80C125 80 145 75 145 68L145 48C145 55 125 60 100 60C75 60 55 55 55 48L55 68C55 75 75 80 100 80Z"
          fill={AuroraColors.auroraPurple.DEFAULT}
        />
        <ellipse cx="100" cy="48" rx="45" ry="12" fill={AuroraColors.auroraPurple.light} />
        <ellipse cx="100" cy="48" rx="35" ry="8" fill={AuroraColors.auroraPurple.light} opacity="0.3" />
      </g>

      {/* Data records indicators */}
      <g opacity="0.7">
        <line x1="65" y1="58" x2="90" y2="58" stroke={AuroraColors.background.darker} strokeWidth="2" />
        <line x1="65" y1="88" x2="90" y2="88" stroke={AuroraColors.background.darker} strokeWidth="2" />
        <line x1="65" y1="118" x2="90" y2="118" stroke={AuroraColors.background.darker} strokeWidth="2" />
      </g>

      {/* Connection lines showing data flow */}
      <g opacity="0.5">
        <path
          d="M145 60L165 50"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M145 90L165 80"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M145 120L165 110"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Connection nodes */}
        <circle cx="165" cy="50" r="4" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="165" cy="80" r="4" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="165" cy="110" r="4" fill={AuroraColors.auroraGreen.DEFAULT} />
      </g>

      {/* SQL icon/text */}
      <text
        x="30"
        y="100"
        fill={AuroraColors.auroraPink.DEFAULT}
        fontSize="16"
        fontFamily="monospace"
        fontWeight="bold"
        opacity="0.6"
      >
        SQL
      </text>
    </svg>
  );
};

export default DatabaseIllustration;
