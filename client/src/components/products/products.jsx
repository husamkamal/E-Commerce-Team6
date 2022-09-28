import PropTypes from 'prop-types';
import Card from './card';

function Products({ data }) {
  // useEffect(() => {
  //   fetch('/api/v1/name')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log('hello', err));
  // }, []);

  // const data = [];
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
