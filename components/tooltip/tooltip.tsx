import React, { ReactNode, useState } from 'react';

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
    >
      {children}
      <div
        role="tooltip"
        aria-hidden={!isVisible}
        className={`absolute z-10 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          } dark:bg-gray-700 -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap`}
      >
        {text}
      </div>
    </div>
  );
};
