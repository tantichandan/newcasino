import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import { buttonVariants } from '@/components/ui/button';
import { PortableText } from '@portabletext/react';
import { StarIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const data: fullProduct = await getData(params.slug);

    return (
        <div className='flex flex-col gap-16 flex-wrap px-6 justify-center items-center md:px-20 py-24'>
            <Head>
                <title>{data.name} Casino - TheCasinoLoot</title>
                <meta name="description" content={`Discover ${data.name} Casino with a welcome bonus of $${data.price}. Explore games, reviews, and more!`} />
            </Head>
            <div className='flex gap-28 xl:flex-row flex-col'>
                <div className='flex-grow xl:max-w-[50%] max-w-full py-16'>
                    <Image
                        alt="product"
                        src={data?.imageUrl}
                        width={300} // Ensure this matches the original or aspect ratio
                        height={200} // Ensure this matches the original or aspect ratio
                        quality={100} // Maintain original quality
                        className='mx-auto rounded-[17px]'
                    />
                </div>

                <div className='flex-1 flex flex-col'>
                    <div className='flex justify-between items-start gap-5 pb-6'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl'>
                                <span className='text-primary'>{data?.name} Casino</span>
                            </h1>
                        </div>
                    </div>

                    <div className='flex items-center flex-wrap gap-10 py-6'>
                        <div className='flex flex-col gap-2'>
                            <p className='scroll-m-20 text-xl font-semibold tracking-tight'>Welcome Bonus: {data.price}</p>
                            <div>
                                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                    {data.content.map((contentItem: any, index: any) => (
                                        <li key={index}>
                                            <PortableText value={contentItem} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <Link
                                    className={buttonVariants()}
                                    href={data?.click}
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
                                        {data.reviews.map((review: any, index: any) => (
                                            <PortableText key={index} value={review} />
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-8 border-1-black'>
                <div className='flex flex-col gap-2'>
                    <h1 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight'>
                        About the casino <span className='text-primary font-bold'>{data.name}</span>
                    </h1>
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
    );
}
