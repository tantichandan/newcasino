import Link from 'next/link';

const submenuLinks = ["Aus", "UK", "US", "French", "Free", "CA", "Global", "All", "Blog"];

const Submenu = () => {
  return (
    <div className="flex justify-center mb-8 px-4">
      <div className="flex flex-wrap w-full max-w-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border border-gray-300 overflow-hidden shadow-md justify-center sm:justify-between">
        {submenuLinks.map((item) => (
          <Link
            key={item}
            href={`/${encodeURIComponent(item)}`}
            aria-label={`Navigate to ${item} page`}
            className="flex-1 sm:flex-none sm:w-auto text-white text-center py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
