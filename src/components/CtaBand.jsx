import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { phone, email } from '../data/company';

// Shared closing band — rendered by Home, Projects and About.
function CtaBand() {
  return (
    <Section variant="white" className="border-t border-navy-100">
      <Reveal className="text-center">
        <h2 className="font-display font-bold tracking-tight text-balance text-navy-900 text-3xl sm:text-4xl lg:text-5xl">
          Have a project in mind?
        </h2>

        <div className="mt-6 h-[3px] w-12 bg-gold-500 mx-auto" />

        <p className="mt-6 text-lg text-navy-900/60 max-w-xl mx-auto">
          Let&rsquo;s talk about how Saber Construction can deliver it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 text-lg font-medium">
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center py-2 text-navy-800 hover:text-gold-600 transition-colors duration-300"
          >
            {phone}
          </a>

          <span aria-hidden="true" className="hidden sm:block h-4 w-px bg-navy-100" />

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center py-2 text-navy-800 hover:text-gold-600 transition-colors duration-300 break-all"
          >
            {email}
          </a>
        </div>

        <div className="mt-10">
          <Button to="/contact" variant="primary">
            Get In Touch
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export default CtaBand;
