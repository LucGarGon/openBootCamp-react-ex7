import React from 'react';

export default function FilterOptions() {
  return (
    <div className="filters">
      <FilterContainer filter="SHOW_ALL">
        All
      </FilterContainer>
      <FilterContainer filter="SHOW_ACTIVE">
        ACTIVE
      </FilterContainer>
      <FilterContainer filter="SHOW_COMPLETED">
        COMPLETED
      </FilterContainer>
    </div>
  );
}
