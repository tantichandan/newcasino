
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity'
import { Badge, badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from '@/components/ui/button';
import { PortableText } from '@portabletext/react';
import { StarIcon } from '@radix-ui/react-icons';
import { Star, Truck } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"





async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        
          price,
          name,
          click,
          content[0...5],
          reviews[0...3],
          description,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[3].asset->url
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

        <div className='flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24'>
            <div className='flex gap-28 xl:flex-row flex-col'>

                <div className='flex-grow xl:max-w-[50%] max-w-full py-16'>

                    <Image

                        alt="product"
                        src={data.imageUrl}
                        width={400}
                        height={350}
                        className='mx-auto rounded-[17px]'

                    />

                </div>

                <div className='flex-1 flex flex-col'>

                    <div className='flex justify-between items-start gap-5 pb-6'>

                        <div className=' flex flex-col gap-3'>

                            <h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl'>

                                <span className='text-primary'>{data.name}</span>


                            </h1>








                        </div>


                    </div>

                    <div className='flex items-center flex-wrap gap-10 py-6'>

                        <div className='flex flex-col gap-2'>



                            <p className='scroll-m-20 text-xl font-semibold tracking-tight'>Welcome Bonus ${data.price}</p>

                            <div>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">

                                    <li><PortableText

                                        value={data.content[0]}

                                    /></li>

                                    <li><PortableText

                                        value={data.content[1]}

                                    /></li>

                                    <li><PortableText

                                        value={data.content[2]}

                                    /></li>

                                    <li><PortableText

                                        value={data.content[3]}

                                    /></li>

                                    <li><PortableText

                                        value={data.content[4]}

                                    /></li>






                                </ul>
                            </div>






                            <div>
                                <Link

                                    className={buttonVariants()}

                                    href={data.click}

                                    target="_blank"

                                >

                                    Claim Now

                                </Link>
                            </div>



                        </div>

                       
                            <div className='flex gap-2'>
                                <div className='flex items-center gap-2 px-3 py-2 bg-[#FBF3EA] rounded-[27px]'>

                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />

                                </div>

                            </div>

                            <p className='text-sm text-black opacity-50'>
                                <span className='text-primary font-semibold '>90%</span> players choice
                            </p>

                            <div>
                            <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Reviews</AccordionTrigger>
                                        <AccordionContent>
                                            <PortableText   value={data.reviews[0]} />
                                            <PortableText   value={data.reviews[1]} />
                                            <PortableText   value={data.reviews[2]} />
                     
                                        </AccordionContent>

                                        
                                    

                                    </AccordionItem>
                                </Accordion>
                            </div>


                    </div>



                </div>



            </div>

            <div className='flex flex-col gap-8 border-1-black'>

                <div className='flex flex-col gap-2'>
                    <h1 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>About the casino <span className='text-primary font-bold'>{data.name}</span></h1>

                    <div className='flex flex-col gap-2'>

                        <p className='leading-7 [&:not(:first-child)]:mt-6'>{data.description}</p>

                    </div>


                </div>

                <div>
                    <Link

                        className={buttonVariants()}

                        href={data.click}

                        target="_blank"

                    >

                        Start Playing

                    </Link>
                </div>






            </div>


        </div>





        //<div className='bg-white'>
        // <div className='mx-auto max-w-screen-xl px-4 md:px-8 '>
        //<div className='grid gap-8 md:grid-cols-2'>

        //<div>


        //<Image

        //src={data.imageUrl}
        //alt='photo'
        //width={600}
        //height={600}

        // />
        // </div>


        //<div className="mb-2 md:mb-3">
        //<span className="mb-0.5 inline-block text-gray-500">
        //{data.categoryName}
        //</span>
        //<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
        // {data.name}
        //</h2>
        //</div>

        //<div className="mb-6 flex items-center gap-3 md:mb-10">
        //<Button className="rounded-full gap-x-2">
        //<span className="text-sm">4.2</span>
        //<Star className="h-5 w-5" />
        //</Button>


        // </div>

        // <div className="mb-4">
        //   <div className="flex items-end gap-2">
        //     <span className="text-xl font-bold text-gray-800 md:text-2xl">
        //       ${data.price}
        // </span>

        //</div>

        // <Link href={data.click} target='_blank'>
        //  Claim the bonus of ${data.price} on first deposit
        //</Link>


        //</div>


        //</div>

        //</div>

        // </div>




    )


}
