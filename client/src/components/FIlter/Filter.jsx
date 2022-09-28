import PropTypes from 'prop-types';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

// import FIlterProduct from '../FIlterProduct/FIlterProduct';
import './Filter.css';

function Filter({ categories, filters, changeCategory }) {
  return (
    <div className="filter-sidebar">
      <CategoryFilter
        categories={categories}
        filter={filters.category}
        changeCategory={changeCategory}
      />
      {/* <FIlterProduct /> */}
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  filters: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.bool),
    search: PropTypes.string,
  }).isRequired,
  changeCategory: PropTypes.func.isRequired,
};

// Filter.defaultProps = {
//   filters: { category: 'all', search: '' },
// };
export default Filter;
