import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Sales from './Sales'
import ProductsContainer from './ProductsContainer';
import ProductItems from './ProductItems';
import ProductDetails from './ProductDetails';

function App() {
  // let OriginalPrice = 29.99
  // let DiscountedPrice = 15.99
  return (
    <div className="App">
      <NavBar/>

      <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/aboutus" element={<About/>}/>
        <Route path="/productpage" element={<ProductsContainer/>}/>
        <Route path = "/sales" element={<Sales/>}/>
        <Route path = "/products" element={<ProductItems/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>

      </Routes>

    </div>
  );
}

export default App;
