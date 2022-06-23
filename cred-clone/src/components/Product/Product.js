import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product-show">
            <div className="product-show-wrapper">
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="mockup" className='showcase-pics showcase-mockup-1' />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="" className="showcase-pics showcase-mockup-2" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="" className="showcase-pics showcase-mockup-3" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="" className="showcase-pics showcase-mockup-4" />
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="" className="showcase-pics showcase-mockup-5" />
            </div>
        </div>
    )
}

export default Product;