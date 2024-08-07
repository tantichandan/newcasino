import { post } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Function to fetch data for a specific post slug
async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
}

// Component to display the post content based on slug
export default async function SlugPage({ params }: { params: { slug: string } }) {
    // Fetching data for the specific post
    const data = (await getData(params.slug)) as post;

    // Component to render PortableText, including custom components
    const PortableTextComponent = {
        types: {
            image: ({ value }: { value: any }) => (
                <Image
                    src={urlFor(value).url()}
                    alt="image"
                    className="mx-auto"
                    width={800}
                    height={800}
                />
            ),
        },
    };

    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6 text-center">
                <p className="text-base font-xl leading-6 text-teal-500">
                    {new Date(data._createdAt).toISOString().split("T")[0]}
                </p>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary dark:text-gray-100 sm:text-4xl md:text-5xl mt-4">
                    {data.title}
                </h1>
            </header>

            <div className="mx-auto xl:px-36 px-4 text-justify divide-y divide-gray-200 pb-8 dark:divide-gray-700">
                <div className="prose max-w-none pb-8 pt-10 dark:prose-dark prose-lg">
                    <PortableText
                        value={data.content}
                        components={PortableTextComponent}
                    />
                </div>
            </div>
        </div>
    );
}
