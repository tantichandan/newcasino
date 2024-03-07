
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        
          price,
          name,
          click,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

    const data = await client.fetch(query)

    return data;



}

export default async function ProductPage({

    params,
}: {
    params: { slug: string }

}) {

    const data: fullProduct = await getData(params.slug)

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8 '>
                <div className='grid gap-8 md:grid-cols-2'>

                    <div>


                        <Image

                            src={data.imageUrl}
                            alt='photo'
                            width={600}
                            height={600}

                        />
                    </div>


                    <div className="mb-2 md:mb-3">
                        <span className="mb-0.5 inline-block text-gray-500">
                            {data.categoryName}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                            {data.name}
                        </h2>
                    </div>

                    <div className="mb-6 flex items-center gap-3 md:mb-10">
                        <Button className="rounded-full gap-x-2">
                            <span className="text-sm">4.2</span>
                            <Star className="h-5 w-5" />
                        </Button>


                    </div>

                    <div className="mb-4">
                        <div className="flex items-end gap-2">
                            <span className="text-xl font-bold text-gray-800 md:text-2xl">
                                ${data.price}
                            </span>
                            
                        </div>

                        <Link href={data.click} target='_blank'>
                            Claim the bonus of ${data.price} on first deposit
                        </Link>

                       
                    </div>


                </div>

            </div>

        </div>




    )


}
