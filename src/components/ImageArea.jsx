import React from 'react';
import { Trophy, GraduationCap, Gift } from 'lucide-react';

export default function ImageArea() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-40 h-28 sm:w-48 sm:h-32">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-rose-200 rounded-2xl shadow-inner" />
        <div className="absolute -top-3 -left-3 bg-amber-100 text-amber-700 rounded-xl px-2 py-1 text-xs font-medium shadow-sm flex items-center gap-1">
          <Gift className="w-3.5 h-3.5" /> Bonus
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500" />
          <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500" />
        </div>
        <div className="absolute -bottom-2 right-4 bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold shadow-sm">
          Success
        </div>
      </div>
      <p className="text-[11px] sm:text-xs text-gray-500 text-center">
        Limited time offer — Expert Faculty | Proven Success | Focused Coaching
      </p>
    </div>
  );
}
