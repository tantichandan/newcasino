import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge, badgeVariants } from "@/components/ui/badge";

//href={`/resource/${id}`}

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
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

                  <h3 className="scroll-m-20 py-1 font-semibold tracking-tight">Welcome Bonus <span className="text-primary">${product.price}</span></h3>

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
