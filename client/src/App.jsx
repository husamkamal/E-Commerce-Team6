import Footer from './components/Footer/Footer';
import Catalog from './pages/Catalog/Catalog';
import Hero from './components/Hero/Hero';

const data = [
  {
    id: 2,
    name: 'Test Name',
    image:
      'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    price: 100,
  },
  {
    id: 66,
    name: 'Test Name',
    image:
      'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    price: 100,
  },
  {
    id: 5,
    name: 'Test Name',
    image:
      'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    price: 100,
  },
  {
    id: 61,
    name: 'Test Name',
    image:
      'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    price: 100,
  },
  {
    id: 34,
    name: 'Test Name',
    image:
      'https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    price: 100,
  },
];
export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Catalog data={data} />
      <Footer />
    </div>
  );
}
