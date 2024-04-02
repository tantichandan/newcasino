import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import Link from 'next/link'

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

                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Top Casinos for top <span className='text-primary'>players</span>
                    </h1>

                    <p className='leading-7 [&:not(:first-child)]:mt-6'>

                    Step into the realm of exhilarating online casino entertainment with our dedicated platform! Discover top-notch reviews, exclusive bonuses, and invaluable insider insights to elevate your gaming journey. 
                    </p>

                </div>

                <div className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
                    <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shado-lg md:left-16 md:top-16 lg:ml-0'>

                        <Image

                            src={urlFor(data.image1).url()}
                            alt='great photo'
                            className='h-full w-full object-cover object-center'
                            width={150}
                            height={150}
                            priority


                        />

                    </div>

                    <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>

                        <Image

                            src={urlFor(data.image2).url()}
                            alt='great photo'
                            className='h-full w-full object-cover object-center'
                            width={500}
                            height={500}
                            priority


                        />

                    </div>

                </div>

                <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
                    <div className='flex justify-evenly h-12 w-64 divide-x overflow-hidden rounded-lg border'>
                        <Link href="/Aus" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Aus 

                        </Link>
                        <Link href="/UK" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            UK  

                        </Link>
                        <Link href="/US" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            US

                        </Link>
                        <Link href="/Deposit" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Dep

                        </Link>
                        <Link href="/Free" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            ND

                        </Link>

                        <Link href="/Blog" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            Blog

                        </Link>

                        <Link href="/allproduct" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

                            All

                        </Link>

                    </div>

                </div>

            </div>

        </section>
    )
}
