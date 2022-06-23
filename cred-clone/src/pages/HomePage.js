import React from 'react';
import Header from '../components/common/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Product from '../components/Product/Product';


const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Product />
        </div>
    )
}

export default HomePage