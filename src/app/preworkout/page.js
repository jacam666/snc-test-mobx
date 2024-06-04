// "use client"

// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtnGroup } from 'mdb-react-ui-kit';
// import Products from '@/data/products';
// import CartButton from '@/components/CartButton';

// const PreWorkout = () => {
//     const preWorkoutProducts = Products.filter(product => product.category === 'preWorkout');

//     return (
//         <div>
//             {/* <h1 className="text-center text-5xl m-4">Protein Products</h1> */}
//             <div className="flex flex-wrap gap-4 justify-evenly">
//                 {preWorkoutProducts.map((product) => (
//                     <div key={product.id}>
//                         <MDBCard className="flex justify-center items-center mx-auto border border-white shadow-xl rounded-xl p-3 m-3" style={{ maxWidth: '22rem', height: '450px' }}>
//                             <MDBCardBody className='text-center'>
//                                 <MDBCardImage src={product.image} alt={product.name} width={250} />
//                                 <MDBCardTitle className="truncate font-bold text-lg" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                                     {product.name}
//                                 </MDBCardTitle>
//                                 <MDBCardText className='p-2'>{product.flavour}</MDBCardText>
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

// export default PreWorkout;
"use client";

import React from 'react';
import ProductList from '@/components/ProductList';
import Products from '@/data/products';

const PreWorkout = () => {
    const PreWorkoutProducts = Products.filter(product => product.category === 'preWorkout');

    return (
        <div>
            <h1 className="text-center text-5xl m-4">Pre-Workouts</h1>
            <ProductList products={PreWorkoutProducts} />
        </div>
    );
};

export default PreWorkout;
