const CookingPot = () => {
  return (
    <svg
      className="w-24 h-24 animate-float"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Steam bubbles */}
      <g className="animate-pulse">
        <circle cx="80" cy="30" r="4" fill="#5b8ab3" opacity="0.6">
          <animate attributeName="cy" values="30;10;30" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="25" r="5" fill="#d4af6e" opacity="0.5">
          <animate attributeName="cy" values="25;5;25" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="30" r="4" fill="#5b8ab3" opacity="0.6">
          <animate attributeName="cy" values="30;10;30" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Pot body */}
      <rect x="50" y="80" width="100" height="70" rx="5" fill="#d4af6e" stroke="#b8904c" strokeWidth="3" />

      {/* Pot rim */}
      <rect x="45" y="75" width="110" height="10" rx="2" fill="#e9d29b" stroke="#b8904c" strokeWidth="2" />

      {/* Pot handles */}
      <path
        d="M 45 90 Q 30 90 30 100 Q 30 110 45 110"
        fill="none"
        stroke="#b8904c"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 155 90 Q 170 90 170 100 Q 170 110 155 110"
        fill="none"
        stroke="#b8904c"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Bubbling liquid */}
      <ellipse cx="100" cy="120" rx="40" ry="8" fill="#5b8ab3" opacity="0.4">
        <animate attributeName="ry" values="8;10;8" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.5s" repeatCount="indefinite" />
      </ellipse>

      {/* Food items in pot */}
      <circle cx="85" cy="115" r="6" fill="#fb923c">
        <animate attributeName="cy" values="115;112;115" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="115" cy="118" r="5" fill="#4ade80">
        <animate attributeName="cy" values="118;115;118" dur="2.3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default CookingPot;
