import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Link from 'next/link'
import SvgComponent from './HerUi'

async function getData() {
    const query = "*[_type == 'heroimage'][0]"
    const data = await client.fetch(query)
    return data;
}

export default async function Hero() {
    const data = await getData()
    return (
        <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8'>
            <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
                <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
                    <h1 className='text-4xl font-bold leading-tight tracking-tight text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent lg:text-5xl mb-4'>
                        Top Casinos for Top <span className='text-yellow-300'>Players</span>
                    </h1>
                    <p className='text-lg text-gray-800 leading-relaxed mt-4'>
                        Step into the realm of exhilarating online casino entertainment with our dedicated platform! Discover top-notch reviews, exclusive bonuses, and invaluable insider insights to elevate your gaming journey.
                    </p>
                </div>
                <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                    <div className='relative flex justify-center items-center w-full'>
                      <SvgComponent
                      
                      className='w-full h-auto max-w-full max-h-[500px]'
                      />
                    </div>
                    
                </div>
                <div className='flex flex-col items-center gap-8 md:flex-row'>
                <nav className='my-6 flex flex-wrap justify-center gap-2 md:gap-4'>
                    {["Aus", "UK", "US", "Free", "French", "Blog"].map((category) => (
                        <Link
                            key={category}
                            href={`/${category}`}
                            className='px-2 py-1 text-xs md:text-base bg-gray-600 text-gray-200 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105'>
                            {category}
                        </Link>
                    ))}
                </nav>
                </div>
            </div>
        </section>
    )
}
