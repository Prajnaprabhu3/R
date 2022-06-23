import React, { useState, useRef, useEffect } from 'react';
import './Product.css';

const Product = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);

    const toggleAnimation = (e) => {
        if (e[0]?.isIntersecting) {
            setShowAnimation(true);
        }
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };


    useEffect(() => {
        const observer = new IntersectionObserver(toggleAnimation, options);
        if (!showAnimation) {
            if (ref.current) {
                observer.observe(ref.current);
            }
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    });

    return (
        <div className={`product-show ${showAnimation ? "scale-up-bottom" : ""}`}
            ref={ref}>
            {showAnimation && (
                <div className="product-show-wrapper">
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt="mockup" className='showcase-pics showcase-mockup-1' />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt="" className="showcase-pics showcase-mockup-2" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt="" className="showcase-pics showcase-mockup-3" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="" className="showcase-pics showcase-mockup-4" />
                    <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="" className="showcase-pics showcase-mockup-5" />
                </div>
            )}
        </div>
    )
}

export default Product;