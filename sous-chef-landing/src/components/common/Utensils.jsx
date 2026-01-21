const Utensils = () => {
  return (
    <svg
      className="w-20 h-20"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fork */}
      <g>
        <rect x="50" y="60" width="6" height="90" rx="3" fill="#5b8ab3" />
        <rect x="40" y="60" width="6" height="40" rx="3" fill="#5b8ab3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 43 60; -5 43 60; 0 43 60"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="50" y="60" width="6" height="40" rx="3" fill="#5b8ab3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 53 60; 5 53 60; 0 53 60"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="60" y="60" width="6" height="40" rx="3" fill="#5b8ab3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 63 60; -5 63 60; 0 63 60"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* Spoon */}
      <g>
        <rect x="130" y="80" width="8" height="70" rx="4" fill="#d4af6e" />
        <ellipse cx="134" cy="65" rx="15" ry="20" fill="#d4af6e">
          <animate attributeName="ry" values="20;22;20" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Shine on spoon */}
        <ellipse cx="130" cy="60" rx="5" ry="8" fill="#f5e9cd" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="70" cy="50" r="3" fill="#fb923c">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="145" cy="55" r="3" fill="#4ade80">
          <animate attributeName="r" values="3;5;3" dur="2.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default Utensils;
