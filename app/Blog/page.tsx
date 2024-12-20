import Link from "next/link";
import { post } from "../interface";
import { client } from "../lib/sanity";
import Head from "next/head"; // Import Head for metadata
import Submenu from "../components/Submenu";

async function getData() {
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query);
    return data;
}

export default async function Page() {
    const data: post[] = await getData();

    return (
        <div className="relative gap-16 px-6 py-24 justify-center items-center md:px-20">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url(/bg1.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.4, // Slightly lighter opacity for better contrast
                    zIndex: -1,
                }}
            ></div>
            
            {/* Meta Information */}
            <Head>
                <title>TheCasinoLoot Blog - Top Online Casino & Gambling Platform</title>
                <meta
                    name="description"
                    content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."
                />
                <link rel="canonical" href="https://thecasinoloot.com/blog" />
                <meta
                    property="og:title"
                    content="TheCasinoLoot Blog - Top Online Casino & Gambling Platform"
                />
                <meta
                    property="og:description"
                    content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thecasinoloot.com/blog" />
                <meta
                    property="og:image"
                    content="https://thecasinoloot.com/og-image.jpg"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            "name": "TheCasinoLoot Blog",
                            "description":
                                "Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos.",
                            "url": "https://thecasinoloot.com/blog",
                            "blogPost": data.map((post) => ({
                                "@type": "BlogPosting",
                                "headline": post.title,
                                "datePublished": new Date(post._createdAt).toISOString(),
                                "url": `https://thecasinoloot.com/post/${post.slug.current}`,
                                "description": post.overview,
                            })),
                            "publisher": {
                                "@type": "Organization",
                                "name": "TheCasinoLoot",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://thecasinoloot.com/logo.jpg",
                                },
                            },
                        }),
                    }}
                />
            </Head>

            {/* Submenu */}
            <Submenu />
            
            {/* Blog Section */}
            <section className="max-w-2xl px-6 sm:pb-6 lg:max-w-7xl lg:px-8">
                <div className="mb-6 md:mb-16">
                    {/* Title */}
                    <div className="mb-2 mx-auto justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-8">
                        <h1
                            className="mb-2 text-4xl font-sans font-bold text-teal-500 sm:text-5xl md:pb-4 md:text-6xl"
                            style={{
                                textShadow: "2px 2px 4px rgba(26, 32, 44, 0.7)", // Stronger shadow for readability
                            }}
                        >
                            Important Blog's
                        </h1>
                    </div>
                    <ul>
                        {/* Blog Posts */}
                        {data.map((post) => (
                            <li key={post._id} className="py-6">
                                <article className="space-y-6 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    {/* Post Date */}
                                    <div>
                                        <p
                                            className="text-sm font-bold leading-6 text-gray-900"
                                            style={{
                                                letterSpacing: "0.05em", // Add spacing to enhance the look
                                            }}
                                        >
                                            {new Date(post._createdAt).toISOString().split("T")[0]}
                                        </p>
                                    </div>
                                    {/* Post Title and Overview */}
                                    <Link
                                        href={`/post/${post.slug.current}`}
                                        prefetch
                                        className="space-y-4 xl:col-span-3"
                                    >
                                        <div>
                                            <h3
                                                className="text-2xl font-bold font-sans leading-8 tracking-tight text-gray-900"
                                            >
                                                {post.title}
                                            </h3>
                                        </div>
                                        <p
                                            className="prose max-w-none font-semibold text-gray-700 font-sans line-clamp-3"
                                        >
                                            {post.overview}
                                        </p>
                                    </Link>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
