"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CasinoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const submitSearch = () => {
    if (searchTerm.trim()) {
      router.push(`?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a casino..."
        className="border rounded-lg p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={submitSearch}
        className="ml-2 px-4 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default CasinoSearch;
