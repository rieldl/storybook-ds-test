import React from 'react';
import { AuroraColors } from './colors';

interface IllustrationProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Isometric Analytics/Dashboard Illustration
 * Represents data analytics and metrics
 */
export const AnalyticsIllustration: React.FC<IllustrationProps> = ({
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
      {/* Monitor/Dashboard - isometric */}
      {/* Screen right side */}
      <path
        d="M130 60L155 75L155 130L130 145L130 60Z"
        fill={AuroraColors.auroraBlue.dark}
      />
      {/* Screen left side */}
      <path
        d="M70 60L45 75L45 130L70 145L70 60Z"
        fill={AuroraColors.auroraBlue.DEFAULT}
      />
      {/* Screen top (display) */}
      <path
        d="M70 60L130 60L155 75L95 105L45 75L70 60Z"
        fill={AuroraColors.auroraBlue.light}
      />

      {/* Dashboard content */}
      <g opacity="0.95">
        {/* Chart bars - isometric */}
        {/* Bar 1 */}
        <path d="M60 110L65 107L65 95L60 98L60 110Z" fill={AuroraColors.auroraPink.DEFAULT} />
        <path d="M65 107L70 110L70 98L65 95L65 107Z" fill={AuroraColors.auroraPink.dark} />
        <path d="M60 98L65 95L70 98L65 101L60 98Z" fill={AuroraColors.auroraPink.light} />

        {/* Bar 2 (taller) */}
        <path d="M80 115L85 112L85 90L80 93L80 115Z" fill={AuroraColors.auroraGreen.DEFAULT} />
        <path d="M85 112L90 115L90 93L85 90L85 112Z" fill={AuroraColors.auroraGreen.dark} />
        <path d="M80 93L85 90L90 93L85 96L80 93Z" fill={AuroraColors.auroraGreen.light} />

        {/* Bar 3 */}
        <path d="M100 112L105 109L105 100L100 103L100 112Z" fill={AuroraColors.auroraCyan.DEFAULT} />
        <path d="M105 109L110 112L110 103L105 100L105 109Z" fill={AuroraColors.auroraCyan.dark} />
        <path d="M100 103L105 100L110 103L105 106L100 103Z" fill={AuroraColors.auroraCyan.light} />

        {/* Bar 4 (tallest) */}
        <path d="M120 118L125 115L125 85L120 88L120 118Z" fill={AuroraColors.auroraPurple.DEFAULT} />
        <path d="M125 115L130 118L130 88L125 85L125 115Z" fill={AuroraColors.auroraPurple.dark} />
        <path d="M120 88L125 85L130 88L125 91L120 88Z" fill={AuroraColors.auroraPurple.light} />
      </g>

      {/* Trend line */}
      <path
        d="M55 105L75 95L95 100L120 85"
        stroke={AuroraColors.auroraGreen.DEFAULT}
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />

      {/* Data points */}
      <circle cx="55" cy="105" r="3" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
      <circle cx="75" cy="95" r="3" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
      <circle cx="95" cy="100" r="3" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />
      <circle cx="120" cy="85" r="3" fill={AuroraColors.auroraGreen.DEFAULT} opacity="0.8" />

      {/* Percentage indicator */}
      <g transform="translate(140, 85)">
        <circle r="15" fill={AuroraColors.auroraPink.DEFAULT} opacity="0.2" />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fill={AuroraColors.auroraPink.DEFAULT}
          fontSize="12"
          fontWeight="bold"
        >
          +47%
        </text>
      </g>
    </svg>
  );
};

export default AnalyticsIllustration;
