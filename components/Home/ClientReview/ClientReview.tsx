import React from 'react'
import { ClientReviewCardData } from './ClientReviewCardData'
import ClientReviewCard from './ClientReviewCard'

const ClientReview = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            {/* Heading */}
            <h1 className='text-center text-2xl text-blue-950 font-bold'>what our client says</h1>
            {/* Sub heading */}
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis nihil, est blanditiis quisquam aliquam?
            </p>
            {/* Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>

                {ClientReviewCardData.map((reviewData, index) => {
                    return (
                        <ClientReviewCard key={index}
                            image={reviewData.image}
                            name={reviewData.name}
                            ratings={reviewData.ratings} />
                    )
                })}

            </div>
        </div>
    )
}

export default ClientReview 