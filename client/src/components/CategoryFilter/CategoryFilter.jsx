import './CategoryFIlter.css';
import PropTypes from 'prop-types';

export default function CategoryFilter({ filterProduct, setFilterProduct }) {
  const handleChange = (index) => {
    setFilterProduct((prevState) => {
      const selectedCategory = prevState.category[index];
      return {
        ...prevState,
        category: prevState.category.map((c) => {
          if (c.id === selectedCategory.id) {
            return { ...c, selected: !c.selected };
          }

          return c;
        }),
      };
    });
  };
  if (!filterProduct.category[0]) return <h1> loading...</h1>;

  return (
    <div className="category-container">
      <h1 className="header-filter">Category</h1>
      <div className="filter-category-container">
        {filterProduct.category.map((ele, index) => (
          <label key={ele.id} className="label-filter" htmlFor={ele.id}>
            <input
              className="input"
              id={ele.id}
              name={ele.name}
              type="checkbox"
              onClick={() => {
                handleChange(index);
              }}
            />
            {ele.name}
          </label>
        ))}
      </div>
    </div>
  );
}
CategoryFilter.propTypes = {
  filterProduct: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.objectOf),
    price: PropTypes.number,
    page: PropTypes.number,
  }).isRequired,
  setFilterProduct: PropTypes.func.isRequired,
};
