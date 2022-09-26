import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';

function Catalog({ data }) {
  return (
    <div>
      <Filter />
      <Products data={data} />
    </div>
  );
}

export default Catalog;
