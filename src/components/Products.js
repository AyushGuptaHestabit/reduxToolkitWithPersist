import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    const getCartButton = (product) => {
        if (products) {
            let inCart;
            cart.map((elem) => {
                if (elem.id == product.id) {
                    inCart = true;
                }
            })
            if (inCart) {
                return <>
                    <button onClick={() => handleRemove(product.id)} className="btn1">
                        Remove from Cart
                    </button>
                </>
            } else {
                return <>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </>
            }
        }
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <>
                    <div className="card" key={product.id}>
                        <div className="card-header">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="card-body">
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                        </div>
                        <div className="card-footer">
                            {getCartButton(product)}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Products;
