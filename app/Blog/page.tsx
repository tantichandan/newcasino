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
                <title>TheCasinoLoot Blog - Top Online Casino & Gambling Platform</title>
                <meta name="description" content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips, and the latest trends in online casinos." />
            </Head>

            <Submenu/>
            <section className="max-w-2xl px-6 sm:pb-6 lg:max-w-7xl lg:px-8">
                <div className="mb-6 md:mb-16">
                    <div className="mb-4 mx-auto justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-8">
                        <h1 className="mb-4 text-3xl font-bold text-primary sm:text-4xl md:pb-4 md:text-5xl">
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
                                    <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
                                        <div>
                                            <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900">
                                                {post.title}
                                            </h3>
                                        </div>
                                        <p className="prose max-w-none text-gray-500 line-clamp-2">
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
