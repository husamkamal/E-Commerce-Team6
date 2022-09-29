import PropTypes from 'prop-types';
import './FilterProduct.css';

function FIlterProduct({ filterProduct, setFilterProduct }) {
  const handleChange = (e) => {
    setFilterProduct((prevState) => ({ ...prevState, price: +e.target.value }));
  };
  return (
    <div className="filter-product-container">
      <h1>filters</h1>
      <div className="filter-product-section">
        <select
          onChange={handleChange}
          className="filter-select"
          name="color"
          defaultValue={filterProduct.price}
        >
          <option value="100">$100</option>
          <option value="90">$90</option>
          <option value="80">$80</option>
          <option value="70">$70</option>
          <option value="60">$60</option>
          <option value="50">$50</option>
          <option value="40">$40</option>
          <option value="30">$30</option>
          <option value="20">$20</option>
          <option value="10">$10</option>
        </select>
      </div>
    </div>
  );
}
FIlterProduct.propTypes = {
  filterProduct: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.objectOf),
    price: PropTypes.number,
    search: PropTypes.string,
  }).isRequired,
  setFilterProduct: PropTypes.func.isRequired,
};
export default FIlterProduct;
