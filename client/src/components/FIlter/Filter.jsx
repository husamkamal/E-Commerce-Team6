import PropTypes from 'prop-types';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

// import FIlterProduct from '../FIlterProduct/FIlterProduct';
import './Filter.css';

// eslint-disable-next-line react/prop-types
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

// Filter.defaultProps = {
//   filters: { category: 'all', search: '' },
// };
export default Filter;
