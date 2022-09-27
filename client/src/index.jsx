import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import router from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
