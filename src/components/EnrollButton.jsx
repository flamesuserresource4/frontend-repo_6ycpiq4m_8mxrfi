import React from 'react';
import { motion } from 'framer-motion';

export default function EnrollButton({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(139,0,0,0.35)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full py-4 px-6 rounded-2xl font-semibold text-white text-lg bg-[#8B0000] focus:outline-none focus:ring-4 focus:ring-[#8B0000]/30 shadow-md"
    >
      Enroll Now
    </motion.button>
  );
}
