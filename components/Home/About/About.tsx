import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* Image content */}
                <div>
                    <Image src="/images/about.png" alt="about-image" width={600} height={600} />
                </div>

                {/* Text content */}
                <div>
                    <BoxText>About Us</BoxText>
                    <h1 className='capitalize text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]'>everything you need to grow your business</h1>
                    <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe voluptates illum impedit. Ipsum, sunt fuga. Totam facere vero autem omnis exercitationem maxime, dignissimos, animi debitis, quos est nihil modi quisquam rem atque eius fugit sint cum vel.
                    </p>
                    <button className='mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]'>Learn More &#8594; </button>
                    <div className='mt-8  border-l-2 border-gray-200'>
                        <div className='ml-6'>
                            <p className='text-gray-700 font-medium'>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam eius dolorum culpa veniam quas, vitae consequatur error soluta ad."
                            </p>
                            <div className='flex items-center space-x-6 mt-6'>
                                <Image src="/images/u1.jpg" alt="user" width={40} height={40} className='rounded-full' />
                                <div>
                                    <p className='font-medium'>Anjali Dogra</p>
                                    <p className='text-gray-700 text-sm'>Web Developer @Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About