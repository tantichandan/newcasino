import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

// Function to fetch data from Sanity based on category
async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"] {
        _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "categorydescription": category->categorydescription,
        click,
    }`;

    const data = await client.fetch(query);
    return data;
}

// Constant for dynamic forcing
export const dynamic = "force-dynamic";

// Main component for displaying category page
export default async function CategoryPage({
    params,
}: {
    params: { category: string, categorydescription: string };
}) {
    // Fetching data based on the category parameter
    const data: simplifiedProduct[] = await getData(params.category);

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Navigation links for different categories */}


                {/* Main content section */}
                <section className="py-6">
                    {/* Heading */}
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
                        Casinos for {params.category}
                    </h2>

                    {/* Description */}
                    <p className='text-lg text-gray-800 font-serif leading-relaxed mb-8'>
                        We've organized our casino section with your convenience in mind. Explore our expertly curated selection and find the best options to start winning big.
                    </p>

                    <div className='my-6 flex flex-wrap justify-center gap-2 md:gap-4'>
                        {["Aus", "UK", "US", "French", "Free", "Blog"].map((category) => (
                            <Link
                                key={category}
                                href={`/${category}`}
                                className='px-2 py-1 text-xs md:text-base bg-gray-600 text-gray-200 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105'>
                                {category}
                            </Link>
                        ))}
                    </div>

                    {/* Product grid */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {data.map((product) => (
                                <div key={product._id} className="relative shadow-lg rounded-lg overflow-hidden border border-gray-700 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
                                    {/* Product image */}
                                    <Link href={`/product/${product.slug}`} className="block">
                                        <div className="relative h-32 w-32 mx-auto my-4 overflow-hidden rounded-full bg-gray-800">
                                            <Image
                                                src={product.imageUrl}
                                                alt={`${product.name} image`}
                                                className="object-cover w-full h-full rounded-full"
                                                width={128} // ensure dimensions are equal for a circle
                                                height={128} // ensure dimensions are equal for a circle
                                            />
                                        </div>
                                    </Link>

                                    {/* Product details */}
                                    <div className="p-3 text-center">
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            <Link href={`/product/${product.slug}`} className="hover:underline">
                                                {product.name} Casino
                                            </Link>
                                        </h3>
                                        <p className="text-gray-200 mb-1">
                                            {product.categoryName}
                                        </p>
                                        <p className="text-sm text-gray-300">
                                            Free play/Bonus <span className="text-gray-100">($€£) {product.price}</span>
                                        </p>
                                        <Link href={product.click} target="_blank" className="mt-3 inline-block">
                                            <button className="px-3 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white rounded-md shadow-md hover:shadow-lg transition duration-300">
                                                Start Playing
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
