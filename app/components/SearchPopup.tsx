import React, { useState } from 'react';
import { simplifiedProduct } from '../interface';
import Link from 'next/link';
import { client } from '../lib/sanity';

interface SearchPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const fetchSearchResults = async (query: string) => {
    // Escape single quotes in the query to prevent errors
    const escapedQuery = query.replace(/'/g, "\\'");
    
    const searchQuery = `*[_type == "product" && name match '${escapedQuery}*'][0...10]{
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url,
        click
    }`;

    try {
        return await client.fetch(searchQuery);
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<simplifiedProduct[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (searchQuery) {
            setLoading(true);
            try {
                const searchResults = await fetchSearchResults(searchQuery);
                setResults(searchResults);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            style={{ zIndex: 9999 }}
        >
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">Search Products</h2>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full p-3 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Search
                </button>
                {loading ? (
                    <div className="mt-4 text-center text-gray-500">Loading...</div>
                ) : (
                    <div className="mt-4 max-h-60 overflow-y-auto">
                        {results.length > 0 ? (
                            <div className="space-y-4">
                                {results.map((product) => (
                                    <div key={product._id} className="flex items-center p-2 border-b border-gray-200">
                                        <Link href={`/product/${product.slug}`} className="flex items-center w-full">
                                            <div className="relative h-16 w-16 mr-4">
                                                <img
                                                    src={product.imageUrl}
                                                    alt={`${product.name} image`}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-md font-semibold">{product.name}</h3>
                                                <p className="text-sm text-gray-600">{product.categoryName} Casino</p>
                                                <p className="text-sm text-gray-600">Price: ${product.price}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPopup;
