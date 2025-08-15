import Image from 'next/image';
import React from 'react'
import { BsStarHalf } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

type Props = {
    image: string,
    name: string,
    ratings: string
};

const ClientReviewCard = ({ image, name, ratings }: Props) => {
    return (
        <div className='bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg'>
            {/* Image */}
            <Image
                src={image}
                alt={name}
                width={150}
                height={150}
                className='rounded-lg'
            />
            <div className='flex flex-col'>
                <h1 className='text-lg font-bold text-blue-950'>{name}</h1>
                <div className='flex  items-center space-x-3'>
                    <p className='text-2xl font-bold text-orange-500'>{ratings}</p>
                    <div className='flex items-center'>
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <FaStar className='w-4 h-4 text-yellow-600' />
                        <BsStarHalf className='w-4 h-4 text-yellow-600' />
                    </div>
                </div>
                <p className='mt-2 text-base text-gray-700 font-medium'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, repellendus?
                </p>
            </div>
        </div>
    )
}

export default ClientReviewCard
