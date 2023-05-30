import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Sales from './Sales'
import ProductItems from './ProductItems';
import ProductsContainer from './ProductsContainer';

function App() {
  let OriginalPrice = 29.99
  let DiscountedPrice = 15.99
  return (
    <div className="App">
      <NavBar/>

      <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path = "/products" element={<Sales OriginalPrice={OriginalPrice} 
        DiscountedPrice={DiscountedPrice} />}/>
        <Route path="/products" element={<ProductsContainer/>}/>
        <Route path="/productlist/:id" element={<ProductItems/>}/>

      </Routes>

    </div>
  );
}

export default App;
