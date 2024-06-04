// "use client"

// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
// //import Link from 'next/link';
// import Products from '@/data/products';
// import CartButton from '@/components/CartButton';
// //import { Card, CardBody } from 'react-bootstrap';

// const Training = () => {
//     const TrainingProducts = Products.filter(product => product.category === 'trainingPlans');

//     return (
//         <div>
//             {/* <h1 className="text-center text-5xl m-4">Protein Products</h1> */}
//             <div className="flex flex-wrap gap-4 justify-evenly">
//                 {TrainingProducts.map((product) => (
//                     <div key={product.id}>
//                         <MDBCard className="flex justify-center items-center mx-auto border border-white rounded-xl p-3 m-3 shadow-lg" style={{ maxWidth: '22rem', height: '450px' }}>
//                             <MDBCardBody className='text-center'>
//                                 <MDBCardImage src={product.image} alt={product.name} width={250} />
//                                 <MDBCardTitle className="truncate font-bold text-xl mt-3" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                                     {product.name}
//                                 </MDBCardTitle>
//                                 <MDBCardText className='p-2'>{product.flavour}</MDBCardText>
//                                 <MDBCardText className='p-2'>With 1 hour consultation</MDBCardText>
//                                 <MDBCardText className='p-2'>Price: £{product.price}</MDBCardText>
//                                 <div className='mb-4'>
//                                 <CartButton product={product} />
//                                 </div>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </div>
//                 ))}
//                 <MDBCard className='border border-white rounded-xl p-3 shadow-lg' style={{ maxWidth: '22rem', height: '450px' }}>
//                     <MDBCardBody>
//                         <MDBCardImage src='images/snc images/nutritionCertificate.jpg' alt='certificate' width={450} className='my-auto'/>
//                     </MDBCardBody>
//                 </MDBCard>
//             </div>
//         </div>
//     );
// };

// export default Training;

"use client";

import React from 'react';
import ProductList from '@/components/ProductList';
import Products from '@/data/products';

const TrainingPlans = () => {
    const trainingPlansProducts = Products.filter(product => product.category === 'trainingPlans');

    return (
        <div>
            <h1 className="text-center text-5xl m-4">Training Plans</h1>
            <ProductList products={trainingPlansProducts} />
        </div>
    );
};

export default TrainingPlans;
