import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == "product"][0...27]{
    _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      click

  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function AllProduct() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">



      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>




        </div>


        <div className=" py-2 flex flex-col justify-between items-center">

          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            Join Our Casino for Fun Excitement and Big Win!
          </h2>

          <p className="py-3 text-lg text-gray-800 font-serif leading-relaxed mb-8">Step into the world of online fun and excitement like never before! Our online casino is your one-stop destination for all things thrilling and entertaining. Picture yourself spinning the reels of your favorite slots or testing your luck at classic table games, all from the comfort of your couch. With exciting bonuses, easy-to-use features, and friendly customer support, we're here to make your gaming experience a breeze. Start playing now and get ready for non-stop entertainment, big wins, and endless fun!</p>


        </div>

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
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-gray-200 mb-1">
                    {product.categoryName} Casino
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
      </div>
    </div>
  );
}
