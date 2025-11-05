import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function timeLeft(targetDate) {
  const total = Math.max(0, targetDate - new Date().getTime());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const flipVariants = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -16, opacity: 0 },
};

function FlipDigit({ value }) {
  const str = value.toString().padStart(2, '0');
  return (
    <div className="relative w-16 sm:w-20 h-16 sm:h-20 bg-white/90 text-gray-900 rounded-xl shadow-md flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={str}
          variants={flipVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25 }}
          className="text-2xl sm:text-3xl font-semibold tracking-widest"
        >
          {str}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <FlipDigit value={value} />
      <span className="text-xs sm:text-sm text-gray-100/90">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ closesAt }) {
  const target = useMemo(() => new Date(closesAt).getTime(), [closesAt]);
  const [left, setLeft] = useState(() => timeLeft(target));

  useEffect(() => {
    const tick = () => setLeft(timeLeft(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="w-full">
      <p className="text-sm sm:text-base text-white/90 mb-3">Enrollment closes in:</p>
      <div className="flex items-end sm:items-center gap-3 sm:gap-4">
        <TimeBlock label="Days" value={left.days} />
        <span className="text-white/80 text-xl sm:text-2xl -mb-1">:</span>
        <TimeBlock label="Hours" value={left.hours} />
        <span className="text-white/80 text-xl sm:text-2xl -mb-1">:</span>
        <TimeBlock label="Minutes" value={left.minutes} />
        <span className="text-white/80 text-xl sm:text-2xl -mb-1">:</span>
        <TimeBlock label="Seconds" value={left.seconds} />
      </div>
    </div>
  );
}
