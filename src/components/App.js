import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Sales from './Sales'
import ProductsContainer from './ProductsContainer';

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

      </Routes>

    </div>
  );
}

export default App;
