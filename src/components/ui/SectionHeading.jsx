import React from 'react';

// contract: <SectionHeading eyebrow? title lede? align="left|center" dark? className? />

function SectionHeading({ eyebrow, title, lede, align = 'left', dark = false, className = '' }) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`.trim()}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${
            dark ? 'text-gold-400' : 'text-gold-600'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <div
        className={`h-[3px] w-12 bg-gold-500 ${centered ? 'mx-auto' : ''} ${
          eyebrow ? 'mt-4' : ''
        }`}
      />

      {title && (
        <h2
          className={`mt-6 font-display font-bold tracking-tight text-balance text-3xl sm:text-4xl lg:text-5xl ${
            dark ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      )}

      {lede && (
        <p
          className={`mt-5 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            dark ? 'text-white/70' : 'text-navy-900/70'
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
