import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Head from "next/head";
import { buttonVariants } from "@/components/ui/button";

// Fetch data for the category
async function getData(category: string) {
    const query = `*[_type == "product" && category->name == $category] {
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        payments,
        withdrawal,
        language,
        countries,
        "slug": slug.current,
        "categoryName": category->name,
        "categorydescription": category->categorydescription,
        click,
    }`;

    try {
        const data = await client.fetch(query, { category });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const data: simplifiedProduct[] = await getData(params.category);

    const canonicalUrl = `https://www.yoursite.com/category/${params.category}`;

    return (
        <div className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 min-h-screen">
            <Head>
                <title>Casinos for {params.category} - TheCasinoLoot</title>
                <meta
                    name="description"
                    content={`Discover the best casinos for ${params.category}. Enjoy curated options, exclusive bonuses, and safe gambling practices.`}
                />
                {/* Canonical link for category page */}
                <link rel="canonical" href={canonicalUrl} />

                {/* OpenGraph Meta Tags */}
                <meta property="og:title" content={`Casinos for ${params.category} - TheCasinoLoot`} />
                <meta
                    property="og:description"
                    content={`Discover the best casinos for ${params.category}. Enjoy curated options, exclusive bonuses, and safe gambling practices.`}
                />
                <meta property="og:image" content="https://www.yoursite.com/your-image.jpg" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="TheCasinoLoot" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Casinos for ${params.category} - TheCasinoLoot`} />
                <meta
                    name="twitter:description"
                    content={`Discover the best casinos for ${params.category}. Enjoy curated options, exclusive bonuses, and safe gambling practices.`}
                />
                <meta name="twitter:image" content="https://www.yoursite.com/your-image.jpg" />
                <meta name="twitter:site" content="@YourTwitterHandle" />
            </Head>

            <div className="mx-auto max-w-7xl px-4 py-8">
                <SubmenuBar />
                <div className="text-center mb-8 ">
                    <h2 className="text-3xl font-bold text-white">
                        Casinos for {params.category}
                    </h2>
                    <p className="leading-6 text-white text-justify py-3 max-w-2xl mx-auto text-sm">
                        We've organized our casino section with your convenience in mind, making it easier for you to find your favorite casino. With our expertly curated selection, you can trust that you're getting the best of the best. So why wait? Join us today and start winning big.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((product) => (
                        <div
                            key={product._id}
                            className="relative p-4 bg-gray-100 border border-gray-300 shadow-lg transition duration-300 hover:shadow-xl overflow-hidden flex flex-col"
                        >
                            <Head>
                                {/* Canonical link for individual product */}
                                <link
                                    rel="canonical"
                                    href={`https://www.yoursite.com/product/${product.slug}`}
                                />
                                {/* Structured Data (JSON-LD) */}
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{
                                        __html: JSON.stringify({
                                            "@context": "https://schema.org",
                                            "@type": "Product",
                                            "name": product.name,
                                            "description": product.categorydescription,
                                            "image": product.imageUrl,
                                            "offers": {
                                                "@type": "Offer",
                                                "priceCurrency": "USD",
                                                "price": product.price,
                                                "url": `https://www.yoursite.com/product/${product.slug}`,
                                                "availability": "https://schema.org/InStock",
                                            },
                                        }),
                                    }}
                                />
                            </Head>
                            <Link href={`/product/${product.slug}`} className="flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-40 h-40 mb-4">
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} Casino`}
                                            className="object-cover"
                                            width={160}
                                            height={160}
                                        />
                                    </div>
                                    <h3 className="mt-2 text-md font-semibold text-gray-800">{product.categoryName}</h3>
                                    <p className="text-md font-bold text-gray-700">{product.name} Casino</p>
                                    <p className="text-sm font-bold text-gray-700">Read more</p>
                                    <h4 className="text-sm text-blue-600 font-bold mt-2">
                                        <span className="text-sm font-medium text-gray-700"> <strong>Bonus:</strong></span> {product.price}
                                    </h4>
                                    <p className="text-sm font-medium text-gray-700 my-2"> <strong className="text-[maroon] font-extrabold">Features </strong>{product.withdrawal}</p>
                                </div>
                            </Link>
                            <div className="flex justify-center mt-4">
                                <Link
                                    className={`${buttonVariants()} px-4 py-2 text-sm`}
                                    href={product.click}
                                    target="_blank"
                                    aria-label={`Start playing at ${product.name} Casino`}
                                >
                                    Start Playing
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SubmenuBar() {
    return (
        <div className="flex justify-center mb-8 px-4">
            <div className="flex flex-wrap w-full max-w-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border border-gray-300 rounded-lg overflow-hidden shadow-md justify-center sm:justify-between">
                {["Aus", "UK", "US", "French", "Free", "CA", "Global", "All", "Blog"].map((item) => (
                    <Link
                        key={item}
                        href={`/${item}`}
                        className="flex-1 sm:flex-none sm:w-auto text-white text-center py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}
