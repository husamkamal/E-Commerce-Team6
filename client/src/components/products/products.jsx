import PropTypes from 'prop-types';
import Card from './card';

function Products({ data }) {
  return (
    <ul className="products-list">
      {data.map((el) => (
        <Card key={el.id} info={el} />
      ))}
    </ul>
  );
}

Products.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Products;
