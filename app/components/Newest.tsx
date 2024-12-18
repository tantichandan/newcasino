import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Updated icon
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
  const query = `*[_type == "product"][0...10] | order(_createdAt desc) {
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
    <div className="bg-white py-16">
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
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Canonical Link Tag */}
        <link rel="canonical" href="https://thecasinoloot.com/newest" />
        {/* Schema.org JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Newest Online Casinos",
              "description":
                "Discover the best online casinos with high RTP. Enjoy thrilling gambling experiences with secure play and fast payouts.",
              "url": "https://thecasinoloot.com/newest",
              "mainEntityOfPage": "https://thecasinoloot.com/newest",
              "publisher": {
                "@type": "Organization",
                "name": "TheCasinoLoot",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://thecasinoloot.com/logo.jpg",
                },
              },
              "product": data.map((product) => ({
                "@type": "Product",
                "name": `${product.name} Casino`,
                "image": product.imageUrl,
                "url": `https://thecasinoloot.com/product/${product.slug}`,
                "price": product.price,
                "priceCurrency": "USD", // Adjust as necessary
                "category": product.categoryName,
                "description": product.withdrawal,
              })),
            }),
          }}
        />
      </Head>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
          <Link
            className="text-primary font-bold flex items-center gap-x-1 mt-2 sm:mt-0"
            href="/All"
          >
            View All Casinos <ChevronRight /> {/* Updated icon */}
          </Link>
        </div>

        {/* Title and Paragraph Section */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-6 sm:py-8">
            <h3 className="text-4xl font-sans font-extrabold text-primary mb-4">
              Casinos with High <mark className="bg-transparent text-blue-600">RTP</mark>
            </h3>
            <p className="text-lg text-gray-800 font-sans text-justify leading-relaxed max-w-4xl mx-auto">
              We’ve done the hard work for you, so you can sit back, relax, and enjoy your game without worrying about withdrawals or game payouts. Below are some of the finest online casinos available. Click on the name or the image to learn more about each casino. All the casinos listed on this page are fully licensed, ensuring a safe and secure gaming experience. Plus, you can easily withdraw your winnings without hassle. We care about you and want to ensure you have a smooth experience on our site; therefore, we have separated the category section by country. Your presence here motivates us greatly. You can leave us a suggestion or feedback so we can make your experience even better.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product._id}
                className="bg-gray-300 shadow-lg font-sans overflow-hidden flex flex-col items-center"
              >
                {/* Image Section */}
                <Link href={`/product/${product.slug}`}>
                  <div className="relative w-40 h-40 mb-4 mt-2">
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

                {/* Casino Details Section */}
                <div className="flex-grow p-4 flex flex-col justify-between bg-white bg-opacity-90">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-lg font-semibold font-sans text-primary hover:text-blue-600">
                      {product.name} Casino
                    </h3>
                    <p className="text-small font-sans">More details</p>
                  </Link>
                  <p className="text-sm text-gray-800">{product.categoryName}</p>
                  <p className="text-md font-extrabold text-gray-900 mt-1">
                    Bonus: <span className="text-blue-600 font-semibold">{product.price}</span>
                  </p>

                  {/* Withdrawal Section - Visible */}
                  <div className="mt-2">
                    <div className="text-sm text-gray-800">
                      <strong className="text-[#006400] font-extrabold">Features:</strong>{" "}
                      <span className="text-sm font-medium text-justify text-gray-700 my-2">
                        {product.withdrawal}
                      </span>
                    </div>
                  </div>

                  {/* Hidden Sections for Payments, Language, and Countries */}
                  <div className="mt-2 hidden">
                    <div className="text-sm text-gray-800">
                      <strong className="text-gray-900">Payment Methods:</strong>
                      <div className="text-xs text-gray-800">
                        <span className="mr-2">{product.payments}</span>
                      </div>
                    </div>
                    <div className="mt-1">
                      <strong className="text-sm text-gray-900">
                        Countries accepted:
                      </strong>
                      <div className="text-xs text-gray-800">
                        <span className="mr-2">{product.countries}</span>
                      </div>
                    </div>
                    <div className="mt-1">
                      <strong className="text-sm text-gray-900">
                        Language supported:
                      </strong>
                      <div className="text-xs text-gray-800">
                        <span className="mr-2">{product.language}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Start Playing Button */}
                <div className="p-4">
                  <Link
                    className="bg-blue-600 text-white py-2 px-4 text-md w-full text-center"
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
            <p className="text-lg text-gray-800">No casinos available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const data = await getData();

    return {
      props: {
        data,
      },
      revalidate: 60, // Regenerate the page every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        data: [],
      },
    };
  }
}
