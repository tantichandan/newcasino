import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == "product"][]{
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      click

  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function AllProduct() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white px-4">

      

      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className='flex justify-evenly h-12 w-64 divide-x overflow-hidden rounded-lg border'>
          <Link href="/Aus" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            Aus

          </Link>
          <Link href="/UK" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            UK

          </Link>
          <Link href="/US" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            US

          </Link>
          <Link href="/Deposit" className='flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            Dep

          </Link>
          <Link href="/Free" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            ND

          </Link>

          <Link href="/Blog" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            Blog

          </Link>

          <Link href="/allproduct" className='flex w-3/4 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>

            All

          </Link>

        </div>

      </div>
        
        
        <div className=" py-2 flex justify-between items-center">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            You will have geat gamng exprience
          </h2>


        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">

                <Link href={`/product/${product.slug}`}>

                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />

                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm pb-1 text-gray-700 justify-center">

                    <Link href={`/${product.categoryName}`} className={buttonVariants({ variant: "outline" })}>

                      <p className="text-sm text-black scroll-m-20 font-semibold tracking-tight">

                        {product.categoryName} Casino
                      </p>


                    </Link>




                  </h3>

                  <div className="flex flex-col">

                    <Link

                      href={`/product/${product.slug}`}

                    >
                      <h3 className="scroll-m-20 text-xl text-primary font-bold tracking-tight"> {product.name}</h3>


                    </Link>

                    <h3 className="scroll-m-20 py-1 font-semibold tracking-tight">Welcome Bonus ${product.price}</h3>

                  </div>
                </div>



                <Link

                  className={buttonVariants()}

                  href={product.click}

                  target="_blank"

                >

                  Start Playing

                </Link>








              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
