import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import EnrollButton from './EnrollButton';
import ImageArea from './ImageArea';

export default function PopupModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative mx-4 w-full max-w-4xl rounded-2xl shadow-2xl"
          >
            {/* Optional glowing border */}
            <div className="absolute -inset-[2px] rounded-[22px] bg-gradient-to-r from-[#8B0000] via-rose-400 to-[#8B0000] opacity-20 blur-sm" aria-hidden />

            <div className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl bg-white">
              {/* Left */}
              <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-rose-200 via-rose-300 to-[#8B0000] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.15),transparent_40%)]" aria-hidden />
                <div className="relative space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow">AIBE Crash Course Starts Soon!</h2>
                  <p className="text-sm sm:text-base font-medium text-white/95">November 14–16 • 3-Day Intensive</p>
                  <p className="text-sm sm:text-base text-white/90">Next AIBE Exam – November 30, 2025</p>
                  <p className="text-sm sm:text-base text-white/95 font-semibold">Only 50 Seats Available</p>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-prose">
                    Join our intensive AIBE preparation program with expert faculty and a 100% success focus.
                  </p>

                  <div className="pt-2 sm:pt-4">
                    <CountdownTimer closesAt="2025-11-13T23:59:59" />
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-6">
                <ImageArea />
                <EnrollButton onClick={() => alert('Thank you! Enrollment options will open.')} />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center shadow-md hover:opacity-90"
              >
                ×
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
