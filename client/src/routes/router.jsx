import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../components/login';
import Register from '../components/register';
import Order from '../pages/orders/orders';
import Product from '../pages/Product/Product';
import Catalog from '../pages/Catalog/Catalog';
import NotFount from '../pages/Errors/NotFount';
import ErrorPage from '../pages/Errors/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cart',
        element: <Order />,
      },
      {
        path: '/product/:productId',
        element: <Product />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFount />,
  },
]);

export default router;
