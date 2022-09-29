import PropTypes from 'prop-types';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import FIlterProduct from '../FIlterProduct/FIlterProduct';
import './Filter.css';

function Filter({ filterProduct, setFilterProduct }) {
  return (
    <div className="filter-sidebar">
      <CategoryFilter
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
      />
      <FIlterProduct
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
      />
    </div>
  );
}

Filter.propTypes = {
  filterProduct: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.objectOf),
    price: PropTypes.number,
    search: PropTypes.string,
  }).isRequired,
  setFilterProduct: PropTypes.func.isRequired,
};

export default Filter;
