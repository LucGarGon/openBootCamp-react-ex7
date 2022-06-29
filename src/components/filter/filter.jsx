import React from 'react';

export default function Filter({ active, onClick, children }) {
  if (active) {
    return (<span className="active">{children}</span>);
  }
  return (
    <button
      type="button"
      className="filter"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>

  );
}
