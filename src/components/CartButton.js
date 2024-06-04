import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from '@/stores/cartStore';

const CartButton = observer(({ product }) => {
    const handleAddToCart = () => {
        cartStore.addToCart(product);
        console.log('Item added to cart:', product); // Debugging log
    };

    return (
        <button onClick={handleAddToCart} className='addToCartButton border border-black rounded-xl px-4 py-1 m-4 mb-5 text-white'>
            Add to Cart
        </button>
    );
});

export default CartButton;