import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../components/login';
import Register from '../components/register';
import Product from '../pages/Product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/product:productId',
    element: <Product />,
  },
]);

export default router;
