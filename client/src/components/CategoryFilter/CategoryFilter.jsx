import './CategoryFIlter.css';

export default function CategoryFilter() {
  return (
    <div className="category-container">
      <h1 className="header-filter">Category</h1>
      <div className="filter-category-container">
        <label className="label-filter" htmlFor="tanks">
          <input className="input" id="tanks" type="checkbox" />
          TEES AND TANKS
        </label>
        <label className="label-filter" htmlFor="shirts">
          <input className="input" id="shirts" type="checkbox" />
          SHIRTS
        </label>
        <label className="label-filter" htmlFor="shoes">
          <input className="input" id="shoes" type="checkbox" />
          SHOES
        </label>
        <label className="label-filter" htmlFor="jackets">
          <input className="input" id="jackets" type="checkbox" />
          JACKETS
        </label>
        <label className="label-filter" htmlFor="short">
          <input className="input" id="short" type="checkbox" />
          SHORTS
        </label>
        <label className="label-filter" htmlFor="jeans">
          <input className="input" id="jeans" type="checkbox" />
          JEANS
        </label>
        <label className="label-filter" htmlFor="sale">
          <input className="input" id="sale" type="checkbox" />
          SALE
        </label>
      </div>
    </div>
  );
}
