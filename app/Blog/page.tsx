import Link from "next/link";
import { post } from "../interface";
import { client } from "../lib/sanity";


async function getData(){
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query)

    return data;
}



export default async function page() {

    const data = (await getData()) as post[]



  return (
    //<div className="px-4 divide-y divide-gray-200 dark:divide-gray-700">
        //<div className="space-y-2 pt-6 pb-8 md:space-y-5">

            //<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                //All posts
            //</h1>

        //</div>
      
    //</div>

    <section className='max-w-2xl px-6 sm:pb-6 lg:max-w-7xl lg:px-8'>

            <div className='mb-6 md:mb-16'>
                <div className='mb-4 mx-auto justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-8'>

                    <h1 className='mb-4 text-3xl font-bold text-primary sm:text-4xl md:pb-4 md:text-5xl'>
                        All The Blogs
                    </h1>

                   

                </div>

                <ul>
                    {data.map((post) =>(

                        <li key={post._id} className="py-2">
                            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">

                                <div>

                                    <p className="text-base font-medium leading-6 text-teal-500">
                                        {new Date(post._createdAt).toISOString().split("T")[0]}
                                    </p>

                                </div>

                                <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3" >

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








  )
}
