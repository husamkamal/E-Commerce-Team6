import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';
// eslint-disable-next-line import/no-named-as-default
import Search from '../../components/search/search';
import './Catalog.css';
import getProductsNames from '../../helper/requests';

function Catalog({ data }) {
  const [filterProduct, setFilterProduct] = useState({
    category: [{}],
    price: -1,
    page: -1,
  });
  const [names, setNames] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get('/api/v1/category');
      const arr = res.data.map((ele) => ({
        name: ele.name,
        id: ele.id,
        selected: false,
      }));
      setFilterProduct((prevState) => ({ ...prevState, category: arr }));
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    getProductsNames().then((res) => {
      setNames(res.names);
    });
  }, []);
  return (
    <section className="products-catalog">
      <Filter
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
      />
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
