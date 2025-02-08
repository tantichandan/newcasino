import { fullProduct, simplifiedProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { buttonVariants } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  Clock,
  Shield,
  Gift,
  Globe,
  CreditCard,
  Users,
  ChevronRight,
} from "lucide-react";

// Import Inter font
import { Inter } from "next/font/google";

// Initialize the Inter font with specific subsets
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        price,
        name,
        click,
        content[0...5],
        reviews[0...3],
        description,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[3].asset->url,
        withdrawal,
        payments,
        countries,
        language
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: simplifiedProduct = await getData(params.slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Casino Not Found</h1>
          <Link href="/" className="text-yellow-500 hover:text-yellow-400">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://www.thecasinoloot.com/product/${params.slug}`;
  const pageTitle = `${data.name} Casino Review 2024 | Exclusive Bonus & Expert Analysis`;
  const pageDescription = `Detailed review of ${data.name} Casino. Get exclusive ${data.price} welcome bonus, fast payouts, and premium gaming experience. Licensed and secure with 24/7 support.`;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ${inter.className}`}
    >
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="new online casinos, latest casino sites, casino bonuses, gambling platforms, new casino reviews, fresh casino offers"
        />
        <meta name="author" content="TheCasinoLoot" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/default-thumbnail.jpg" />
        <meta property="og:image:alt" content={pageDescription} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/default-thumbnail.jpg" />
        <meta name="twitter:creator" content="@TheCasinoLoot" />

        {/* Breadcrumbs Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.thecasinoloot.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Casino Reviews",
                item: "https://www.thecasinoloot.com/products",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${data.name} Casino Review`,
                item: canonicalUrl,
              },
            ],
          })}
        </script>

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What bonuses does ${data.name} Casino offer?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${data.name} Casino offers ${data.price} as a welcome bonus for new players.`,
                },
              },
              {
                "@type": "Question",
                name: `Is ${data.name} Casino licensed and secure?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Yes, ${data.name} Casino is fully licensed and uses SSL encryption to ensure secure gaming.`,
                },
              },
            ],
          })}
        </script>
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/10">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Casino Image & Rating */}
            <div className="space-y-6">
              <div className="relative w-full h-[240px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={data.imageUrl}
                  alt={`${data.name} Casino`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  className="object-contain bg-white"
                  priority
                  loading="eager"
                />
              </div>
              {/* Trust Indicators */}
              <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-yellow-400 font-medium tracking-wide">
                  Trusted by 10,000+ Players
                </span>
              </div>
            </div>

            {/* Right Column - Casino Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                  {data.name} Casino
                </h1>
                <div className="flex flex-wrap gap-2">
                  {["Licensed", "Verified", "24/7 Support"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm font-medium rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Welcome Bonus Card */}
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Welcome Bonus
                </h2>
                <p className="text-3xl font-extrabold text-white tracking-tight">
                  <PortableText value={data.price} />
                </p>
                <Link
                  href={data.click}
                  target="_blank"
                  className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-yellow-600 bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                  Claim Bonus Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-400 mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium tracking-wide">
                      Payout Speed
                    </span>
                  </div>
                  <p className="text-gray-300">24h Average</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-400 mb-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-medium tracking-wide">Security</span>
                  </div>
                  <p className="text-gray-300">SSL Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Gift, title: "Features", content: data.withdrawal },
            {
              icon: CreditCard,
              title: "Payment Methods",
              content: data.payments,
            },
            {
              icon: Globe,
              title: "Available Regions",
              content: data.countries,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <PortableText value={feature.content} />
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
            About {data.name} Casino
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">{data.description}</p>

            <div className="mt-8 space-y-6">
              {data?.content?.map((contentItem: any, index: number) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-6 border border-gray-100"
                >
                  <PortableText value={contentItem} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Player Reviews
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data.reviews.map((review: any, index: number) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-yellow-500/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-10 h-10 text-yellow-400" />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 tracking-wide">
                      Verified Player
                    </p>
                  </div>
                </div>
                <div className="text-gray-300 leading-relaxed">
                  <PortableText value={review} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href={data.click}
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 shadow-lg tracking-wide"
          >
            Start Playing Now
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-400 tracking-wide">
            By clicking this button, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
