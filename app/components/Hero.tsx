import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Newest from './Newest';

export default function HeroAndBlog() {
    return (
        <div className="relative">
            <Head>
                <title>TheCasinoLoot - Best Online Exclusive Gambling Platform</title>
                <meta
                    name="description"
                    content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play, and big wins anytime."
                />
                <meta property="og:title" content="TheCasinoLoot - Best Online Exclusive Gambling Platform" />
                <meta property="og:description" content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play, and big wins anytime." />
                <meta property="og:image" content="https://thecasinoloot.com/og-image.jpg" />
                <meta property="og:url" content="https://thecasinoloot.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="TheCasinoLoot - Best Online Exclusive Gambling Platform" />
                <meta name="twitter:description" content="Experience exclusive online gambling at Casino Loot, the best online casino and gambling platform. Enjoy thrilling games, secure play, and big wins anytime." />
                <meta name="twitter:image" content="https://thecasinoloot.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="canonical" href="https://thecasinoloot.com" />
            </Head>

            {/* Hero Section */}
            <section
                className="pt-20 pb-16 relative"
                style={{
                    background: '',
                }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center">
                    {/* Left Text Section */}
                    <div className="text-gray-600 lg:w-1/2">
                        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
                            <span className="text-yellow-400">Discover</span> the Best Online Casinos
                        </h1>
                        <p className="text-lg font-medium mb-8">
                            Welcome to <strong>TheCasinoLoot</strong>, your ultimate guide to the top online casinos
                            offering exclusive games, exciting bonuses, and secure gameplay.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {['AUS', 'UK', 'US', 'All', 'Global', 'Free', 'CA', 'Blogs'].map((region) => (
                                <Link href={`/${region}`} key={region}>
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow-lg transition-all duration-300">
                                        {region}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="/hero.jpeg" // Replace with your actual image URL
                            alt="Casino Loot Hero"
                            className="w-full max-w-sm lg:max-w-md"
                        />
                    </div>
                </div>
            </section>

            

            {/* Blog Section */}
            <section className="py-12">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                        Understanding <mark>RTP</mark> in Online Casinos
                    </h2>

                    <p className="leading-relaxed text-gray-800 mb-6 font-sans text-justify">
                        There are so many things that we look for while signing up for a casino. Of course, security,
                        variety of games, and customer service matter a lot. Apart from this, there is one more term,
                        which is a popular index for casino rating. Playing online can be fun when you realize the slots
                        you're playing give you good RTP. RTP stands for Return to Player. It is the nature of a game's
                        payout. There are millions of games out there, but only a few pay well. Online casinos with the
                        highest slot payouts are likely to rank at the top of the list. There are millions of the best
                        payout online casinos, but payout shouldn't be the only indicator when it comes to choosing a
                        casino.
                    </p>
                    <p className="leading-relaxed text-gray-800 mb-6 font-sans text-justify">
                        Along with the best payout games, the reputation of the casino, customer service, bonus
                        conditions, and withdrawal process should also be considered. Now the question is, what is{' '}
                        <mark>
                            <Link
                                href={
                                    'https://www.independent.co.uk/games/return-to-player-online-casino-b2614976.html#:~:text=RTP%20is%20calculated%20by%20dividing,total%20wagers%20x%20100%20%3D%20RTP'
                                }
                                target="blank"
                            >
                                RTP
                            </Link>{' '}
                            (Return to Player)?
                        </mark>{' '}
                        In simple words, it is the payoff of a game. A 98% RTP doesn't mean you'll get $98 of payout on
                        every bet of $100. It is measured on the total wagered over some time by the casino's players,
                        and the payout it has generated. Next time while choosing a game, click on the game details to
                        check the RTP of that game. Chances of loss will be less in the best payout online casinos. A
                        casino that consists of the best payout slot games gives you a higher chance of winning. With
                        this, the casino's quick payout or withdrawal process is the cherry on the cake. 95% to 99% RTP
                        is considered to be the best, and while listing casinos on our site, we made sure this is given
                        special attention. <br /> <br />

                        We’ve done the hard work for you, so you can sit back, relax, and
            enjoy your game without worrying about withdrawals or game payouts.
            Below are some of the finest online casinos available. Click on the
            name or the image to learn more about each casino.
                    </p>


           
                </div>
            </section>
        </div>
    );
}
