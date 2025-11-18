import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Cloud Computing Illustration
 * Represents cloud services and storage
 */
export const CloudIllustration: React.FC<IllustrationProps> = ({
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
      {/* Cloud base */}
      <ellipse cx="100" cy="90" rx="60" ry="25" fill={AuroraColors.auroraBlue.light} opacity="0.3" />

      {/* Main cloud body */}
      <path
        d="M60 85C60 75 67 67 77 67C77 57 85 50 95 50C105 50 113 57 113 67C123 67 130 75 130 85C130 95 123 103 113 103H77C67 103 60 95 60 85Z"
        fill={AuroraColors.auroraBlue.light}
      />
      <path
        d="M60 85C60 75 67 67 77 67C77 57 85 50 95 50C105 50 113 57 113 67C123 67 130 75 130 85C130 95 123 103 113 103H77C67 103 60 95 60 85Z"
        fill="url(#cloudGradient)"
        opacity="0.6"
      />

      {/* Upload/Download data boxes - isometric */}
      {/* Upload box (going up) */}
      <g transform="translate(70, 110)">
        <path d="M0 10L15 0L15 15L0 25L0 10Z" fill={AuroraColors.auroraGreen.DEFAULT} />
        <path d="M15 0L30 10L30 25L15 15L15 0Z" fill={AuroraColors.auroraGreen.dark} />
        <path d="M0 10L15 0L30 10L15 20L0 10Z" fill={AuroraColors.auroraGreen.light} />
        {/* Arrow up */}
        <path
          d="M15 30L15 50"
          stroke={AuroraColors.auroraGreen.DEFAULT}
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        <path
          d="M15 50L12 45L18 45L15 50Z"
          fill={AuroraColors.auroraGreen.DEFAULT}
          transform="rotate(180 15 47.5)"
        />
      </g>

      {/* Download box (going down) */}
      <g transform="translate(100, 110)">
        <path d="M0 10L15 0L15 15L0 25L0 10Z" fill={AuroraColors.auroraPink.DEFAULT} />
        <path d="M15 0L30 10L30 25L15 15L15 0Z" fill={AuroraColors.auroraPink.dark} />
        <path d="M0 10L15 0L30 10L15 20L0 10Z" fill={AuroraColors.auroraPink.light} />
        {/* Arrow down */}
        <path
          d="M15 -20L15 0"
          stroke={AuroraColors.auroraPink.DEFAULT}
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        <path
          d="M15 0L12 -5L18 -5L15 0Z"
          fill={AuroraColors.auroraPink.DEFAULT}
        />
      </g>

      {/* Gradient definition */}
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={AuroraColors.auroraBlue.DEFAULT} />
          <stop offset="100%" stopColor={AuroraColors.auroraCyan.DEFAULT} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CloudIllustration;
