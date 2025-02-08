import Link from "next/link";
import { post } from "../interface";
import { client } from "../lib/sanity";
import Head from "next/head";
import {
  Clock,
  ArrowRight,
  Tag,
  Bookmark,
  TrendingUp,
  BookOpen,
  Star,
  Crown,
  Sparkles,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import Image from "next/image";
import NewsletterSignup from "../components/Subscription";

// Initialize fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const categories = [
  { name: "Games", icon: BookOpen, slug: "games" },
  { name: "Reviews", icon: Bookmark, slug: "reviews" },
  { name: "Casino Stories", icon: TrendingUp, slug: "stories" },
  { name: "News", icon: Tag, slug: "news" },
];

async function getData() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        overview,
        authorName,
        authorBio,
        "authorAvatar": authorAvatar.asset->url,
        
        categoryName,
        estimatedReadTime,
        slug,
        _createdAt,
        "categories": categories[]->title,
        "estimatedReadTime": length(pt::text(body)) / 5 / 180,
        
        "imageUrl": images[0].asset->url,
    }`;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const data: post[] = await getData();

  // email subscription

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ${inter.className}`}
    >
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Casino Blog: Expert Guides & Industry Insights 2025 | TheCasinoLoot
        </title>
        <meta
          name="description"
          content="Discover expert casino strategies, in-depth guides, and industry insights. Get professional tips, honest reviews, and latest updates from casino experts."
        />
        <meta
          name="keywords"
          content="casino blog, casino guides, gambling tips, casino reviews, casino strategy, online gambling, casino news, expert casino advice"
        />

        {/* Technical SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://thecasinoloot.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheCasinoLoot" />
        <meta
          property="og:title"
          content={`Casino Blog: Expert Guides & Industry Insights 2025 | TheCasinoLoot`}
        />
        <meta
          property="og:description"
          content="Discover expert casino strategies, in-depth guides, and industry insights. Get professional tips, honest reviews, and latest updates from casino experts."
        />
        <meta property="og:url" content="https://thecasinoloot.com/Blog" />
        <meta
          property="og:image"
          content="https://thecasinoloot.com/blog-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Casino Blog: Expert Guides & Industry Insights 2025`}
        />
        <meta
          name="twitter:description"
          content="Expert casino strategies, guides, and industry insights. Professional tips and honest reviews from casino experts."
        />
        <meta
          name="twitter:image"
          content="https://thecasinoloot.com/twitter-card.jpg"
        />

        {/* Alternate Languages */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://thecasinoloot.com/blog"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://thecasinoloot.com/Blog"
        />

        {/* Preload Critical Resources */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair_Display:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "TheCasinoLoot Blog",
              description:
                "Expert casino strategies, guides, and industry insights",
              url: "https://thecasinoloot.com/Blog",
              publisher: {
                "@type": "Organization",
                name: "TheCasinoLoot",
                logo: {
                  "@type": "ImageObject",
                  url: "https://thecasinoloot.com/logo.png",
                },
              },
              blogPost: data.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.overview,
                datePublished: post._createdAt,
                dateModified: post._createdAt,
                author: {
                  "@type": "Person",
                  name: post.authorName,
                  description: post.authorBio,
                  image: post.authorAvatar,
                },
                image: post.imageUrl,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://thecasinoloot.com/post/${post.slug.current}`,
                },
                timeRequired: `PT${Math.ceil(post.estimatedReadTime || 5)}M`,
              })),
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://thecasinoloot.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://thecasinoloot.com/Blog",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post Section */}

        <div className="mb-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent"></div>

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">
                      Featured Article
                    </span>
                  </div>

                  <h1
                    className={`${playfair.className} text-4xl lg:text-5xl font-bold leading-tight text-white mb-6`}
                  >
                    How to Identify Top Online
                    <span className="block bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">
                      Casino Review Sites.
                    </span>
                  </h1>

                  <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl">
                    This article provides a step-by-step guide on how to choose
                    the best online review sites and make the most of them
                  </p>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                      <Clock className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Reading Time</p>
                      <p className="text-gray-300 text-sm">8 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Difficulty</p>
                      <p className="text-gray-300 text-sm">Intermediate</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href="post/how-to-identify-top-online-casino-review-sites"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                  >
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="#latest-articles"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    Browse More
                  </Link>
                </div>
              </div>

              <div className="relative lg:h-auto">
                <div className="absolute -right-24 -top-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/bg2.jpeg"
                    alt="Casino Strategy Guide"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/50">
                        <Image
                          src="/avatar.jpeg"
                          alt="Author"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium">Jeniffer Lewis</p>
                        <p className="text-gray-300 text-sm">
                          Casino Strategy Expert
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2
            className={`${playfair.className} text-2xl font-bold text-white mb-6`}
          >
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Games", icon: BookOpen },
              { name: "Reviews", icon: Bookmark },
              { name: "Casino Stories", icon: TrendingUp },
              { name: "News", icon: Tag },
            ].map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <Icon className="w-6 h-6 text-yellow-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-900 font-medium tracking-wide">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Articles Grid */}
        <div className="mb-16">
          <h2
            className={`${playfair.className} text-3xl font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent mb-8`}
          >
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.map((post) => (
              <article
                key={post._id}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col border border-yellow-100/20"
              >
                <div className="relative h-56">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    height={224}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white/90 text-sm mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.estimatedReadTime || "5"} min read
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Tag className="w-4 h-4" />
                        {post.categoryName?.[0] || "Gaming"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-100">
                      {post.authorAvatar ? (
                        <Image
                          src={post.authorAvatar}
                          alt={`${post.authorName}'s Avatar`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center h-full">
                          <Star className="text-amber-600 w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.authorName}
                      </p>
                      <p className="text-xs text-gray-500">Casino Expert</p>
                    </div>
                  </div>

                  <h3
                    className={`${playfair.className} text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors`}
                  >
                    <Link href={`/post/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.overview}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/post/${post.slug.current}`}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm gap-2 group/link"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      About the Author
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl p-12 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h3
              className={`${playfair.className} text-3xl font-bold text-white mb-4`}
            >
              Stay Updated With New Casino, Bonus, and News
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Join our community of casino enthusiasts and receive exclusive
              tips, strategies, and industry updates directly in your inbox.
            </p>

            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
}
