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
    const data = await getData(params.slug) as post;

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
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            )
        }
    };

    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <Head>
                <title>TheCasinoLoot Blog - Top Online Casino & Gambling Platform</title>
                <meta name="description" content="Explore Casino Loot's blog for insights on the top online casino platform. Stay updated on online gaming, gambling tips and the latest trends in online casinos." />
            </Head>
            <header className="pt-6 xl:pb-6 text-center">
                <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                        <img
                            src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Author's image"
                            className="rounded-full w-10 h-10" // Circle profile image
                            width={40} // Adjust size
                            height={40}
                        />
                        <p className="text-sm text-gray-600">Created by <strong>Austin</strong></p> {/* Hard-coded name */}
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
                    <div className="prose max-w-xl pb-8 pt-10 dark:prose-invert leading-7 mx-auto text-justify"> {/* Justified text */}
                        <PortableText
                            value={data.content}
                            components={PortableTextComponent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
