import './App.css';
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar';

function App() {
  // let OriginalPrice = 29.99
  // let DiscountedPrice = 15.99
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>

    </div>
  );
}

export default App;
