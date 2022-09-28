import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';
// eslint-disable-next-line import/no-named-as-default
import Search from '../../components/search/search';
import './Catalog.css';
import { getProductsNames } from '../../helper/requests';

function Catalog({ data }) {
  const [names, setNames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getProducts(filters, controller).then((res) => setData(res));
    return () => {
      controller.abort();
    };
  }, [filters]);

  const changeCategory = (newCategory) => {
    setFilters((prevState) => ({
      ...prevState,
      category: newCategory,
    }));
  };

  const changeSearch = (newSearchInput) => {
    setFilters((prevState) => ({
      ...prevState,
      search: newSearchInput,
    }));
  };

  useEffect(() => {
    getProductsNames().then((res) => {
      setNames(res.names);
    });
  }, []);
  return (
    <section className="products-catalog">
      <Filter />
      <section className="products-container">
        <Search names={names} changeSearch={changeSearch} />
        <Products data={data} />
      </section>
    </section>
  );
}

// Catalog.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
// };
export default Catalog;
