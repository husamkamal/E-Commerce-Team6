import React from 'react';
import './FilterProduct.css';

function FIlterProduct() {
  return (
    <div className="filter-product-container">
      <h1>filters</h1>
      <div className="filter-product-section">
        <select className="filter-select" name="color">
          <option disabled>Color</option>
          <option>white</option>
          <option>black</option>
          <option>red</option>
          <option>blue</option>
          <option>yellow</option>
          <option>green</option>
          <option>gray</option>
        </select>
        <select className="filter-select" name="Size">
          <option disabled>Size</option>
          <option>M</option>
          <option>XL</option>
          <option>L</option>
          <option>X</option>
        </select>
      </div>
    </div>
  );
}

export default FIlterProduct;
