import React from 'react'
import PriceCard from './PriceCard'
import { PricingData } from './PricingData'

const Pricing = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            <h1 className='text-center text-blue-950 text-2xl font-bold capitalize'>choose the plan that is right for you</h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam autem neque voluptates illo. Iste!
            </p>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>

                {PricingData.map((price, index) => {
                    return (
                        <PriceCard
                            key={index}
                            time={price.time}
                            price={price.price}
                        />
                    )
                })}


            </div>
        </div>
    )
}

export default Pricing