import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';
// eslint-disable-next-line import/no-named-as-default
import Search from '../../components/search/search';
import './Catalog.css';
import getProductsNames from '../../helper/requests';

function Catalog({ data }) {
  const [names, setNames] = useState([]);
  useEffect(() => {
    getProductsNames().then((res) => {
      setNames(res.names);
    });
  }, []);
  return (
    <section className="products-catalog">
      <Filter />
      <section className="products-container">
        <Search names={names} />
        <Products data={data} />
      </section>
    </section>
  );
}

Catalog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default Catalog;
