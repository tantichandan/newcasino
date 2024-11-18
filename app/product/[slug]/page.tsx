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
import Submenu from '@/app/components/Submenu';

// Fetch product data by slug
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
        "imageUrl": images[3].asset->url,
        withdrawal,
        payments,
        countries,
        language
    }`;

    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const data: fullProduct = await getData(params.slug);

    // Handle case if data is not found
    if (!data) {
        return <p>Product not found!</p>;
    }

    // Generate the canonical URL
    const canonicalUrl = `https://www.yoursite.com/product/${params.slug}`;

    return (
        <div className="flex flex-col gap-16 px-6 py-24 justify-center items-center md:px-20 bg-gray-100">
            <Head>
                {/* Page Title */}
                <title>{data.name} Casino - TheCasinoLoot</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content={`Discover ${data.name} Casino with a welcome bonus of $${data.price}. Explore games, reviews, and more!`}
                />

                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* OpenGraph Meta Tags */}
                <meta property="og:title" content={`${data.name} Casino - TheCasinoLoot`} />
                <meta
                    property="og:description"
                    content={`Discover ${data.name} Casino with a welcome bonus of $${data.price}. Explore games, reviews, and more!`}
                />
                <meta property="og:image" content={data.imageUrl} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="TheCasinoLoot" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${data.name} Casino - TheCasinoLoot`} />
                <meta
                    name="twitter:description"
                    content={`Discover ${data.name} Casino with a welcome bonus of $${data.price}. Explore games, reviews, and more!`}
                />
                <meta name="twitter:image" content={data.imageUrl} />
                <meta name="twitter:site" content="@YourTwitterHandle" />

                {/* Optional Mobile Optimization */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Structured Data (JSON-LD) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": data.name,
                            "description": data.description,
                            "image": data.imageUrl,
                            "offers": {
                                "@type": "Offer",
                                "priceCurrency": "USD",
                                "price": data.price,
                                "url": canonicalUrl,
                                "availability": "https://schema.org/InStock",
                            },
                        }),
                    }}
                />
            </Head>

            <Submenu />

            {/* Main Card with Sharp Edges */}
            <div className="bg-white shadow-xl p-8 w-full max-w-3xl mx-auto">
                {/* Image Section */}
                <div className="relative mb-6 w-full">
                    <Image
                        alt={`${data.name} Casino Image`}
                        src={data?.imageUrl}
                        layout="responsive"  // Use responsive for fluid resizing
                        width={650}          // Specify the width you want for larger screens
                        height={800}          // Keep the aspect ratio you desire (e.g., 3:2)
                        quality={100}         // High quality
                        className="mx-auto object-cover w-full h-auto"
                        priority={true}       // If this is a primary image, make it load first
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-6 text-gray-800">
                    <h1 className="text-3xl font-semibold text-center">{data?.name} Casino</h1>

                    {/* Welcome Bonus */}
                    <div className="text-center text-lg font-medium">
                        <p className="font-bold text-primary">Welcome Bonus:</p>
                        <p className="text-xl">{data.price}</p>
                    </div>

                    {/* Content List */}
                    <div>
                        <ul className="my-6 ml-6 list-disc text-justify text-sm text-gray-600">
                            {data.content.map((contentItem: any, index: any) => (
                                <li key={index} className="mt-2">
                                    <PortableText value={contentItem} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Claim Button */}
                    <div className="text-center">
                        <Link href={data?.click} target="_blank" className={`${buttonVariants()} border-none`}>
                            Claim Now
                        </Link>
                    </div>
                </div>

                {/* Key Features Section */}
                <div className="py-8 border-t border-gray-300 mt-6">
                    <h2 className="text-2xl font-semibold text-center mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md p-6">
                            <h3 className="text-lg font-semibold text-primary">✅General Info</h3>
                            <p className="text-sm text-gray-700">{data.withdrawal}</p>
                        </div>
                        <div className="bg-white shadow-md p-6">
                            <h3 className="text-lg font-semibold text-primary">✅Payments</h3>
                            <p className="text-sm text-gray-700">{data.payments}</p>
                        </div>
                        <div className="bg-white shadow-md p-6">
                            <h3 className="text-lg font-semibold text-primary">✅Available in</h3>
                            <p className="text-sm text-gray-700">{data.countries}</p>
                        </div>
                        <div className="bg-white shadow-md p-6">
                            <h3 className="text-lg font-semibold text-primary">✅Language</h3>
                            <p className="text-sm text-gray-700">{data.language}</p>
                        </div>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="flex items-center gap-2 py-6">
                    <div className="flex gap-1 text-yellow-500">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <p className="text-xs">90% player choice</p>
                </div>

                {/* Reviews Accordion */}
                <div className="py-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Reviews</AccordionTrigger>
                            <AccordionContent>
                                {data.reviews.map((review: any, index: any) => (
                                    <div key={index} className="mb-4 text-sm text-gray-700">
                                        <PortableText value={review} />
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* About Section */}
                <div className="py-8 border-t border-gray-300 mt-6">
                    <div className="text-center">
                        <h2 className="text-2xl  font-semibold mb-4">About {data.name} Casino</h2>
                        <p className="text-sm text-justify text-gray-600">{data.description}</p>
                    </div>
                </div>

                {/* Start Playing Button */}
                <div className="mt-8 text-center">
                    <Link href={data.click} target="_blank" className={`${buttonVariants()} border-none`}>
                        Start Playing
                    </Link>
                </div>
            </div>
        </div>
    );
}
