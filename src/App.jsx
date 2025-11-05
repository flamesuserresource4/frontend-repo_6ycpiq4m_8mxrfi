import React, { useState } from 'react';
import PopupModal from './components/PopupModal';

export default function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900">
      {/* Simple page backdrop */}
      <header className="px-6 py-4 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#8B0000]"></div>
            <span className="font-semibold">VLS Law Academy</span>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Open Offer
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Welcome to VLS Law Academy</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prepare confidently for the All India Bar Examination with our focused, expertly designed courses.
        </p>
      </main>

      <PopupModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
