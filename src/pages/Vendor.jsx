import React from 'react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { vendorEmail } from '../data/company';
import vendorsPdf from '../assets/Vendors.pdf';

const requirements = [
  {
    number: '01',
    title: 'W9 Tax Form',
    body: 'A completed and signed W9 tax form.',
  },
  {
    number: '02',
    title: 'Proof of Insurance',
    body:
      'Proof of both active liability and worker’s compensation insurance coverage, with Saber Construction listed as a Certificate Holder on the Certificate of Insurance. If your company holds a state workers’ compensation exemption, include documentation of the exemption.',
  },
  {
    number: '03',
    title: 'Signed Subcontract Agreement',
    body:
      'A signed copy of the Saber Construction Subcontract Agreement, included in the vendor packet below.',
  },
];

function Vendor() {
  return (
    <>
      <Section variant="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Work With Us"
            title="Become a Vendor"
            lede="Join our network of trusted subcontractors and suppliers."
          />
        </Reveal>
      </Section>

      <Section variant="white" className="pb-24 md:pb-32">
        <Reveal>
          <p className="text-lg text-navy-900/75 max-w-3xl">
            In order to perform work for Saber Construction, LLC, you must supply the following:
          </p>
        </Reveal>

        <div className="mt-10 space-y-5">
          {requirements.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.08}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <span
                  className="font-display font-bold text-gold-500 text-2xl leading-none pt-1 sm:pt-6 tabular-nums"
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <div className="flex-1 rounded-xl border border-navy-100 p-6">
                  <h3 className="font-display font-semibold text-navy-900 text-lg sm:text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-navy-900/70 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 bg-paper border-l-4 border-gold-500 rounded-r-xl p-6">
            <p className="text-navy-900/80 leading-relaxed">
              It is the subcontractor&rsquo;s responsibility to keep all insurance current and on
              file with Saber Construction. Work cannot be performed &mdash; and payment cannot be
              issued &mdash; while insurance requirements are not met.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <Button href={vendorsPdf} download>
              Download Vendor Packet
            </Button>
            <p className="text-navy-900/70">
              Completed documents can be emailed to{' '}
              <a
                href={`mailto:${vendorEmail}`}
                className="text-navy-800 font-medium underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600 transition-colors duration-300 break-all"
              >
                {vendorEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

export default Vendor;
