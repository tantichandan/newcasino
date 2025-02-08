import Link from "next/link";
import {
  ChevronRight,
  Diamond,
  Star,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { client } from "../lib/sanity";
import Image from "next/image";
import Head from "next/head";
import { PortableText } from "next-sanity";
import "../styles/hero.css";

interface Product {
  _id: string;
  price: any;
  name: string;
  click: string;
  slug: string;
  categoryName: string;
  imageUrl: string;
  withdrawal: any;
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

  const canonicalUrl = "https://thecasinoloot.com/newest";
  const pageTitle = "Latest Online Casinos 2024 | New Casino Sites & Bonuses";
  const pageDescription =
    "Discover the newest online casinos with exclusive bonuses, high RTP rates, and premium gaming experiences. Updated daily with fresh casino reviews and latest gambling offers.";

  return (
    <div className="hero-gradient min-h-screen">
      <Head>
        <title>{pageTitle}</title>

        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://thecasinoloot.com/twitter-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TheCasinoLoot",
            url: canonicalUrl,
            description: pageDescription,
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://thecasinoloot.com/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TheCasinoLoot",
            url: canonicalUrl,
            logo: "https://thecasinoloot.com/logo.png",
            sameAs: [
              "https://twitter.com/thecasinoloot",
              "https://facebook.com/thecasinoloot",
              "https://instagram.com/thecasinoloot",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-CASINO",
              contactType: "customer service",
              availableLanguage: ["English"],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is RTP in online casinos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RTP (Return to Player) represents the percentage of wagered money that a game returns to players over time. A 98% RTP indicates the game's long-term payout rate across all players.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good RTP range for online casinos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "95% - 99% RTP is considered excellent, offering the best chances of winning over time.",
                },
              },
            ],
          })}
        </script>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Diamond className="h-10 w-10 text-amber-400" />
            <h3 className="text-4xl font-bold text-white">Premium Casinos</h3>
            <Diamond className="h-10 w-10 text-amber-400" />
          </div>
          <p className="text-gray-300 text-lg mt-2">
            Highest RTP & Best Rewards
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="px-8 py-6 text-left text-sm font-semibold text-gray-600 w-48"></th>
                  <th className="px-8 py-6 text-left text-sm font-semibold text-gray-600">
                    Casino Name
                  </th>
                  <th className="px-8 py-6 text-left text-sm font-semibold text-gray-600">
                    Region
                  </th>
                  <th className="px-8 py-6 text-left text-sm font-semibold text-gray-600">
                    Features
                  </th>
                  <th className="px-8 py-6 text-left text-sm font-semibold text-gray-600 w-44">
                    Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((product, index) => (
                    <tr
                      key={product._id}
                      className={`
                        ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                        border-b border-gray-100
                      `}
                    >
                      <td className="px-8 py-6">
                        <Link href={`/product/${product.slug}`}>
                          <div className="relative w-40 h-24 bg-white rounded-xl overflow-hidden shadow-sm">
                            <Image
                              src={product.imageUrl}
                              alt={`${product.name} Casino`}
                              fill
                              sizes="160px"
                              className="object-contain p-2"
                              priority={false}
                            />
                          </div>
                        </Link>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-gray-900 font-semibold text-lg">
                          {product.name}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                          {product.categoryName}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-gray-600 font-medium text-sm">
                          {product.withdrawal ? (
                            <PortableText
                              value={
                                Array.isArray(product.withdrawal)
                                  ? product.withdrawal
                                  : [product.withdrawal]
                              }
                              components={{
                                list: {
                                  bullet: ({ children }) => (
                                    <ul className="list-disc ml-5">
                                      {children}
                                    </ul>
                                  ),
                                },
                                listItem: {
                                  bullet: ({ children }) => <li>{children}</li>,
                                },
                              }}
                            />
                          ) : (
                            <p>No withdrawal information available.</p>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-amber-600 font-semibold text-base">
                          {Array.isArray(product.price) ? (
                            <PortableText value={product.price} />
                          ) : (
                            <ul>
                              <li>{product.price}</li>
                            </ul>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-2.5">
                          <Link
                            href={product.click}
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
                          >
                            Play Now
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/product/${product.slug}`}
                            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-lg transition-colors border border-gray-200"
                          >
                            Review
                            <BookOpen className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-8 py-12 text-center text-gray-500"
                    >
                      No casinos available at the moment.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
