import { post } from "@/app/interface";
import { client } from "@/app/lib/sanity"
import { urlFor } from "@/app/lib/sanityImageUrl";

import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current =="${slug}"][0]`;


    const data = await client.fetch(query)
    return data
}




export default async function SlugPage({

    params,
}:

    {
        params: { slug: string }

    }) {

    const data = (await getData(params.slug)) as post;


    const  PortableTextComponent = {
        types: {
            image: ({value}: {value:any}) => (

                <Image 

                src={urlFor(value).url()}

                alt="image"

                className="rounded-lg"
                width={800}
                height={800}

                
                />

            )

        }
    }





    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">

            <header className="pt-6 xl:pb-6">

                <div className="space-y-1 text-center">
                    <div className="space-y-10">
                        <div>
                            <p className="text-base font-xl leading-6 text-teal-500">

                            {new Date(data._createdAt).toISOString().split("T")[0]}

                            </p>
                        </div>

                    </div>

                    <div>
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">

                            {data.title}
                        </h1>
                    </div>

                </div>

            </header>

            <div className=" mx-auto px-10 text-justify divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">

                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg leading-7 [&:not(:first-child)]:mt-6">

                        <PortableText 
                        
                        value={data.content} 

                        components={PortableTextComponent}
                        
                        
                         />

                         

                        

                    </div>

                </div>

            </div>



        </div>
    )
}
