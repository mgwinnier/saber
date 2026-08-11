import React, { useRef, useState } from 'react';

function FilmPlayer({ src, poster, duration, caption, className = '' }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setStarted(true);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play().catch(() => {});
    }
  };

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl bg-navy-950 shadow-2xl shadow-navy-950/40 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        className="h-full w-full object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play the Saber Construction video"
          className="group absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
          />
          <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition-all duration-300 group-hover:bg-gold-400 group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 sm:h-8 sm:w-8 translate-x-[2px]"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 6.5v11l9-5.5z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-5 right-24 text-left text-sm sm:text-base text-white/90">
            {caption}
          </span>
          <span className="absolute bottom-4 right-5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
            {duration}
          </span>
        </button>
      )}
    </div>
  );
}

export default FilmPlayer;
