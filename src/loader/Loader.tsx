import React from 'react';

import './styles.css';

export const Loader: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
    </div>
  );
};
