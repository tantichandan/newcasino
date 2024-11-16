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
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 py-16">
      <Head>
        <title>TheCasinoLoot - Best Online Exclusive Gambling Platform</title>
        <meta
          name="description"
          content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play and big wins anytime."
        />
        <meta
          property="og:title"
          content="TheCasinoLoot - Best Online Exclusive Gambling Platform"
        />
        <meta
          property="og:description"
          content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play and big wins anytime."
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Canonical Link Tag */}
        <link rel="canonical" href="https://yourwebsite.com/newest" />

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
              "url": "https://yourwebsite.com/newest",
              "mainEntityOfPage": "https://yourwebsite.com/newest",
              "publisher": {
                "@type": "Organization",
                "name": "TheCasinoLoot",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.jpg",
                },
              },
              "product": data.map((product) => ({
                "@type": "Product",
                "name": `${product.name} Casino`,
                "image": product.imageUrl,
                "url": `https://yourwebsite.com/product/${product.slug}`,
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
            View All <ChevronRight /> {/* Updated icon */}
          </Link>
        </div>

        {/* Title and Paragraph Section */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-8 shadow-xl bg-opacity-80">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Casinos with High RTP
            </h2>
            <p className="text-lg text-white text-justify leading-relaxed shadow-md">
              We’ve done the hard work for you, so you can sit back, relax, and
              enjoy your game without worrying about withdrawals or game payouts.
              Below are some of the finest online casinos available. Click on the
              name or the image to learn more about each casino. All the casinos
              listed on this page are fully licensed, ensuring a safe and secure
              gaming experience. Plus, you can easily withdraw your winnings
              without hassle. We care about you and want to ensure you have a
              smooth experience on our site; therefore, we have separated the
              category section by country. Your presence here motivates us greatly.
              You can leave us a suggestion or feedback so we can make your
              experience even better.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <Link href={`/product/${product.slug}`}>
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={`Image of ${product.name} Casino`}
                      layout="responsive"
                      width={400}
                      height={225}
                      objectFit="cover"
                      className="absolute inset-0"
                      style={{
                        filter: "brightness(0.7)", // Keep the brightness filter
                      }}
                    />
                  </div>
                </Link>

                {/* Casino Details Section */}
                <div className="flex-grow p-4 flex flex-col justify-between bg-white bg-opacity-90">
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-primary hover:text-blue-600">
                      {product.name} Casino
                    </h3>
                    <p className="text-small">More details</p>
                  </Link>
                  <p className="text-sm text-gray-800">{product.categoryName}</p>
                  <p className="text-md font-bold text-gray-900 mt-1">
                    Bonus: <span className="text-blue-600">{product.price}</span>
                  </p>

                  {/* Withdrawal Section - Visible */}
                  <div className="mt-2">
                    <div className="text-sm text-gray-800">
                      <strong className="text-gray-900">Features:</strong>{" "}
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
            <p className="text-lg text-white">No casinos available at the moment.</p>
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
