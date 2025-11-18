import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Server/Data Center Illustration
 * Represents cloud infrastructure and server technology
 */
export const ServerIllustration: React.FC<IllustrationProps> = ({
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
      {/* Base Platform */}
      <path
        d="M100 160L40 125L40 115L100 150L160 115L160 125L100 160Z"
        fill={AuroraColors.background.DEFAULT}
      />

      {/* Server Stack - Bottom */}
      <g>
        {/* Bottom server - right side */}
        <path
          d="M100 130L140 108L140 98L100 120L100 130Z"
          fill={AuroraColors.auroraBlue.dark}
        />
        {/* Bottom server - left side */}
        <path
          d="M100 130L60 108L60 98L100 120L100 130Z"
          fill={AuroraColors.auroraBlue.DEFAULT}
        />
        {/* Bottom server - top */}
        <path
          d="M100 120L140 98L100 76L60 98L100 120Z"
          fill={AuroraColors.auroraBlue.light}
        />
        {/* LED lights */}
        <circle cx="75" cy="102" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="82" cy="98" r="2" fill={AuroraColors.auroraPink.DEFAULT} />
      </g>

      {/* Server Stack - Middle */}
      <g>
        <path
          d="M100 110L140 88L140 78L100 100L100 110Z"
          fill={AuroraColors.auroraPurple.dark}
        />
        <path
          d="M100 110L60 88L60 78L100 100L100 110Z"
          fill={AuroraColors.auroraPurple.DEFAULT}
        />
        <path
          d="M100 100L140 78L100 56L60 78L100 100Z"
          fill={AuroraColors.auroraPurple.light}
        />
        <circle cx="75" cy="82" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="82" cy="78" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
      </g>

      {/* Server Stack - Top */}
      <g>
        <path
          d="M100 90L140 68L140 58L100 80L100 90Z"
          fill={AuroraColors.auroraPink.dark}
        />
        <path
          d="M100 90L60 68L60 58L100 80L100 90Z"
          fill={AuroraColors.auroraPink.DEFAULT}
        />
        <path
          d="M100 80L140 58L100 36L60 58L100 80Z"
          fill={AuroraColors.auroraPink.light}
        />
        <circle cx="75" cy="62" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="82" cy="58" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
      </g>

      {/* Connection lines/signals */}
      <path
        d="M100 35L100 25"
        stroke={AuroraColors.auroraGreen.DEFAULT}
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />
      <circle cx="100" cy="20" r="3" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
    </svg>
  );
};

export default ServerIllustration;
