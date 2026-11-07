import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function MMZakeerLogo({ className = "", size = 44 }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-transform duration-300 hover:scale-105"
      >
        <circle cx="100" cy="100" r="94" stroke="url(#green-gradient)" strokeWidth="3" strokeDasharray="10 4" />
        <circle cx="100" cy="100" r="86" fill="url(#bg-gradient)" />
        <circle cx="100" cy="100" r="82" stroke="#A7F3D0" strokeWidth="1.5" strokeOpacity="0.5" />

        {/* Monogram MZ */}
        <path
          d="M 60 115 V 70 L 80 95 L 100 70 V 115 M 105 70 H 140 L 105 115 H 140"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 00010 Badge */}
        <rect x="70" y="130" width="60" height="20" rx="10" fill="#047857" />
        <text
          x="100"
          y="144"
          fill="white"
          fontSize="11"
          fontWeight="900"
          fontFamily="monospace"
          letterSpacing="2"
          textAnchor="middle"
        >
          00010
        </text>

        <defs>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#064E3B" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="green-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}