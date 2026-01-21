const ChefHat = () => {
  return (
    <svg
      className="w-20 h-20"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hat top puffs */}
      <circle cx="70" cy="70" r="25" fill="#ffffff" stroke="#e5e3df" strokeWidth="2">
        <animate attributeName="r" values="25;27;25" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="60" r="30" fill="#ffffff" stroke="#e5e3df" strokeWidth="2">
        <animate attributeName="r" values="30;33;30" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="70" r="25" fill="#ffffff" stroke="#e5e3df" strokeWidth="2">
        <animate attributeName="r" values="25;27;25" dur="3.2s" repeatCount="indefinite" />
      </circle>

      {/* Hat band/base */}
      <rect x="60" y="95" width="80" height="35" rx="3" fill="#ffffff" stroke="#e5e3df" strokeWidth="2" />

      {/* Bottom rim */}
      <rect x="55" y="125" width="90" height="8" rx="2" fill="#f5f1ed" stroke="#d8d5cf" strokeWidth="2" />

      {/* Sparkles */}
      <g className="animate-pulse">
        <circle cx="75" cy="80" r="2" fill="#d4af6e" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="125" cy="75" r="2" fill="#d4af6e" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="90" r="2" fill="#5b8ab3" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default ChefHat;
