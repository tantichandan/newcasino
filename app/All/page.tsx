import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Head from "next/head";
import Submenu from "../components/Submenu";

// Fetch data from the Sanity client
async function getData() {
  const query = `*[_type == "product"][0...50]{
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    click,
    withdrawal
  }`;

  const data = await client.fetch(query);
  return data;
}



export default async function AllProduct() {
  const data: simplifiedProduct[] = await getData();
  const searchTerm = ""; // Placeholder for dynamic search term

  const canonicalUrl = "https://www.yoursite.com/products";
  
  return (
    <div className="bg-soft-gradient">
      <Head>
        <title>{searchTerm ? `${searchTerm} - TheCasinoLoot` : "TheCasinoLoot - Best Online Casino & Gambling Platform"}</title>
        <meta
          name="description"
          content="Join The Casino Loot, the best online casino for exciting games and secure online gambling."
        />
        {/* Canonical link for the main page */}
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="TheCasinoLoot - Best Online Casino & Gambling Platform" />
        <meta
          property="og:description"
          content="Join The Casino Loot, the best online casino for exciting games and secure online gambling."
        />
        <meta property="og:image" content="https://www.yoursite.com/your-image.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheCasinoLoot" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheCasinoLoot - Best Online Casino & Gambling Platform" />
        <meta
          name="twitter:description"
          content="Join The Casino Loot, the best online casino for exciting games and secure online gambling."
        />
        <meta name="twitter:image" content="https://www.yoursite.com/your-image.jpg" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      
      <Submenu />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="py-2 flex flex-col justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
            Join Our Casino for Fun Excitement and Big Win!
          </h2>

          {/* Justified paragraph */}
          <p className="py-3 text-lg text-gray-800 font-serif leading-relaxed mb-8 max-w-3xl text-center sm:text-left sm:text-justify">
            Finding the best casinos online is a tough job because the number of casinos launched every day is beyond imagination. We want you to enjoy yourself while playing at trustworthy casinos. This site will always guide you in the right direction to help you find your destination. While we promote online gambling, we are also fully aware of the gambling policies. We always encourage you to be aware of your gambling status and to play responsibly.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((product) => (
              <div key={product._id} className="relative flex flex-col bg-gray-400 shadow-lg border border-gray-300 overflow-hidden items-center">
                <Head>
                  {/* Canonical tag for individual product pages */}
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
                        "description": "Best casino experience with great bonuses and games",
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
                <Link href={`/product/${product.slug}`} className="block">
                  {/* Image Container with Margin on top */}
                  <div className="relative w-40 h-40 mb-4 mt-2">
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name} image`}
                      className="object-cover"
                      width={160}
                      height={160}
                    />
                  </div>
                </Link>

                {/* Content with Soft Background */}
                <div className="px-4 py-6 text-center flex-grow bg-gray-100 bg-opacity-80">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/product/${product.slug}`} className="hover:underline">
                      {product.name} Casino
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-base mb-4">{product.categoryName}</p>
                  <p className="text-sm text-gray-700 mb-4">
                    Offer <span className="font-bold text-primary">{product.price}</span>
                  </p>
                </div>

                {/* Product Info with Soft Background */}
                <div className="px-4 py-3 bg-gray-100 bg-opacity-80 text-justify text-sm text-gray-800 space-y-2 flex-grow-0">
                  <p><strong className="text-[#006400] font-extrabold">General:</strong> {product.withdrawal}</p>
                </div>

                {/* Start Playing Button */}
                <div className="px-4 py-4 mt-auto text-center">
                  <Link href={product.click} target="_blank" className="inline-block w-full">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:bg-yellow-400 transition duration-300">
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
