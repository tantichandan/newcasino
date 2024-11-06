import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Newest from './Newest';

export default function HeroAndBlog() {
    return (
        <div>
            <Head>
                <title>TheCasinoLoot - Best Online Exclusive Gambling Platform</title>
                <meta name="description" content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play and big wins anytime." />
            </Head>

            {/* Hero Section with Original Background */}
            <section className="py-12">
                <div className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 flex flex-col items-center text-center">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                        Discover the Best Online Casinos
                    </h1>
                    <p className="leading-7 mb-6 text-gray-600">
                        Welcome to TheCasinoLoot: One-Stop Solution for Online Casino Players to Find Their Ideal Online Casinos.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/Aus">
                            <button className="bg-primary text-white py-2 px-4 shadow hover:bg-yellow-500 transition duration-200">
                                AUS
                            </button>
                        </Link>
                        <Link href="/UK">
                            <button className="bg-primary text-white py-2 px-4 shadow hover:bg-yellow-500 transition duration-200">
                                UK
                            </button>
                        </Link>
                        <Link href="/US">
                            <button className="bg-primary text-white py-2 px-4  shadow hover:bg-yellow-500 transition duration-200">
                                US
                            </button>
                        </Link>
                        <Link href="/Free">
                            <button className="bg-primary text-white py-2 px-4  shadow hover:bg-yellow-500 transition duration-200">
                                ND
                            </button>
                        </Link>
                        <Link href="/All">
                            <button className="bg-primary text-white py-2 px-4  shadow hover:bg-yellow-500 transition duration-200">
                                All
                            </button>
                        </Link>
                        <Link href="/Global">
                            <button className="bg-primary text-white py-2 px-4 shadow hover:bg-yellow-500 transition duration-200">
                                Global
                            </button>
                        </Link>
                        <Link href="/Free">
                            <button className="bg-primary text-white py-2 px-4  shadow hover:bg-yellow-500 transition duration-200">
                                Free
                            </button>
                        </Link>
                        <Link href="/CA">
                            <button className="bg-primary text-white py-2 px-4 shadow hover:bg-yellow-500 transition duration-200">
                                CA
                            </button>
                        </Link>
                        <Link href="/Blog">
                            <button className="bg-primary text-white py-2 px-4 shadow hover:bg-yellow-500 transition duration-200">
                                Blogs
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Newest/>

            {/* Blog Section with Soft Gradient Background */}
            <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Understanding RTP in Online Casinos</h2>

                    <p className="leading-relaxed text-gray-700 mb-6 text-justify">
                        There are so many things that we look for while signing up for a casino. Of course, security, variety of games, and customer service matter a lot. Apart from this, there is one more term, which is a popular index for casino rating. Playing online can be fun when you realize the slots you're playing give you good RTP. RTP stands for Return to Player. It is the nature of a game's payout. There are millions of games out there, but only a few pay well. Online casinos with the highest slot payouts are likely to rank at the top of the list. There are millions of the best payout online casinos, but payout shouldn't be the only indicator when it comes to choosing a casino.
                    </p>
                    <p className="leading-relaxed text-gray-700 mb-6 text-justify">
                        Along with the best payout games, the reputation of the casino, customer service, bonus conditions, and withdrawal process should also be considered. Now the question is, what is <Link href={"https://www.independent.co.uk/games/return-to-player-online-casino-b2614976.html#:~:text=RTP%20is%20calculated%20by%20dividing,total%20wagers%20x%20100%20%3D%20RTP"} target="blank">RTP</Link> (Return to Player)? In simple words, it is the payoff of a game. A 98% RTP doesn't mean you'll get $98 of payout on every bet of $100. It is measured on the total wagered over some time by the casino's players, and the payout it has generated. Next time while choosing a game, click on the game details to check the RTP of that game. Chances of loss will be less in the best payout online casinos. A casino that consists of the best payout slot games gives you a higher chance of winning. With this, the casino's quick payout or withdrawal process is the cherry on the cake. 95% to 99% RTP is considered to be the best, and while listing casinos on our site, we made sure this is given special attention.
                    </p>
                </div>
            </section>
        </div>
    );
}
