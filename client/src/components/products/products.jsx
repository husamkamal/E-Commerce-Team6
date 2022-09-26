import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

function Products(props) {
  const { data } = props;
  return (
    <section className="products-container">
      <ul className="products-list">
        {data.map((ele) => (
          <Card key={ele.id} info={ele} />
        ))}
      </ul>
      <div className="page-index">test</div>
    </section>
  );
}

Products.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Products;
