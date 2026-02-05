import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
    </div>
  );
};

export default SectionHeader;
