// --- New AllBoardsCatalog page ---
'use client';

import React, { useState } from 'react';
import { SURFBOARDS } from './data';
import BoardCard from '../_components/BoardCard';

export default function AllBoardsCatalog() {
  const [search, setSearch] = useState('');

  const filteredBoards = SURFBOARDS.filter(
    (board) =>
      board.brand.toLowerCase().includes(search.toLowerCase()) ||
      board.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Boards Catalog</h1>
      <div className="mb-6">
        <input
          className="w-full max-w-md border border-gray-300 rounded px-3 py-2 text-lg"
          placeholder="Search by brand or model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search boards"
        />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredBoards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </section>
      {filteredBoards.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No boards found.</div>
      )}
    </main>
  );
}
