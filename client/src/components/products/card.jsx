/* eslint-disable react/button-has-type */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const [visible, setVisible] = useState(false);

  const { info } = props;
  return (
    <Link to="/product:productId">
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
            backgroundImage: visible
              ? 'linear-gradient(to top, #1d1d1dc3, transparent)'
              : 'none',
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
    </Link>
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
