/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  const { info } = props;
  return (
    <li style={{ backgroundImage: `url(${info.image})` }} className="product">
      <div className="price-mark">
        <span className="price">${info.price}</span>
      </div>
      {/* <img className="product-image" src={info.image} alt="info.name" /> */}

      <button className="add-btn">ADD TO BAG</button>
    </li>
  );
}
Product.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
export default Product;
