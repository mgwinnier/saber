import React from 'react';
import { Link } from 'react-router-dom';

// contract: <Button to|href|onClick variant="primary|outline|ghost-light" arrow? className? ...rest>

const base =
  'group inline-flex items-center justify-center font-display font-semibold uppercase tracking-wide text-sm px-7 py-3.5 rounded-md transition-colors duration-300';

const variants = {
  primary: 'bg-gold-500 text-navy-950 hover:bg-gold-600',
  outline: 'border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
  'ghost-light': 'border border-white/40 text-white hover:bg-white hover:text-navy-900',
};

function Button({
  to,
  href,
  onClick,
  variant = 'primary',
  arrow = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim();

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export default Button;
