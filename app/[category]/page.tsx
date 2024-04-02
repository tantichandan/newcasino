import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import category from "@/sanity-project/schemaTypes/category";
import product from "@/sanity-project/schemaTypes/product";

async function getData(cateogry: string) {
    const query = `*[_type == "product" && category->name == "${cateogry}"] {
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

export const dynamic = "force-dynamic";

export default async function CategoryPage({
    params,
}: {
    params: { category: string, categorydescription: string };
}) {
    const data: simplifiedProduct[] = await getData(params.category);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Casinos for {params.category}
                    </h2>

                    <div>
                        <p className='leading-7 [&:not(:first-child)]:mt-6'>

                            We've organized our casino section with your convenience in mind, making it easier for you to find your favorite casino. With our expertly curated selection, you can trust that you're getting the best of the best. So why wait? Join us today and start winning big


                        </p>
                    </div>


                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
                    {data.map((product) => (
                        <div key={product._id} className="relative m-2 p-0 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 ">




                            <div className="mx-4 mt-4 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">

                                <div className=" object-cover relative h-40 w-40 rounded-full bg-indigo-500 rounded-t-xl flex justify-center items-center">
                                    <Link href={`/product/${product.slug}`}>
                                        <Image
                                            src={product.imageUrl}
                                            alt="Product image"
                                            className="object-cover m-auto object-center rounded-full"
                                            width={200}
                                            height={200}
                                        />

                                    </Link>
                                </div>


                            </div>

                            <div className="flex-col justify-center items-center gap-2 p-2 ">

                                <div>
                                    <h3 className="text-sm text-gray-700 justify-center">

                                        <Link href={`/product/${product.slug}`}>

                                            <p className="text-sm text-black scroll-m-20 tracking-tight">

                                                {product.categoryName} Casino
                                            </p>


                                        </Link>




                                    </h3>


                                    <div className="flex flex-col py-1">

                                        <Link

                                            href={`/product/${product.slug}`}
                                        >
                                            <p className="scroll-m-20 tracking-tight text-primary"> {product.name} Casino</p>

                                            <h4 className="block font-sans text-base antialiased font-light leading-relaxed text-black">Free play/Bonus <span className="text-primary">($€£) {product.price}</span></h4>


                                        </Link >





                                    </div>






                                </div>


                                <Link className={buttonVariants()}



                                    href={product.click}

                                    target="_blank"

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
