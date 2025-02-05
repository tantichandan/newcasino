import { post } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";
import { Clock, Calendar, User, Share2, BookmarkPlus, ChevronLeft, Star, Quote, Eye, MessageCircle } from 'lucide-react';
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0] {
        ...,
        "estimatedReadTime": length(pt::text(content)) / 5 / 180,
        "categories": categories[]->title,
        "authorName": authorName,
        "authorBio": authorBio,
        "authorAvatar": authorAvatar.asset->url,
    }`;
    const data = await client.fetch(query);
    return data;
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
    const data = (await getData(params.slug)) as post;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-amber-400 hover:text-amber-300 flex items-center gap-2">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <figure className="my-12">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={urlFor(value).url()}
                            alt={value.alt || "Post image"}
                            width={400}
                            height={350}
                            className="w-full object-cover"
                        />
                    </div>
                    {value.caption && (
                        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            ),
        },
        block: {
            h1: ({ children }: any) => (
                <h1 className={`${playfair.className} text-3xl font-bold my-8 text-gray-900`}>
                    {children}
                </h1>
            ),
            h2: ({ children }: any) => (
                <h2 className={`${playfair.className} text-2xl font-bold my-6 text-gray-900`}>
                    {children}
                </h2>
            ),
            h3: ({ children }: any) => (
                <h3 className={`${playfair.className} text-xl font-bold my-4 text-gray-900`}>
                    {children}
                </h3>
            ),
            normal: ({ children }: any) => (
                <p className="text-gray-700 leading-relaxed my-4 text-lg">
                    {children}
                </p>
            ),
            blockquote: ({ children }: any) => (
                <blockquote className="relative my-8 p-8 bg-amber-50 rounded-2xl">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-amber-500" />
                    <p className="italic text-gray-800 text-lg relative z-10">
                        {children}
                    </p>
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }: any) => (
                <ul className="my-6 space-y-3 text-gray-700 list-none">
                    {children.map((item: any, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ),
            number: ({ children }: any) => (
                <ol className="my-6 space-y-3 text-gray-700 list-none counter-reset-item">
                    {children.map((item: any, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-medium">
                                {index + 1}
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ol>
            ),
        },
    };

    return (
        <div className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 ${inter.className}`}>
            <Head>
                <title>{data.title} - TheCasinoLoot Blog</title>
                <meta name="description" content={data.overview} />
                <link rel="canonical" href={`https://thecasinoloot.com/post/${params.slug}`} />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link 
                    href="/blog"
                    className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Hero Section */}
                    {/* {data.images && (
                        <div className="relative h-[400px]">
                            <Image
                                src={urlFor(data.images).url()}
                                alt={data.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>
                    )} */}

                    {/* Content Container */}
                    <div className="p-8 lg:p-12">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {data.categoryName?.map((category: string) => (
                                <span 
                                    key={category}
                                    className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className={`${playfair.className} text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight`}>
                            {data.title}
                        </h1>

                        {/* Author Section */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
                                    <Image
                                        src={data.authorAvatar}
                                        alt={data.authorName || "Author"}
                                        
                                        className="object-cover"
                                        height={260}
                                        width={260}
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-gray-900">{data.authorName}</h3>
                                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">
                                            Casino Expert
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-gray-600 md:ml-auto">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{new Date(data._createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{Math.ceil(data.estimatedReadTime || 5)} min read</span>
                                </div>
                            </div>
                        </div>

                        {/* Overview */}
                        {data.overview && (
                            <div className="mb-12 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-l-4 border-amber-400">
                                <p className="text-gray-800 text-lg italic leading-relaxed">
                                    {data.overview}
                                </p>
                            </div>
                        )}

                        {/* Main Content */}
                        <div className="prose prose-lg max-w-none">
                            <PortableText 
                                value={data.content} 
                                components={PortableTextComponent}
                            />
                        </div>

                        <br /> <br />

                        <h3>About the Author</h3> <br />

                        <p className="text-gray-600 text-sm">{data.authorBio}</p>

                        {/* Article Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-6">
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                                        <Eye className="w-5 h-5" />
                                        <span>2.5k views</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>12 comments</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
                                        <Share2 className="w-5 h-5" />
                                        Share
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded-lg transition-colors">
                                        <BookmarkPlus className="w-5 h-5" />
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}