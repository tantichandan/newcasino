import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge, badgeVariants } from "@/components/ui/badge";

//href={`/resource/${id}`}

async function getData() {
  const query = `*[_type == "product"][0...5] | order(_createdAt desc) {
        _id,
          price,
        name,
        click,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Casinos
          </h2>

          <Link className="text-primary font-semibold flex items-center gap-x-1" href="/allproduct">
            See All{""}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="relative m-2 p-0 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 bg-gray-200 ">

                <div className="mx-4 mt-4 justify-center items-center overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <div className=" object-cover relative h-40 w-40 rounded-full bg-indigo-500 rounded-t-xl flex justify-center items-center">
                    <Link href={`/product/${product.slug}`}>

                      <Image
                        src={product.imageUrl}
                        alt="Product image"
                        className="object-cover m-auto object-center rounded-full"
                        width={200}
                        height={200}
                      />

                    </Link>
                  </div>
                </div>

                <div className="flex-col justify-center items-center gap-2 p-2">
                  <div>
                    <h3 className="text-sm text-gray-700 justify-center">

                      <Link href={`/${product.categoryName}`}>

                        <p className="text-sm text-black scroll-m-20 tracking-tight">

                          {product.categoryName}
                        </p>


                      </Link>




                    </h3>

                    <div className="flex flex-col">

                      <Link

                        href={`/product/${product.slug}`}

                      >
                        <h3 className="scroll-m-20 text-xl text-primary font-bold tracking-tight"> {product.name} Casino </h3>


                      </Link>

                      <h3 className="block font-sans text-base antialiased font-light leading-relaxed text-black">Free play/Bonus <span className="text-primary">$€£ {product.price}</span></h3>

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


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
