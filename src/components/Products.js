import React, { useContext } from 'react';
import {ProductContext} from '../contexts/ProductContext'
 
// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);

	return (
		
		<div className="products-container">
			{products.map(product => ( //data.map useState
				<Product
				
					key={product.id}
					product={product}
					addItem={addItem}
					//addItem(product)
				/>
				
				
			))}
		</div>
	);
};


//*****BELOW IS BEFORE THE CHANGE */

// const Products = props => {
// 	return (
// 		<div className="products-container">
// 			{props.products.map(product => ( //data.map useState
// 				<Product
				
// 					key={product.id}
// 					product={product}
// 					addItem={props.addItem}
// 					//addItem(product)
// 				/>
				
				
// 			))}
// 		</div>
// 	);
// };

export default Products;
