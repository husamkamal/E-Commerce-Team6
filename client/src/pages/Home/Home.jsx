import Hero from '../../components/Hero/Hero';
import Products from '../../components/products/products';

const data = [{ id: 5, name: 'test', image: 'test', price: 10 }];
function Home() {
  return (
    <div>
      <Hero />
      <Products data={data} />
    </div>
  );
}

export default Home;
