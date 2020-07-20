import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]); //Its an array

	const addItem = item => {
		// add the given item to the cart
		console.log(item)
	return setCart([item])
	//cart is an array
	
	
	//holds item details in a object

	};
	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value= {{cart}} >
		<div className="App">

			<Navigation cart={cart} />

			{/* Routes */}
			
			<Route exact path="/">
				{/* <Products products={products} addItem={addItem} /> */}
				<Products />

			</Route>

			<Route path="/cart">
			{/* <ShoppingCart cart={cart} /> */}
				<ShoppingCart/>
			</Route>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
