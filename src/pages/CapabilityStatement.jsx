import React from 'react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { phone, email, duns, cage, naics } from '../data/company';
import sdvosbBadge from '../assets/image.png';

const competencies = [
  'Design and build of commercial buildings',
  'Concrete structures and pads',
  'Commercial remodeling',
  'Structural steel buildings',
  'PEB buildings',
  'Commercial roofing',
  'Facility mechanical and plumbing',
  'Facility painting',
  'Facility flooring',
  'Fire suppression systems',
  'Project and site management',
  'Facility maintenance',
  'Solar',
];

function BlockHeading({ children }) {
  return (
    <div>
      <h3 className="font-display font-bold text-navy-900 text-2xl tracking-tight">{children}</h3>
      <div className="mt-3 h-[3px] w-10 bg-gold-500" />
    </div>
  );
}

function ProfileRow({ label, children }) {
  return (
    <div className="py-3 border-t border-white/10 first:border-t-0 first:pt-0">
      <dt className="text-white/50 text-xs uppercase tracking-wider">{label}</dt>
      <dd className="mt-1 text-white font-medium break-words">{children}</dd>
    </div>
  );
}

function Mark() {
  return (
    <span
      className="mt-2 shrink-0 h-1.5 w-1.5 rotate-45 bg-gold-500"
      aria-hidden="true"
    />
  );
}

function CapabilityStatement() {
  return (
    <>
      <Section variant="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Government Contracting"
            title="Capability Statement"
            lede="Saber Construction, LLC — certified SDVOSB general contractor for federal, state, and commercial work."
          />
        </Reveal>
      </Section>

      <Section variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <Reveal>
              <div className="bg-navy-950 text-white rounded-xl p-7">
                <h3 className="font-display uppercase text-sm tracking-wider text-gold-400">
                  Profile
                </h3>
                <dl className="mt-5">
                  <ProfileRow label="Point of Contact">Alex Stephens</ProfileRow>
                  <ProfileRow label="Location">Nashville, TN 37207</ProfileRow>
                  <ProfileRow label="Phone">
                    <a
                      href={`tel:${phone.replace(/-/g, '')}`}
                      className="hover:text-gold-400 transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  </ProfileRow>
                  <ProfileRow label="Email">
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-gold-400 transition-colors duration-300 break-all"
                    >
                      {email}
                    </a>
                  </ProfileRow>
                  <ProfileRow label="DUNS">{duns}</ProfileRow>
                  <ProfileRow label="CAGE">{cage}</ProfileRow>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-xl border border-navy-100 p-7 flex flex-col items-center text-center">
                <img
                  src={sdvosbBadge}
                  alt="U.S. Small Business Administration certified Service-Disabled Veteran-Owned Small Business"
                  className="h-28 w-auto max-w-full"
                />
                <p className="font-display font-semibold text-navy-900 mt-4">
                  Certified Service-Disabled Veteran-Owned Small Business
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            <Reveal>
              <div>
                <BlockHeading>Company Overview</BlockHeading>
                <p className="mt-5 text-navy-900/75 text-lg leading-relaxed">
                  We have experience working in residential, commercial, and federal/state
                  government settings. Our team completes project scopes on time and within the
                  allotted budget. We focus on establishing customer relationships that create
                  long-term opportunities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <BlockHeading>Core Competencies</BlockHeading>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {competencies.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Mark />
                      <span className="text-navy-900/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <BlockHeading>NAICS Codes</BlockHeading>
                <ul className="mt-4 divide-y divide-navy-100">
                  {naics.map((item) => (
                    <li
                      key={item.code}
                      className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1 py-3"
                    >
                      <span className="font-display font-semibold text-navy-900 tabular-nums">
                        {item.code}
                      </span>
                      <span className="text-navy-900/70 sm:text-right">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
            <Button to="/vendor">Become a Vendor</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

export default CapabilityStatement;
