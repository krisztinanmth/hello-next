'use client';
import React from 'react';

function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);

  const handleClick = () => {
    setIsCensored((prev) => !prev);
  };

  return (
    <button
      className={isCensored ? 'censored' : undefined}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Censored;
