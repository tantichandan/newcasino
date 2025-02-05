import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { PortableText } from "next-sanity";
import {
  Shield,
  Star,
  Clock,
  Globe2,
  Gift,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { client } from "../lib/sanity";

// Fetch data for the category
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
    "categoryDescription": category->categoryDescription,
    click,
    rating,
    features
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

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = await getData(params.category);
  const canonicalUrl = `https://www.thecasinoloot.com/category/${params.category}`;

  const trustIndicators = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Licensed & Regulated",
      description: "All casinos are fully licensed",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Expert Reviews",
      description: "Thoroughly tested by our team",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Payouts",
      description: "Quick and secure withdrawals",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <Head>
        <title>{params.category} Casinos | TheCasinoLoot</title>
        <meta
          name="description"
          content={`Best ${params.category} online casinos with exclusive bonuses and trusted reviews.`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-6">
              Best {params.category} Online Casinos
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Discover top-rated {params.category} casinos with exclusive
              bonuses, secure gaming environments, and premium experiences
              curated by our expert team.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <div className="text-amber-400 mb-2">{indicator.icon}</div>
                <h3 className="text-white font-semibold mb-1">
                  {indicator.title}
                </h3>
                <p className="text-gray-400 text-sm">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {["Aus", "UK", "US", "CA", "Global", "Free"].map((region) => (
                <Link
                  key={region}
                  href={`/${region}`}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      params.category.toLowerCase() === region.toLowerCase()
                        ? "bg-amber-500/20 text-amber-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {region}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {data.map((casino: any) => (
            <div
              key={casino._id}
              className="group relative bg-gradient-to-r from-gray-900 to-black rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Casino Logo */}
                  <div className="relative w-40 h-40 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={casino.imageUrl}
                      alt={`${casino.name} Casino`}
                      fill
                      className="object-contain p-2"
                      sizes="160px"
                    />
                  </div>

                  {/* Casino Details */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold text-white">
                        {casino.name}
                      </h2>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-amber-400"
                            fill={
                              i < (casino.rating || 4) ? "currentColor" : "none"
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-amber-400 font-semibold mb-2">
                          Welcome Bonus
                        </h3>
                        <div className="text-gray-400">
                          <PortableText value={casino.price} />
                        </div>
                      </div>
                      <div className="text-gray-400 font-medium text-regular">
                        {casino.withdrawal ? (
                          <PortableText
                            value={
                              Array.isArray(casino.withdrawal)
                                ? casino.withdrawal
                                : [casino.withdrawal]
                            }
                            components={{
                              list: {
                                bullet: ({ children }) => (
                                  <ul className="list-disc ml-5">{children}</ul>
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
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-6">
                      <Link
                        href={casino.click}
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
                      >
                        Play Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                      <Link
                        href={`/product/${casino.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        Read Review
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Dynamic Content Section */}
      <section className="bg-black/50 border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-8">
              Why Choose {params.category} Casinos?
            </h2>
            <div className="text-gray-300 space-y-4">
              <PortableText
                value={data[0]?.categoryDescription || []}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="text-gray-300 text-justify leading-relaxed">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
