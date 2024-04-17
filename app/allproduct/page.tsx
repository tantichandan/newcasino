import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  const query = `*[_type == "product"][0...27]{
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
    <div className="bg-white">



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


        <div className=" py-2 flex flex-col justify-between items-center">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-primary">
            Join Our Casino for Fun Excitement and Big Win!
          </h2>

          <p className="py-3  text-gray-500 text-justify">Step into the world of online fun and excitement like never before! Our online casino is your one-stop destination for all things thrilling and entertaining. Picture yourself spinning the reels of your favorite slots or testing your luck at classic table games, all from the comfort of your couch. With exciting bonuses, easy-to-use features, and friendly customer support, we're here to make your gaming experience a breeze. Start playing now and get ready for non-stop entertainment, big wins, and endless fun!</p>


        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
          {data.map((product) => (
            <div key={product._id} className="relative m-2 p-0 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">

                <div className="mx-4 mt-4 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">

                  <div className="object-cover relative h-40 w-40 rounded-full bg-indigo-500 rounded-t-xl flex justify-center items-center">


                    <Link href={`/product/${product.slug}`}>

                      <Image
                        src={product?.imageUrl}
                        alt="Product image"
                        className="object-cover mx-auto object-center rounded-full"
                        width={200}
                        height={200}
                      />

                    </Link>


                  </div>

                </div>






                <div className="flex-col justify-center items-center gap-2 p-1">
                  <div>
                    <h3 className="text-sm text-gray-700 justify-center">

                      <Link href={`/${product.categoryName}`} >

                        <p className="text-sm text-black scroll-m-20 tracking-tight">

                          {product.categoryName} Casino
                        </p>


                      </Link>




                    </h3>

                    <div className="flex flex-col py-1">

                      <Link

                        href={`/product/${product?.slug}`}

                      >
                        <h3 className="scroll-m-20 tracking-tight text-primary"> {product.name}</h3>

                        <h4 className="block font-sans text-base antialiased font-light leading-relaxed text-black">Free play/Bonus <span className="text-primary">($€£) {product.price}</span></h4>


                      </Link>



                    </div>
                  </div>

                  <div className="pb-1">
                    <Link

                      className={buttonVariants()}

                      href={product.click}

                      target="_blank"



                    >

                      Start Playing

                    </Link>
                  </div>












                </div>



              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
