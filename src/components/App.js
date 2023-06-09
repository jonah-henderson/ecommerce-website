import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import './App.css';
import NavBar from './NavBar';


function App() {

  /* TODO: create a new piece of state
    It should represent the current state of the shopping cart
    as an array of product IDs. The default value should be
    an empty array

    let [..., ...] = useState(...)
  */

  /* TODO: create the value we will pass to the rest of the app as context

  This will be an object that holds a few things:
    - The state of the shopping cart that we defined above
    - Methods that child components can use to alter the state
      - addProductToCart(productId)
      - removeProductFromCart(productId)
      - clearCart()

  The commented object below has everything needed except the interactions with the
  cart context

  const cartContextValue = {
    productsInCart: ?, // initialise with the value of the cart state from above
    addProductToCart: function(productId) {

      const oldCartContents = ?; // initialise with the old contents of the cart (productsInCart)

      // any time we work with arrays in React state, we have to make copies or things will not work
      const newCartContents = [...oldCartContents, productId]; // adds the parameter productId to the end of the copy

      // use the state setter from above to set the App's cart state
      // with the newCartContents
    },
    removeProductFromCart: function(productId) {
      const oldCartContents = ?; // initialise with the old contents of the cart (productsInCart)
      const productIndex = oldCartContents.indexOf(productId);
      let newCartContents = Array.from(oldCartContents); // make a copy, otherwise things will not work
      newCartContents.splice(productIndex, 1); // removes the product from the array

      // use the state setter from above to set the App's cart state
      // with the newCartContents
    },
    clearCart: function() {
      // use the state setter from above to set the App's cart state
      // to an empty array
    }
  }
  */

  return (
    // TODO: Wrap everything in a Provider that supplies
    //       the value we created above to the rest of the app
    //       <ReplaceWithYourContext.Provider value={cartContextValue}>
    //          ...
    //       </ReplaceWithYourContext.Provider>
    <div className="App">
      <ToastContainer
      position='top-center'
      autoClose={5000}/>
      <NavBar/>
      <div id="content">
        <Outlet/>
      </div>

    </div>
  );
}

export default App;
