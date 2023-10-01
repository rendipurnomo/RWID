import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main_container bg-green-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
