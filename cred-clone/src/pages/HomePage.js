import React from 'react';
import Header from '../components/common/Header/Header';
import FeelSpecial from '../components/FeelSpecial/FeelSpecial';
import HeroSection from '../components/HeroSection/HeroSection';
import Product from '../components/Product/Product';


const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Product />
            <FeelSpecial />
        </div>
    )
}

export default HomePage