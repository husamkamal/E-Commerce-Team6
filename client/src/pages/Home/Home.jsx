import { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Products from '../../components/products/products';
import { getMainProduct } from '../../helper/requests';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMainProduct().then((res) => setData(res));
  }, []);
  return (
    <div>
      <Hero />
      <Products data={data} />
    </div>
  );
}

export default Home;
