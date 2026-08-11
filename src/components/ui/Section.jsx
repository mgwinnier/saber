import React from 'react';

// contract: <Section variant="white|paper|navy" className? id? bleed?> children in max-w-6xl container

const variants = {
  white: 'bg-white',
  paper: 'bg-paper',
  navy: 'bg-navy-950 text-white',
};

function Section({ variant = 'white', className = '', id, bleed = false, children, ...rest }) {
  const base = `py-20 md:py-28 ${variants[variant] || variants.white} ${className}`.trim();

  if (bleed) {
    return (
      <section id={id} className={base} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={base} {...rest}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export default Section;
