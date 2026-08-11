import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';

function NotFound() {
  return (
    <Section variant="paper" className="min-h-[60vh] flex items-center [&>div]:w-full">
      <div className="text-center">
        <Reveal>
          <p
            className="font-display font-bold text-navy-100 text-8xl sm:text-9xl leading-none tracking-tight select-none"
            aria-hidden="true"
          >
            404
          </p>

          <h1 className="mt-6 font-display font-bold text-navy-900 text-2xl tracking-tight text-balance">
            Page not found
          </h1>

          <p className="mt-4 text-navy-900/60 max-w-md mx-auto">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          </p>

          <div className="mt-8 flex justify-center">
            <Button to="/">Back to Home</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default NotFound;
