import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoMark from '../assets/logo-mark.png';
import logoMarkWhite from '../assets/logo-mark-white.png';
import { phone, email } from '../data/company';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/vendor', label: 'Become a Vendor' },
  { to: '/statement', label: 'Capability Statement' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = pathname === '/' && !scrolled;

  const close = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent shadow-none'
          : 'bg-white/80 backdrop-blur-md shadow-[inset_0_-1px_0_0_#DCE6F3]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" onClick={close} className="flex items-center gap-3 shrink-0" aria-label="Saber Construction — home">
            <span className="relative block h-[52px] w-[52px] md:h-16 md:w-16 shrink-0" aria-hidden="true">
              <img
                src={logoMark}
                alt=""
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                  transparent ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <img
                src={logoMarkWhite}
                alt=""
                className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
                  transparent ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-display font-bold tracking-tight text-xl transition-colors duration-300 ${
                  transparent ? 'text-white' : 'text-navy-900'
                }`}
              >
                SABER
              </span>
              <span
                className={`mt-1 text-[10px] font-semibold tracking-[0.3em] transition-colors duration-300 ${
                  transparent ? 'text-white/60' : 'text-navy-900/60'
                }`}
              >
                CONSTRUCTION
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `relative py-2 font-display font-semibold text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? transparent
                        ? 'text-white'
                        : 'text-navy-900'
                      : transparent
                      ? 'text-white/70 hover:text-white'
                      : 'text-navy-900/60 hover:text-navy-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-gold-500 transition-colors duration-300"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="font-display font-semibold text-sm uppercase tracking-wider bg-gold-500 text-navy-950 hover:bg-gold-600 rounded-md px-5 py-2.5 transition-colors duration-300"
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="lg:hidden relative flex h-11 w-11 items-center justify-center -mr-2"
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-6 transition-colors duration-300 ${
                  transparent ? 'bg-white' : 'bg-navy-900'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-6 transition-colors duration-300 ${
                  transparent ? 'bg-white' : 'bg-navy-900'
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-6 transition-colors duration-300 ${
                  transparent ? 'bg-white' : 'bg-navy-900'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay — portaled to <body>: backdrop-filter on the
          header makes it a containing block, so fixed inset-0 inside it would
          collapse to the header's box instead of the viewport */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden fixed inset-0 z-[60] overflow-y-auto bg-gradient-to-b from-navy-900 to-navy-950"
          >
            {/* faint blueprint grid texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
              }}
            />

            <div className="relative flex min-h-full flex-col px-6 pb-10">
              {/* top bar mirrors the header */}
              <div className="flex items-center justify-between h-20">
                <span className="flex items-center gap-3">
                  <img src={logoMarkWhite} alt="" aria-hidden="true" className="h-[52px] w-[52px]" />
                  <span className="flex flex-col leading-none">
                    <span className="font-display font-bold tracking-tight text-xl text-white">SABER</span>
                    <span className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-white/60">CONSTRUCTION</span>
                  </span>
                </span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center -mr-2"
                >
                  <span className="relative block h-4 w-6" aria-hidden="true">
                    <span className="absolute left-0 top-[7px] block h-[2px] w-6 rotate-45 bg-white" />
                    <span className="absolute left-0 top-[7px] block h-[2px] w-6 -rotate-45 bg-white" />
                  </span>
                </button>
              </div>

              <nav className="flex flex-1 flex-col justify-center gap-1 py-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 + i * 0.06 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={close}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`font-display text-xs font-semibold tracking-widest ${
                              isActive ? 'text-gold-400' : 'text-white/40'
                            }`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`font-display text-[27px] font-bold tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-gold-500' : 'text-white group-hover:text-gold-300'
                            }`}
                          >
                            {link.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 + links.length * 0.06 }}
                className="space-y-5"
              >
                <NavLink
                  to="/contact"
                  onClick={close}
                  className="flex w-full items-center justify-center font-display font-semibold uppercase tracking-wide text-sm bg-gold-500 text-navy-950 hover:bg-gold-600 rounded-md px-7 py-4 transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-white/60">
                  <a href={`tel:${phone.replace(/-/g, '')}`} className="py-1 hover:text-gold-400 transition-colors">
                    {phone}
                  </a>
                  <span aria-hidden="true" className="h-3 w-px bg-white/20" />
                  <a href={`mailto:${email}`} className="py-1 hover:text-gold-400 transition-colors">
                    {email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}

export default Navbar;
