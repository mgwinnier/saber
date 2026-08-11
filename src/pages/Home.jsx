import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import CtaBand from '../components/CtaBand';

import { services } from '../data/services';
import { naics, duns, cage } from '../data/company';

import sdvosbBadge from '../assets/image.png';

function Home() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Browsers can suspend a muted autoplay video (tab switch, route transition,
  // battery saver); retry whenever the page becomes visible again.
  useEffect(() => {
    const replay = () => {
      const vid = videoRef.current;
      if (vid && vid.paused && !document.hidden) {
        vid.play().catch(() => {});
      }
    };
    replay();
    document.addEventListener('visibilitychange', replay);
    return () => document.removeEventListener('visibilitychange', replay);
  }, []);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <>
      {/* 1 — Full-screen video hero */}
      <section
        ref={heroRef}
        className="relative -mt-20 md:-mt-24 min-h-screen min-h-[100svh] overflow-hidden bg-navy-950"
      >
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { scale: videoScale }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={`${process.env.PUBLIC_URL}/media/current-projects-poster.jpg`}
            src={`${process.env.PUBLIC_URL}/media/current-projects.mp4`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-navy-950/30"
        />

        <motion.div
          className="relative"
          style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <div className="min-h-[100svh] flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full pt-20 md:pt-24 pb-28">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-[3px] w-10 bg-gold-500" />
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                    Service-Disabled Veteran-Owned &middot; Tennessee
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-8 font-display font-bold tracking-tight text-balance text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
                  <span className="block text-white">Built with Precision.</span>
                  <span className="block text-white/90">Backed by Integrity.</span>
                </h1>

                <p className="mt-5 text-xs sm:text-sm text-white/70 uppercase tracking-[0.18em]">
                  Licensed &amp; Insured &middot; Commercial &middot; Government &middot; Residential
                </p>

                <p className="mt-6 text-lg text-white/75 max-w-2xl leading-relaxed">
                  Commercial, government, and residential construction across Tennessee &mdash;
                  delivered on time, on budget, and to the highest standard.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button to="/projects" variant="primary" arrow>
                    View Our Projects
                  </Button>
                  <Button to="/contact" variant="ghost-light">
                    Contact Us
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-8">
                  <Link
                    to="/projects"
                    state={{ scrollTo: 'film' }}
                    className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:border-gold-400 group-hover:text-gold-400">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 translate-x-[1px]"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9 6.5v11l9-5.5z" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                      Watch the Full Video
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 inset-x-0 flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <span className="relative block h-8 w-px bg-white/30 overflow-hidden">
            {!reduceMotion && (
              <motion.span
                className="absolute left-0 top-0 h-3 w-px bg-gold-400"
                animate={{ y: [0, 32], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeIn' }}
              />
            )}
          </span>
        </div>
      </section>

      {/* 2 — Services */}
      <Section variant="white">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Build"
            lede="Nine self-performed and managed disciplines, delivered under one accountable team."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="h-full p-7 border border-navy-100 rounded-xl bg-white transition-all duration-300 hover:border-gold-500 hover:-translate-y-1">
                <span className="font-display font-bold text-gold-500 text-lg tracking-wide">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display font-semibold text-navy-900 text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-navy-900/60 text-sm leading-relaxed">{service.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — Credentials */}
      <Section variant="navy">
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-10 items-center">
          <Reveal direction="left">
            <div className="bg-white rounded-xl p-5 inline-flex items-center justify-center">
              <img
                src={sdvosbBadge}
                alt="SBA Service-Disabled Veteran-Owned Small Business Certified"
                className="h-28 sm:h-32 w-auto object-contain"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <SectionHeading
              dark
              eyebrow="Federal-Ready"
              title="Certified Service-Disabled Veteran-Owned Small Business"
              className="[&>h2]:text-2xl sm:[&>h2]:text-3xl lg:[&>h2]:text-4xl"
            />

            <ul className="mt-8 flex flex-wrap gap-2">
              {naics.map((n) => (
                <li
                  key={n.code}
                  className="bg-white/10 text-white/80 rounded-full px-3.5 py-1.5 text-xs font-medium"
                >
                  {n.code} &middot; {n.label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-white/50 text-sm">
              CAGE {cage} &middot; DUNS {duns}
            </p>

            <div className="mt-9">
              <Button to="/statement" variant="ghost-light">
                View Capability Statement
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4 — CTA */}
      <CtaBand />
    </>
  );
}

export default Home;
