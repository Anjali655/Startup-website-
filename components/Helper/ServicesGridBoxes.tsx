import React from 'react'

type Props = {
    icon: React.ReactNode;
    textContentHeader: string
    textContentDescription: string
};

const ServicesGridBoxes = ({ icon, textContentHeader, textContentDescription }: Props) => {
    return (
        <div className='flex items-center space-x-5'>
            {/* Icon */}
            <div className='w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500/20'>
                {icon}
            </div>
            {/* Text content */}
            <div>
                <p className='text-lg font-bold text-gray-700'>{textContentHeader}</p>
                <p className='text-sm text-gray-600'>{textContentDescription}</p>
            </div>
        </div>

    )
}

export default ServicesGridBoxes