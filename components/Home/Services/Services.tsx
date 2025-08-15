import BoxText from '@/components/Helper/BoxText'
import React from 'react'
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { ServicesData } from './ServicesData'
import ServicesGridBoxes from '@/components/Helper/ServicesGridBoxes'



const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto'>
                <BoxText>Our Services</BoxText>
                {/* Heading */}
                <h1 className='capitalize mt-4 text-2xl md:text-3xl font-bold text-gray-800'>our services made for you?</h1>
                {/* Description */}
                <p className='mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt repellat pariatur fugiat impedit dicta laudantium aut commodi aspernatur voluptate.
                </p>


                {/* Grid */}
                <div
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16'>
                    {/* 1st service */}
                    {ServicesData.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <ServicesGridBoxes
                                key={index}
                                icon={<Icon className='w-6 h-6 text-orange-400' />}
                                textContentHeader={service.textContentHeader}
                                textContentDescription={service.textContentDescription} />
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Services