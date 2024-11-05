import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

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

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <SubmenuBar />
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">
                        Casinos for {params.category}
                    </h2>
                    <p className="leading-6 text-white text-justify py-3 max-w-2xl mx-auto text-sm">
                        We've organized our casino section with your convenience in mind, making it easier for you to find your favorite casino. With our expertly curated selection, you can trust that you're getting the best of the best. So why wait? Join us today and start winning big.
                    </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((product) => (
                        <div key={product._id} className="relative p-4 bg-white border border-gray-300 rounded-lg shadow-lg transition duration-300 hover:shadow-xl overflow-hidden flex flex-col">
                            <Link href={`/product/${product.slug}`} className="flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="relative w-40 h-40 mb-4">
                                        <Image
                                            src={product.imageUrl}
                                            alt={`${product.name} Casino`}
                                            className="object-cover rounded-lg"
                                            width={160}
                                            height={160}
                                        />
                                    </div>
                                    <h3 className="mt-2 text-md font-semibold text-gray-800">{product.categoryName}</h3>
                                    <p className="text-md font-medium text-gray-700">{product.name} Casino</p>
                                    <h4 className="text-sm text-blue-600 font-bold mt-2">Bonus: {product.price}</h4> 
                                    <p className="text-sm font-medium text-gray-700 my-2">{product.withdrawal}</p>
                                    <p className="text-sm font-medium text-gray-700 my-2"><strong>Payments:</strong> {product.payments}</p>
                                    <p className="text-sm font-medium text-gray-700 my-2"><strong>Accepted:</strong> {product.countries}</p>
                                    <p className="text-sm font-medium text-gray-700 my-2"><strong>Support:</strong> {product.language}</p>
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
        <div className="flex justify-center mb-8">
            <div className="flex h-12 w-full max-w-5xl bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md">
                {["Aus", "UK", "US", "French", "Free", "CA", "Global", "All", "Blog"].map((item) => (
                    <Link
                        key={item}
                        href={`/${item}`}
                        className="flex-1 flex items-center justify-center text-gray-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 text-sm font-semibold"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}
