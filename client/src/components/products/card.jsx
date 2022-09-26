/* eslint-disable react/button-has-type */
import { useState } from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const [visible, setVisible] = useState(false);

  const { info } = props;
  return (
    <li
      onMouseOver={() => setVisible(true)}
      onFocus={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
      onBlur={() => setVisible(false)}
      style={{
        backgroundImage: `url(${info.image})`,
      }}
      className="product"
    >
      <div
        className="product-content"
        style={{
          backdropFilter: visible ? 'blur(1px) grayscale(70%)' : 'none',
        }}
      />
      <div
        style={{ display: visible ? 'block' : 'none' }}
        className="price-mark"
      >
        <span className="price"> ${info.price}</span>
      </div>
      {/* <img className="product-image" src={info.image} alt="info.name" /> */}

      <button
        style={{ display: visible ? 'block' : 'none' }}
        className="add-btn"
      >
        {' '}
        ADD TO BAG
      </button>
    </li>
  );
}

Card.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
