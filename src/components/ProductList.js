import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import CartButton from '@/components/CartButton';

const ProductList = ({ products }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-evenly">
            {products.map((product) => (
                <div key={product.id}>
                    <MDBCard className="flex justify-center items-center mx-auto border border-white rounded-xl p-3 m-3 shadow-xl" style={{ maxWidth: '22rem', height: '450px' }}>
                        <MDBCardBody className='text-center'>
                            <MDBCardImage src={product.image} alt={product.name} width={250} />
                            <MDBCardTitle className="truncate font-bold text-xl" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {product.name}
                            </MDBCardTitle>
                            {product.size && (
                                <MDBCardText className='p-2'>{product.size}</MDBCardText>
                            )}
                            <MDBCardText className='p-2'>Price: £{product.price}</MDBCardText>
                            <CartButton product={product} />
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>
    );
};

export default ProductList;