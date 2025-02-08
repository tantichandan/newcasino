import React from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Diamond,
  Sparkles,
  Shield,
  Trophy,
  Zap,
  Globe2,
  Gift,
  Clock4,
} from "lucide-react";
import "../styles/hero.css";
import Newest from "../components/Newest";

export default function Hero() {
  const regions = [
    { name: "Aus", icon: "🇦🇺", bonus: "$1,500", featured: true },
    { name: "UK", icon: "🇬🇧", bonus: "£2,000", featured: true },
    { name: "US", icon: "🇺🇸", bonus: "$3,000", featured: true },
    { name: "CA", icon: "🇨🇦", bonus: "C$1,000", featured: false },
    { name: "Global", icon: "🌍", bonus: "€2,000", featured: false },
    { name: "Free", icon: "🎰", bonus: "200 Spins", featured: true },
    { name: "French", icon: "🎰", bonus: "200 Spins", featured: true },
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Licensed & Secure",
      description: "All casinos are fully licensed and regulated",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Payouts",
      description: "Fast and reliable withdrawal processing",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Exclusive Bonuses",
      description: "Special rewards for our members",
    },
  ];

  const canonicalUrl = "https://thecasinoloot.com";
  const pageTitle = "Best Online Casinos Guide 2025 | High RTP Casino Reviews";
  const pageDescription =
    "Discover top-rated online casinos with the highest RTP rates, exclusive bonuses, and instant payouts. Expert reviews, 24/7 support, and trusted casino recommendations.";

  return (
    <div className="relative">
      <Head>

      <title>{pageTitle}</title>
        
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://thecasinoloot.com/twitter-image.jpg"
        />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "TheCasinoLoot",
            url: canonicalUrl,
            description: pageDescription,
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://thecasinoloot.com/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TheCasinoLoot",
            url: canonicalUrl,
            logo: "https://thecasinoloot.com/logo.png",
            sameAs: [
              "https://twitter.com/thecasinoloot",
              "https://facebook.com/thecasinoloot",
              "https://instagram.com/thecasinoloot",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-CASINO",
              contactType: "customer service",
              availableLanguage: ["English"],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is RTP in online casinos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RTP (Return to Player) represents the percentage of wagered money that a game returns to players over time. A 98% RTP indicates the game's long-term payout rate across all players.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good RTP range for online casinos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "95% - 99% RTP is considered excellent, offering the best chances of winning over time.",
                },
              },
            ],
          })}
        </script>
      </Head>

      <div className="hero-gradient relative overflow-hidden">
        {/* Animated background elements */}

        <div className="absolute inset-0">
          {/* Original floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full opacity-20 floating-element"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 floating-element"
            style={{ animationDelay: "-2s" }}
          ></div>
          <div
            className="absolute top-40 right-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-20 floating-element"
            style={{ animationDelay: "-4s" }}
          ></div>

          {/* New animated elements */}
          {/* <div className="floating-card absolute top-[21%] left-[5%]" style={{animationDelay: '-1s'}}></div>
                    <div className="floating-card absolute top-[25%] right-[15%]" style={{animationDelay: '-3s'}}></div>
                    
                    <div className="floating-heart absolute top-[22%] left-[20%]" style={{animationDelay: '-2s'}}></div>
                    <div className="floating-heart absolute bottom-[25%] right-[25%]" style={{animationDelay: '-4s'}}></div> */}

          <div
            className="floating-spade absolute top-[4%] left-[30%]"
            style={{ animationDelay: "-1.5s" }}
          ></div>
          <div
            className="floating-spade absolute bottom-[35%] right-[20%]"
            style={{ animationDelay: "-3.5s" }}
          ></div>

          {/* <div className="floating-diamond absolute top-[3%] right-[40%]" style={{animationDelay: '-2.5s'}}></div>
                    <div className="floating-diamond absolute bottom-[30%] left-[25%]" style={{animationDelay: '-4.5s'}}></div> */}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 relative">
            {/* Hero Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium border border-amber-500/20">
                <Trophy className="w-4 h-4 mr-2" />
                #1 Trusted Casino Guide
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Your Gateway to Elite Casinos
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of winners at TheCasinoLoot. Discover exclusive
                bonuses, trusted reviews, and premium gaming experiences all in
                one place.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                {
                  value: "98%",
                  label: "Payout Rate",
                  icon: <Sparkles className="w-5 h-5 text-amber-400" />,
                },
                {
                  value: "24/7",
                  label: "Support",
                  icon: <Clock4 className="w-5 h-5 text-amber-400" />,
                },
                {
                  value: "100+",
                  label: "Verified Casinos",
                  icon: <Shield className="w-5 h-5 text-amber-400" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="hero-card p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
                >
                  <div className="flex flex-col items-center">
                    {stat.icon}
                    <div className="text-2xl font-bold text-white mt-3 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-amber-400 mb-3">{feature.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Regions Grid */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-center text-white mb-6">
                Choose Your Region for Exclusive Offers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                {regions.map(({ name, icon, bonus, featured }) => (
                  <Link href={`/${name}`} key={name} className="block">
                    <div
                      className={`region-card relative rounded-lg p-4 ${
                        featured
                          ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-2xl">{icon}</span>
                        <span className="font-bold text-white text-sm">
                          {name}
                        </span>
                        <span className="text-xs text-amber-400">{bonus}</span>
                        {featured && (
                          <span className="absolute -top-2 -right-2 bg-amber-500 text-xs px-2 py-0.5 rounded-full text-black font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Newest />

        {/* Blog Section */}

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="mx-auto max-w-4xl px-6">
            {/* Title with decorative elements */}
            <div className="text-center mb-12">
              <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Casino Education
              </span>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Understanding RTP in Online Casinos
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-gray-50/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8 border border-white/10">
                <p className="text-gray-700 text-lg leading-relaxed">
                  When choosing an online casino, several factors come into
                  play: security, game variety, and customer service are
                  crucial. However, one key metric often determines a casino's
                  true value - the RTP (Return to Player).
                </p>
              </div>

              {/* Main explanation card */}
              <div className="bg-blue-50/90 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-xl border border-blue-100/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-yellow-500 text-2xl">🎯</span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    What is RTP?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  RTP (Return to Player) represents the percentage of wagered
                  money that a game returns to players over time. A 98% RTP
                  doesn't guarantee winning $98 from every $100 bet, but rather
                  indicates the game's long-term payout rate across all players.
                </p>
              </div>

              {/* Info cards grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-yellow-50/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-100/50">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-500 text-2xl">★</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      Best RTP Range
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    95% - 99% RTP is considered excellent, offering the best
                    chances of winning over time.
                  </p>
                </div>
                <div className="bg-green-50/90 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100/50">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-500 text-2xl">✓</span>
                    <h4 className="text-xl font-bold text-gray-800">
                      Our Standards
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We carefully evaluate RTP rates when reviewing casinos to
                    ensure you get the best value.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-purple-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100/50">
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  We've done the hard work of analyzing RTP rates, security
                  measures, and overall gaming experience. Browse our curated
                  selection of top-rated casinos below to find your perfect
                  match.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
