import React from 'react'
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css';

function PricingCardSkeleton() {
  return (
    <>
      <div className="pricing-wrapper">
        {/* item */}
        <div className="pricing-item">
          <div className="pricing-title">
            <Skeleton width={300} height={20} />
          </div>
          <ul className='pricing-lists'>
              <Skeleton count={7} width={300} height={10} />
          </ul>
          <div className="pricing-action">
            <div className="pricing-price"><span className='price-amount-badge'>
            <Skeleton width={200} height={20} />
            </span></div>
            {/* <button className='landing-hero-action-btn'>Get Started</button>  */}
            <Skeleton width={100} height={20} />
          </div>
        </div>
        {/* item */}
        <div className="pricing-item">
          <div className="pricing-title">
            <Skeleton width={300} height={20} />
          </div>
          <ul className='pricing-lists'>
              <Skeleton count={7} width={300} height={10} />
          </ul>
          <div className="pricing-action">
            <div className="pricing-price"><span className='price-amount-badge'>
            <Skeleton width={200} height={20} />
            </span></div>
            {/* <button className='landing-hero-action-btn'>Get Started</button>  */}
            <Skeleton width={100} height={20} />
          </div>
        </div>
        {/* item */}
        <div className="pricing-item">
          <div className="pricing-title">
            <Skeleton width={300} height={20} />
          </div>
          <ul className='pricing-lists'>
              <Skeleton count={7} width={300} height={10} />
          </ul>
          <div className="pricing-action">
            <div className="pricing-price"><span className='price-amount-badge'>
            <Skeleton width={200} height={20} />
            </span></div>
            {/* <button className='landing-hero-action-btn'>Get Started</button>  */}
            <Skeleton width={100} height={20} />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default PricingCardSkeleton