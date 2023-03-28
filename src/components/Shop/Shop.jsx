import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const savedCart = [];
        const storedCart = getShoppingCart();
        // Step 1: get id
        for(const id in storedCart){
            // Step 2: Get the product by product id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // Step 3: Get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // Step 4: Add the product to the saved Cart
                savedCart.push(addedProduct);
            }
            console.log(addedProduct)
        }
        // Step 5: Set the Cart 
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // If product doesn't exists in the cart, then set quantity = 1
        // else update the quantity by 1
        const exists = cart.find((item => item.id === product.id));
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;