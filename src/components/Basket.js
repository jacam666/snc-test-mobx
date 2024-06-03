import React from 'react';
import { observer } from 'mobx-react-lite';
import cartStore from '@/stores/cartStore';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';

const Basket = observer(() => {
    console.log('Rendering Basket with items:', cartStore.cartItems.slice()); // Debugging log

    return (
        <div>
            <h1 className="text-center text-5xl my-5">Basket</h1>
            {cartStore.cartItems.length === 0 ? (
                <p className='text-center'>Your basket is empty</p>
            ) : (
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-evenly mx-5'>
                    {cartStore.cartItems.map((item, index) => (
                        <MDBCard key={index}>
                            <MDBCardImage src={item.image} alt={item.name} />
                            <MDBCardBody>
                                {item.name} - £{item.price}
                            </MDBCardBody>
                        </MDBCard>
                    ))}
                </div>
            )}
            <div className='flex justify-center text-center m-6'>
                <button className='border border-black px-6 py-1 rounded-lg'>Go to Checkout</button>
            </div>
        </div>
    );
});

export default Basket;
