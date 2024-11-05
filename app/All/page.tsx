"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { buttonVariants } from "@/components/ui/button";
import { useState, useEffect } from "react";

async function getData() {
  try {
    const query = `*[_type == "product"][0...50]{
      _id,
      price,
      name,
      payments,
      language,
      withdrawal,
      countries,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      click
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function AllProduct() {
  const [data, setData] = useState<simplifiedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getData();
        setData(products);
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <Head>
        <title>TheCasinoLoot - Best Online Casino & Gambling Platform</title>
        <meta name="description" content="Join The Casino Loot, the best online casino for exciting games and secure online gambling." />
      </Head>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <SubmenuBar />
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Dive Into Our Casino Adventure!
          </h2>
          <p className="leading-7 text-gray-600 text-justify py-3 max-w-2xl mx-auto">
            Finding the best casinos online is a tough job because the number of casinos launched every day is beyond imagination. We want you to enjoy yourself while playing at trustworthy casinos. This site will always guide you in the right direction to help you find your destination. While we promote online gambling, we are also fully aware of the gambling policies. We always encourage you to be aware of your gambling status and to play responsibly.
          </p>
        </div>
        {loading && <p className="text-center text-gray-600">Loading products...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {data.length === 0 && !loading && <p className="text-center text-gray-600">No products available.</p>}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: simplifiedProduct }) {
  return (
    <div className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg transition duration-300 hover:shadow-xl overflow-hidden flex flex-col">
      <Link href={`/product/${product.slug}`} className="flex flex-col h-full">
        {/* Product Image with reduced height */}
        <div className="relative w-full h-40 bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={`${product.name} Casino`}
            className="object-cover rounded-t-lg"
            width={500}
            height={200}
            quality={80}
          />
        </div>

        {/* Product Details with added padding */}
        <div className="p-4 flex flex-col justify-between flex-1">
          {/* Display category name with background for readability */}
          <h3 className="text-sm font-semibold text-gray-700 mb-1 bg-white p-1 rounded">{product.categoryName || "Category not available"}</h3>
          
          {/* Display product name */}
          <p className="text-xl font-bold text-primary mb-2">{product.name || "Product name not available"}</p>

          {/* Highlighted Price with adjusted text size */}
          <div className="mt-2">
            <p className="text-base font-bold text-primary tracking-tight">{product.price}</p>
          </div>

          {/* More Details with spacing */}
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-700">{product.withdrawal}</p>
            <p className="text-sm font-semibold text-blue-600">Deposit Options:</p>
            <p className="text-sm font-medium text-gray-700">{product.payments}</p>
            <p className="text-sm font-semibold text-blue-600">Available In:</p>
            <p className="text-sm font-medium text-gray-700">{product.countries}</p>
            <p className="text-sm font-semibold text-blue-600">Support Available:</p>
            <p className="text-sm font-medium text-gray-700">{product.language}</p>
          </div>
        </div>
      </Link>

      {/* Action Button */}
      <div className="flex justify-center p-4 mt-auto">
        <Link
          className={`${buttonVariants()} px-6 py-3 bg-primary text-white rounded-md transition-transform transform hover:scale-105`}
          href={product.click}
          target="_blank"
        >
          Start Playing
        </Link>
      </div>
    </div>
  );
}

function SubmenuBar() {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex h-12 w-full max-w-5xl bg-gray-100 border-4 border-gray-300 rounded-lg overflow-hidden shadow-md">
        {["Aus", "UK", "US", "French", "Free", "Blog", "All"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="flex-1 flex items-center justify-center text-gray-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 font-semibold"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
