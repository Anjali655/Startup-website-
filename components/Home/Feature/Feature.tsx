import React from 'react'
import { featureData } from './featureData'
import FeatureGridBoxes from '@/components/Helper/FeatureGridBoxes'
import Image from 'next/image'

const Feature = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            {/* Heading*/}
            <div>
                <h1 className='capitalize text-center text-blue-950 text-2xl font-bold'>Key Features of the product</h1>
                <p className='mt-3 text-center mx-auto w-[90%] font-medium text-gray-700 sm:w-[70%] md:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio provident id dolor! Dolorem voluptate minima ratione voluptatum consequuntur quisquam.</p>
            </div>

            {/* Main Grid */}
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
                {/* Inner Grid*/}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center' >
                    {featureData.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <FeatureGridBoxes
                                key={index}
                                icon={<Icon className="w-6 h-6 text-orange-400" />}
                                title={feature.title}
                                description={feature.description} />
                        )
                    })}
                </div>
                {/* Image content */}
                <div>
                    <Image
                        src="/images/f1.png"
                        alt="f1-image"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    )
}

export default Feature