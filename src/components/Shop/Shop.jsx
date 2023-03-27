import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const newPrice = price + parseInt(product.price);
        setPrice(newPrice)
        const newTax = tax + ((newPrice / 100 ) * 10);
        setTax(newTax)
        console.log(newCart)
      }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product = {product} 
                        key= {product.id} 
                        handleAddToCart = {handleAddToCart}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: ${tax}</p>
            </div>
        </div>
    );
};

export default Shop;