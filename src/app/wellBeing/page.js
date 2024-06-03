"use client"

import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtnGroup } from 'mdb-react-ui-kit';
import Link from 'next/link';
import Products from '@/data/products';
import CartButton from '@/components/CartButton';

const WellBeing = () => {
    const WellBeingProducts = Products.filter(product => product.category === 'wellBeing');

    return (
        <div>
            {/* <h1 className="text-center text-5xl m-4">Protein Products</h1> */}
            <div className="flex flex-wrap gap-4 justify-evenly">
                {WellBeingProducts.map((product) => (
                    <div key={product.id}>
                        <MDBCard className="flex justify-center items-center mx-auto border border-white rounded-xl p-3 m-3 shadow-xl" style={{ maxWidth: '22rem', height: '450px' }}>
                            <MDBCardBody className='text-center'>
                                <MDBCardImage src={product.image} alt={product.name} width={250} />
                                <MDBCardTitle className="truncate font-bold text-xl" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {product.name}
                                </MDBCardTitle>
                                <MDBCardText className='p-2'>{product.flavour}</MDBCardText>
                                <MDBCardText className='p-2'>Size: {product.size}</MDBCardText>
                                <MDBCardText className='p-2'>Price: £{product.price}</MDBCardText>
                                <CartButton product={product} />
                            </MDBCardBody>
                        </MDBCard>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default WellBeing;
