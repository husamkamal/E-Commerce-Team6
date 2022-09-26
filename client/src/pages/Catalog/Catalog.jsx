import PropTypes from 'prop-types';
import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';
import './Catalog.css';

function Catalog({ data }) {
  return (
    <section className="products-catalog">
      <Filter />
      <section className="products-container">
        <Products data={data} />
      </section>
    </section>
  );
}

Catalog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default Catalog;
