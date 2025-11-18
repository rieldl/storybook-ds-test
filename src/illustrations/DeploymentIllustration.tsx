import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Deployment/Rocket Illustration
 * Represents app deployment and launch
 */
export const DeploymentIllustration: React.FC<IllustrationProps> = ({
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
      {/* Rocket body - isometric */}
      <g transform="translate(100, 80)">
        {/* Rocket nose cone */}
        <path
          d="M0 -40L15 -25L15 -15L0 -20L0 -40Z"
          fill={AuroraColors.auroraPink.DEFAULT}
        />
        <path
          d="M0 -40L-15 -25L-15 -15L0 -20L0 -40Z"
          fill={AuroraColors.auroraPink.light}
        />

        {/* Main body - right side */}
        <path
          d="M0 -20L15 -15L15 35L0 40L0 -20Z"
          fill={AuroraColors.auroraBlue.dark}
        />
        {/* Main body - left side */}
        <path
          d="M0 -20L-15 -15L-15 35L0 40L0 -20Z"
          fill={AuroraColors.auroraBlue.DEFAULT}
        />
        {/* Main body - front */}
        <path
          d="M-15 -15L15 -15L15 35L-15 35L-15 -15Z"
          fill={AuroraColors.auroraBlue.light}
        />

        {/* Window */}
        <circle cx="0" cy="5" r="6" fill={AuroraColors.auroraCyan.light} opacity="0.8" />
        <circle cx="0" cy="5" r="4" fill={AuroraColors.auroraCyan.DEFAULT} opacity="0.3" />

        {/* Fins - right */}
        <path
          d="M15 25L30 35L30 45L15 35L15 25Z"
          fill={AuroraColors.auroraPurple.DEFAULT}
        />
        {/* Fins - left */}
        <path
          d="M-15 25L-30 35L-30 45L-15 35L-15 25Z"
          fill={AuroraColors.auroraPurple.light}
        />

        {/* Engine fire/exhaust */}
        <g opacity="0.9">
          {/* Flame 1 */}
          <path
            d="M-8 40L-8 55L-3 50L-8 40Z"
            fill={AuroraColors.auroraPink.DEFAULT}
          >
            <animate attributeName="d" values="M-8 40L-8 55L-3 50L-8 40Z;M-8 40L-8 60L-3 52L-8 40Z;M-8 40L-8 55L-3 50L-8 40Z" dur="0.5s" repeatCount="indefinite" />
          </path>
          {/* Flame 2 */}
          <path
            d="M0 40L0 58L5 52L0 40Z"
            fill={AuroraColors.auroraGreen.DEFAULT}
          >
            <animate attributeName="d" values="M0 40L0 58L5 52L0 40Z;M0 40L0 62L5 54L0 40Z;M0 40L0 58L5 52L0 40Z" dur="0.4s" repeatCount="indefinite" />
          </path>
          {/* Flame 3 */}
          <path
            d="M8 40L8 55L3 50L8 40Z"
            fill={AuroraColors.auroraPink.DEFAULT}
          >
            <animate attributeName="d" values="M8 40L8 55L3 50L8 40Z;M8 40L8 60L3 52L8 40Z;M8 40L8 55L3 50L8 40Z" dur="0.6s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      {/* Launch pad - isometric platform */}
      <g transform="translate(100, 140)">
        <path
          d="M0 0L40 -20L40 -15L0 5L0 0Z"
          fill={AuroraColors.background.DEFAULT}
        />
        <path
          d="M0 0L-40 -20L-40 -15L0 5L0 0Z"
          fill={AuroraColors.background.dark}
        />
        <path
          d="M-40 -20L0 -40L40 -20L0 0L-40 -20Z"
          fill={AuroraColors.background.light}
        />
      </g>

      {/* Smoke/clouds */}
      <g opacity="0.4">
        <ellipse cx="80" cy="155" rx="20" ry="8" fill={AuroraColors.background.DEFAULT} />
        <ellipse cx="120" cy="155" rx="20" ry="8" fill={AuroraColors.background.DEFAULT} />
      </g>

      {/* Stars/sparkles */}
      <g opacity="0.7">
        <circle cx="40" cy="40" r="2" fill={AuroraColors.auroraGreen.DEFAULT} />
        <circle cx="160" cy="50" r="2" fill={AuroraColors.auroraPink.DEFAULT} />
        <circle cx="170" cy="30" r="2" fill={AuroraColors.auroraCyan.DEFAULT} />
        <circle cx="30" cy="70" r="2" fill={AuroraColors.auroraPurple.DEFAULT} />
      </g>

      {/* Deploy indicator */}
      <text
        x="100"
        y="30"
        textAnchor="middle"
        fill={AuroraColors.auroraGreen.DEFAULT}
        fontSize="14"
        fontWeight="bold"
        opacity="0.8"
      >
        DEPLOY
      </text>
    </svg>
  );
};

export default DeploymentIllustration;
