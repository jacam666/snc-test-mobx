"use client"

import dynamic from 'next/dynamic';

const Basket = dynamic(() => import('../../components/Basket'), { ssr: false });

const BasketPage = () => {
    return <Basket />;
};

export default BasketPage;
