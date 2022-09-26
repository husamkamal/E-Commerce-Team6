import React from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import FIlterProduct from '../FIlterProduct/FIlterProduct';
import './Filter.css';

function Filter() {
  return (
    <div className="filter-sidebar">
      <CategoryFilter />
      <FIlterProduct />
    </div>
  );
}

export default Filter;
