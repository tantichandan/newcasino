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
        <>
            <Head>
                {/* Page Title and Description */}
                <title>TheCasinoLoot Blog - Top Online Casino & Gambling Platform</title>
                <meta
                    name="description"
                    content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."
                />

                {/* Canonical Link */}
                <link rel="canonical" href="https://yourwebsite.com/blog" />

                {/* Open Graph Meta Tags */}
                <meta
                    property="og:title"
                    content="TheCasinoLoot Blog - Top Online Casino & Gambling Platform"
                />
                <meta
                    property="og:description"
                    content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com/blog" />
                <meta
                    property="og:image"
                    content="https://yourwebsite.com/og-image.jpg"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            "name": "TheCasinoLoot Blog",
                            "description":
                                "Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos.",
                            "url": "https://yourwebsite.com/blog",
                            "blogPost": data.map((post) => ({
                                "@type": "BlogPosting",
                                "headline": post.title,
                                "datePublished": new Date(post._createdAt).toISOString(),
                                "url": `https://yourwebsite.com/post/${post.slug.current}`,
                                "description": post.overview,
                            })),
                            "publisher": {
                                "@type": "Organization",
                                "name": "TheCasinoLoot",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://yourwebsite.com/logo.jpg",
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <Submenu />
            <section className="max-w-2xl px-6 sm:pb-6 lg:max-w-7xl lg:px-8">
                <div className="mb-6 md:mb-16">
                    <div className="mb-4 mx-auto justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-8">
                        <h1 className="mb-4 text-3xl font-sans font-bold text-primary sm:text-4xl md:pb-4 md:text-5xl">
                            All The Blogs
                        </h1>
                    </div>
                    <ul>
                        {data.map((post) => (
                            <li key={post._id} className="py-2">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div>
                                        <p className="text-base font-medium leading-6 text-teal-500">
                                            {new Date(post._createdAt).toISOString().split("T")[0]}
                                        </p>
                                    </div>
                                    <Link
                                        href={`/post/${post.slug.current}`}
                                        prefetch
                                        className="space-y-3 xl:col-span-3"
                                    >
                                        <div>
                                            <h3 className="text-xl font-bold font-sans leading-8 tracking-tight text-gray-900">
                                                {post.title}
                                            </h3>
                                        </div>
                                        <p className="prose max-w-none text-gray-500 font-sans line-clamp-2">
                                            {post.overview}
                                        </p>
                                    </Link>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}
