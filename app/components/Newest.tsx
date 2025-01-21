import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { client } from "../lib/sanity";
import Image from "next/image";
import Head from "next/head";

interface Product {
  _id: string;
  price: string;
  name: string;
  click: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
  withdrawal: string;
  payments: string;
  language: string;
  countries: string;
}

async function getData(): Promise<Product[]> {
  const query = `*[_type == "product"][0...12] | order(_createdAt desc) {
    _id,
    price,
    name,
    click,
    withdrawal,
    payments,
    countries,
    language,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function Newest() {
  const data = await getData();

  return (
    <div className="py-16">
      <Head>
        <title>TheCasinoLoot - Best Online Exclusive Gambling Platform</title>
        <meta
          name="description"
          content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play, and big wins anytime."
        />
        <meta
          property="og:title"
          content="TheCasinoLoot - Best Online Exclusive Gambling Platform"
        />
        <meta
          property="og:description"
          content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play, and big wins anytime."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://thecasinoloot.com/newest" />
      </Head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
          <Link
            href="/All"
            className="bg-blue-600 text-white font-bold py-2 px-6 shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-x-1"
          >
            View All Casinos <ChevronRight />
          </Link>
        </div>

        <div className="text-center py-6 sm:py-8">
          <h3 className="text-4xl font-sans font-extrabold text-primary mb-4">
            Casinos with High{" "}
            <mark className="bg-transparent text-blue-600">RTP</mark>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product._id}
                className="bg-gradient-to-r from-pink-200 to-gray-200 text-white shadow-lg font-popins overflow-hidden flex flex-col items-center"
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="relative w-40 h-40 mb-4 mt-2 overflow-hidden shadow-lg">
                    <Image
                      src={product.imageUrl}
                      alt={`Image of ${product.name} Casino`}
                      layout="responsive"
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex-grow p-4 flex flex-col justify-between bg-white bg-opacity-90">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-primary hover:text-blue-600 transition-colors">
                      {product.name} Casino
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-800">{product.categoryName}</p>
                  <p className="text-md font-extrabold text-gray-900 mt-1">
                    Bonus:{" "}
                    <span className="text-blue-600 font-semibold text-justify">
                      {product.price}
                    </span>
                  </p>
                  <div className="mt-2">
                    <div className="text-sm text-gray-800">
                      <strong className="text-[#006400] font-extrabold text-justify">
                        Features:
                      </strong>{" "}
                      <span className="text-sm font-medium text-justify text-gray-700 my-2">
                        {product.withdrawal}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 w-full flex justify-center">
                  <Link
                    className="bg-blue-600 text-white py-2 px-4 text-md w-full text-center hover:bg-blue-700 transition-all duration-300"
                    href={product.click}
                    target="_blank"
                    aria-label={`Start playing at ${product.name} Casino`}
                  >
                    Start Playing
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-800">
              No casinos available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
