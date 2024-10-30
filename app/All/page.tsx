import Link from "next/link";
import Image from "next/image";
import Head from "next/head"; // Import Head for metadata
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  try {
    const query = `*[_type == "product"][0...27]{
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      click
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array on error
  }
}

export default async function AllProduct() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <Head>
        <title>TheCasinoLoot - Best Online Casino & Gambling Platform</title>
        <meta name="description" content="Join The Casino Loot, the best online casino for exciting games and secure online gambling. Enjoy top-notch entertainment and big wins on a trusted platform." />
      </Head>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <SubmenuBar />
        <div className="py-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Dive Into Our Casino Adventure!
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 text-justify leading-relaxed">
            Finding the best casinos online is a tough job because the number of casinos launched every day is beyond imagination. If casinos are coming online, profit is what drives the business. Most casinos pursue money; however, a few realize that to earn more, they need to gain the trust of their players. Therefore, you should play at casinos where withdrawals are never an issue. There are rogue casinos that do not pay you on time. Factors that help you determine the best casinos to play at include withdrawal speed, RTP, deposit methods, variety of games, customer service, and casino bonuses. Before signing up, these key indicators should be considered. Above all, gambling should always be a source of entertainment, not a way to earn money or expect a career out of playing casinos. Choose casinos where your gambling cravings are met diligently. We want you to enjoy yourself, as the rest of the work is already done by our team. The casinos we have listed on our platform are trustworthy, licensed, and offer excellent customer service.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="relative p-3 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-lg transition duration-300 hover:shadow-xl max-w-[220px]">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square w-full overflow-hidden rounded-full border-4 border-white">
          <Image
            src={product.imageUrl}
            alt={`${product.name} image`}
            className="object-cover w-full h-full rounded-full"
            width={90}
            height={90}
          />
        </div>
      </Link>
      <div className="flex flex-col items-center mt-2">
        <h3 className="text-xs text-white">
          <Link href={`/${product.categoryName}`}>
            <span className="font-semibold">{product.categoryName} Casino</span>
          </Link>
        </h3>
        <h3 className="mt-1 text-lg font-bold text-white text-center">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="mt-2 bg-white p-2 rounded-lg shadow-sm w-full text-center">
          <h4 className="text-sm font-semibold text-blue-600">Free Play/Bonus:</h4>
          <p className="text-lg font-bold text-primary">${product.price}</p>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link className={`${buttonVariants()} px-2 py-1 text-sm`} href={product.click} target="_blank">
          Start Playing
        </Link>
      </div>
    </div>
  );
}

function SubmenuBar() {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex h-12 w-full max-w-5xl bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-md">
        {["Aus", "UK", "US", "Deposit", "Free", "Blog", "All"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="flex-1 flex items-center justify-center text-gray-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 font-semibold text-lg"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
