import React from 'react';

// Components
import Product from './Product';
const Products = props => {
	return (
		<div className="products-container">
			{props.products.map(product => ( //data.map useState
				<Product
				
					key={product.id}
					product={product}
					addItem={props.addItem}
					//addItem(product)
				/>
				
				
			))}
		</div>
	);
};

export default Products;
