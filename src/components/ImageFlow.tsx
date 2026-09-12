import React from 'react';

const IMAGES = [
  '/flow-1.png',
  '/flow-2.png',
  '/flow-3.png',
  '/flow-4.png',
  '/flow-1.png',
  '/flow-2.png',
  '/flow-3.png',
  '/flow-4.png',
];

export const ImageFlow: React.FC = () => {
  return (
    <div 
      className="relative w-full overflow-hidden bg-transparent pb-8 -mt-12 sm:-mt-16 z-10 pointer-events-none md:pointer-events-auto"
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
      }}
    >
      <div className="flex gap-4 sm:gap-6 min-w-max animate-marquee hover:[animation-play-state:paused] will-change-transform">
        {IMAGES.map((src, idx) => {
          // Slight rotations
          const rotation = idx % 2 === 0 ? '-rotate-2' : 'rotate-2';
          const offset = idx % 3 === 0 ? 'mt-4' : 'mt-0';

          return (
            <div
              key={idx}
              className={`relative w-48 sm:w-64 md:w-80 h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 hover:z-10 cursor-pointer ${rotation} ${offset}`}
            >
              <img
                src={src}
                alt="Connect BV Project Thumbnail"
                className="w-full h-full object-cover filter brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none"></div>
            </div>
          );
        })}
        {/* Duplicate for infinite loop */}
        {IMAGES.map((src, idx) => {
          const rotation = idx % 2 === 0 ? '-rotate-2' : 'rotate-2';
          const offset = idx % 3 === 0 ? 'mt-4' : 'mt-0';

          return (
            <div
              key={`dup-${idx}`}
              className={`relative w-48 sm:w-64 md:w-80 h-32 sm:h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 hover:z-10 cursor-pointer ${rotation} ${offset}`}
            >
              <img
                src={src}
                alt="Connect BV Project Thumbnail"
                className="w-full h-full object-cover filter brightness-90 hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
