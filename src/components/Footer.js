import React from 'react';
import { Link } from 'react-router-dom';
import logoMarkWhite from '../assets/logo-mark-white.png';
import { phone, email, city, duns, cage } from '../data/company';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/vendor', label: 'Become a Vendor' },
  { to: '/statement', label: 'Capability Statement' },
  { to: '/contact', label: 'Contact' },
];

const contactRows = [
  { label: 'Phone', value: phone, href: `tel:${phone.replace(/-/g, '')}` },
  { label: 'Email', value: email, href: `mailto:${email}` },
  { label: 'Location', value: city },
];

const headingClass = 'font-display uppercase text-sm tracking-wider text-gold-400';

function scrollToTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white border-t-2 border-gold-500">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr,1.1fr] lg:gap-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Saber Construction — home">
              <img src={logoMarkWhite} alt="" className="h-12 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold tracking-tight text-xl text-white">SABER</span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-white/60">
                  CONSTRUCTION
                </span>
              </span>
            </Link>
            <p className="mt-6 text-white/70 max-w-sm leading-relaxed">
              Certified Service-Disabled Veteran-Owned Small Business delivering commercial,
              government, and residential construction across Tennessee.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                Certified SDVOSB
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                Licensed &amp; Insured
              </span>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Navigate</h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mr-0 h-[2px] w-0 bg-gold-500 transition-all duration-300 group-hover:mr-2 group-hover:w-3"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-6 space-y-4">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    {row.label}
                  </p>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="mt-1 inline-block font-medium text-white hover:text-gold-400 transition-colors duration-300"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-white">{row.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8 text-center text-sm text-white/50 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; {year} Saber Construction, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>{`SDVOSB · CAGE ${cage} · DUNS ${duns}`}</p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors duration-300 hover:border-gold-400 hover:text-gold-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 14l6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
