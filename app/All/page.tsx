"use client";

import Link from "next/link";
import {
  ChevronRight,
  Diamond,
  Star,
  ExternalLink,
  BookOpen,
  Search,
  Filter,
} from "lucide-react";
import { client } from "../lib/sanity";
import Image from "next/image";
import Head from "next/head";
import { PortableText } from "next-sanity";
import "../styles/hero.css";
import { useState, useEffect } from "react";

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
  const query = `*[_type == "product"][0...50] | order(_createdAt desc) {
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

export default function Newest() {
  const [casinos, setCasinos] = useState<Product[]>([]);
  const [filteredCasinos, setFilteredCasinos] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setCasinos(data);
      setFilteredCasinos(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = casinos.filter((casino) => {
      const matchesSearch = casino.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "All" || casino.categoryName === selectedRegion;
      return matchesSearch && matchesRegion;
    });
    setFilteredCasinos(filtered);
  }, [searchTerm, selectedRegion, casinos]);

  const uniqueRegions = ["All"];
  casinos.forEach((casino) => {
    if (!uniqueRegions.includes(casino.categoryName)) {
      uniqueRegions.push(casino.categoryName);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>
          Best Online Casinos 2025 | Exclusive Bonuses & Reviews | TheCasinoLoot
        </title>

        <meta
          name="description"
          content="Compare top-rated online casinos of 2024. Expert reviews, exclusive bonuses, and highest RTP rates. Find trusted casinos with fast payouts and 24/7 support."
        />

        <meta
          name="keywords"
          content="online casinos, casino reviews, casino bonuses, gambling sites, best casinos 2024, trusted casinos, casino comparison, casino guide, gambling reviews"
        />

        {/* Technical SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
        
        {/* Canonical Tag */}
        <link rel="canonical" href="https://thecasinoloot.com/casinos" />
        
        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheCasinoLoot" />
        <meta property="og:title" content="Best Online Casinos 2024 | Exclusive Bonuses & Reviews" />
        <meta 
          property="og:description" 
          content="Compare top-rated online casinos of 2024. Expert reviews, exclusive bonuses, and highest RTP rates. Find trusted casinos with fast payouts and 24/7 support."
        />
        <meta property="og:url" content="https://thecasinoloot.com/casinos" />
        <meta property="og:image" content="https://thecasinoloot.com/og-casino-comparison.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Online Casinos 2024 | Exclusive Bonuses & Reviews" />
        <meta 
          name="twitter:description" 
          content="Compare top-rated online casinos of 2024. Expert reviews, exclusive bonuses, and highest RTP rates. Find trusted casinos with fast payouts."
        />
        <meta name="twitter:image" content="https://thecasinoloot.com/twitter-casino-card.jpg" />
        
        {/* Alternate Language Tags */}
        <link rel="alternate" hrefLang="x-default" href="https://thecasinoloot.com/casinos" />
        <link rel="alternate" hrefLang="en" href="https://thecasinoloot.com/casinos" />
        
        {/* Fonts Preload */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Best Online Casinos 2024 | TheCasinoLoot",
              "description": "Compare top-rated online casinos of 2024. Expert reviews, exclusive bonuses, and highest RTP rates.",
              "url": "https://thecasinoloot.com/casinos",
              "publisher": {
                "@type": "Organization",
                "name": "TheCasinoLoot",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://thecasinoloot.com/logo.png"
                }
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": casinos.map((casino, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": casino.name,
                    "description": casino.withdrawal,
                    "image": casino.imageUrl,
                    "url": `https://thecasinoloot.com/product/${casino.slug}`,
                    "offers": {
                      "@type": "Offer",
                      "description": casino.price
                    }
                  }
                }))
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://thecasinoloot.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Online Casinos",
                    "item": "https://thecasinoloot.com/casinos"
                  }
                ]
              }
            })
          }}
        />




        
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Diamond className="h-10 w-10 text-amber-400" />
            <h3 className="text-4xl font-bold text-white">
              Best Online Casinos: Let's dive deep, and find the best site you
              can enjoy playing
            </h3>
            <Diamond className="h-10 w-10 text-amber-400" />
          </div>
          <p className="text-gray-300 text-lg mt-2">
            Highest RTP & Best Rewards
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search casinos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-gray-900 cursor-pointer"
              >
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-8 py-12 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce" />
                        <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-.3s]" />
                        <div className="w-4 h-4 rounded-full bg-amber-500 animate-bounce [animation-delay:-.5s]" />
                      </div>
                    </td>
                  </tr>
                ) : filteredCasinos.length > 0 ? (
                  filteredCasinos.map((product, index) => (
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
                      No casinos found matching your search criteria.
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
