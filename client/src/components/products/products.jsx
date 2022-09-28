import Card from './card';

function Products() {
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

  return (
    <ul className="products-list">
      {data.map((el) => (
        <Card key={el.id} info={el} />
      ))}
    </ul>
  );
}

// Products.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
// };

export default Products;
