import { post } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
    const data = (await getData(params.slug)) as post;

    if (!data) {
        return <div>Post not found</div>;
    }

    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || "image"}
                    className="mx-auto"
                    width={800}
                    height={450}
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            ),
        },
    };

    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <Head>
                {/* Page Title and Description */}
                <title>{data.title} - TheCasinoLoot Blog</title>
                <meta
                    name="description"
                    content={data.overview || "Explore insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."}
                />

                {/* Canonical Link */}
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com/post/${params.slug}`}
                />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={`${data.title} - TheCasinoLoot Blog`} />
                <meta
                    property="og:description"
                    content={data.overview || "Explore insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos."}
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:url"
                    content={`https://yourwebsite.com/post/${params.slug}`}
                />
                <meta
                    property="og:image"
                    content={`https://yourwebsite.com/default-og-image.jpg`}
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": data.title,
                            "description": data.overview || "Explore the best online casino tips and insights.",
                            "author": {
                                "@type": "Person",
                                "name": "Austin",
                            },
                            "datePublished": new Date(data._createdAt).toISOString(),
                            "publisher": {
                                "@type": "Organization",
                                "name": "TheCasinoLoot",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://yourwebsite.com/logo.jpg",
                                },
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://yourwebsite.com/post/${params.slug}`,
                            },
                        }),
                    }}
                />
            </Head>

            <header className="pt-6 xl:pb-6 text-center">
                <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                        <img
                            src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Author's image"
                            className="rounded-full w-10 h-10"
                            width={40}
                            height={40}
                        />
                        <p className="text-sm text-gray-600">
                            Posted by <strong>Tom</strong>
                        </p>
                    </div>
                    <p className="text-base font-semibold leading-6 text-teal-500">
                        {new Date(data._createdAt).toLocaleDateString()}
                    </p>
                    <h1 className="text-3xl font-extrabold leading-9 text-primary dark:text-gray-100">
                        {data.title}
                    </h1>
                </div>
            </header>
            <div className="mx-auto xl:px-36 px-4 text-center divide-y divide-gray-200 pb-8 dark:divide-gray-700">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="prose max-w-xl pb-8 pt-10 dark:prose-invert leading-7 mx-auto text-justify">
                        <PortableText value={data.content} components={PortableTextComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}
