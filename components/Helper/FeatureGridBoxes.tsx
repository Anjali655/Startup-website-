import React from 'react'

type Props = {
    icon: React.ReactNode;
    title: string,
    description: string
};

const FeatureGridBoxes = ({ icon, title, description }: Props) => {
    return (
        <>
            {/* box */}
            < div className='bg-white p-4 rounded-lg' >
                <div className='flex items-center space-x-3'>
                    {/* Icon */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-300 bg-opacity-20'>
                        {icon}
                    </div>
                    {/* Heading */}
                    <h1 className='text-lg font-bold text-gray-700'>
                        {title}

                    </h1>
                </div>
                {/* Description */}
                <p className='mt-3 mb-3 text-gray-700 leading-relaxed'>
                    {description}
                </p>
            </ div>
        </>
    )
}

export default FeatureGridBoxes