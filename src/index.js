import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Checkout from './components/Checkout';
import ProductsContainer from './components/ProductsContainer';
import About from './components/About';
import Sales from './components/Sales'
import ProductItems from './components/ProductItems';
import ProductDetails, { loadProduct } from './components/ProductDetails';


const router = createBrowserRouter([
    {path: "/", element: <App/>, children:[
        {path: "/aboutus", element: <About/>},
        {path: "/productpage", element: <ProductsContainer/>},
        {path: "/sales", element: <Sales/>},
        {path: "/products", element: <ProductItems/>},
        {path: "/product/:id", loader:loadProduct, element: <ProductDetails/>},
        {path: "/checkout", element: <Checkout/>}
    ]},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

