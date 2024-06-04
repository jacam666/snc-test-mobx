// "use client"

// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
// import Products from '@/data/products';
// import CartButton from '@/components/CartButton';

// const FatBurners = () => {
//     const fatBurnersProducts = Products.filter(product => product.category === 'fatBurners');

//     return (
//         <div>
//             <h1 className="text-center text-5xl m-4"></h1>
//             <div className="flex flex-wrap gap-4 justify-evenly">
//                 {fatBurnersProducts.map((product) => (
//                     <div key={product.id}>
//                         <MDBCard className="flex justify-center items-center mx-auto border border-white rounded-xl p-3 m-3 shadow-xl" style={{ maxWidth: '22rem', height: '450px' }}>
//                             <MDBCardBody className='text-center'>
//                                 <MDBCardImage src={product.image} alt={product.name} width={250} />
//                                 <MDBCardTitle className="truncate font-bold text-xl" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                                     {product.name}
//                                 </MDBCardTitle>
//                                 <MDBCardText className='p-2'>{product.size}</MDBCardText>
//                                 <MDBCardText className='p-2'>Price: £{product.price}</MDBCardText>
//                                 <CartButton product={product} />
//                             </MDBCardBody>
//                         </MDBCard>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FatBurners;

"use client";

import React from 'react';
import ProductList from '@/components/ProductList';
import Products from '@/data/products';

const FatBurners = () => {
    const fatBurnersProducts = Products.filter(product => product.category === 'fatBurners');

    return (
        <div>
            <h1 className="text-center text-5xl m-4">Fat Burners</h1>
            <ProductList products={fatBurnersProducts} />
        </div>
    );
};

export default FatBurners;