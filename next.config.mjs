/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io", // Keep your existing pattern for Sanity
        },
        {
          protocol: "https",
          hostname: "thecasinoloot.com", // Add this to allow images from thecasinoloot.com
        }
      ],
    },
  };
  
  export default nextConfig;
  