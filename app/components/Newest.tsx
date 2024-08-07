import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import { Button, buttonVariants } from "@/components/ui/button";

async function fetchProducts() {
  const query = `*[_type == "product"][0...5] | order(_createdAt desc) {
    _id,
    price,
    name,
    click,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  return client.fetch(query);
}

export default async function Newest() {
  const products: simplifiedProduct[] = await fetchProducts();

  return (
    <div className="bg-[#f0e6d6]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent lg:text-5xl mb-4">
            Our Newest Casinos
          </h2>
          <Link href="/allproduct" className="text-primary font-semibold flex items-center gap-x-1">
            See All <ArrowRight />
          </Link>
        </div>

        <p className="text-[16px] text-gray-800 leading-relaxed mt-4">
          Ready for some fun and excitement? Online casinos have tons of cool games and awesome deals waiting for you. Every day, new ones pop up, offering even more chances to win big. Come check out why so many people love playing online. We'll show you the best ones and help you find your new favorite spot for gaming and winning!
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="relative bg-gradient-to-br from-[#4A148C] to-[#FFC107] border border-gray-300 rounded-lg shadow-lg overflow-hidden group h-[300px] flex flex-col">
              <Link href={`/product/${product.slug}`} className="block flex-1">
                <div className="relative overflow-hidden rounded-t-lg flex justify-center items-center h-1/2">
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} Casino`}
                    className="w-24 h-24 object-cover rounded-full border-4 border-white transition-transform duration-300 group-hover:scale-105"
                    width={96}
                    height={96}
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight tracking-tight bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {product.name} Casino
                  </h3>
                  <p className="text-sm text-gray-200 mb-2">{product.categoryName} - view details</p>
                  <p className="text-lg font-semibold text-yellow-400">
                    Free play/Bonus: <span className="text-white text-xl">$€£ {product.price}</span>
                  </p>
                </div>
              </Link>

              <div className="py-3 mt-auto">
                <Link
                  href={product.click}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-yellow-500 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-yellow-600 transition-colors duration-300"
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
