import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { phone, email, city } from '../data/company';

const cardClass =
  'block bg-white rounded-xl border border-navy-100 p-6 hover:border-gold-500 transition-colors duration-300';
const labelClass = 'text-xs uppercase tracking-wider text-navy-900/50';
const valueClass = 'mt-2 font-display font-semibold text-navy-900 text-lg sm:text-xl';

function Contact() {
  return (
    <Section variant="paper" className="min-h-[60vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Us"
            lede="If you are interested in working with Saber Construction, LLC or becoming a vendor, please don't hesitate to contact us. We value our partnerships and look forward to building something great together."
          />
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.06}>
            <a href={`mailto:${email}`} className={cardClass}>
              <p className={labelClass}>Email</p>
              <p className={`${valueClass} break-all`}>{email}</p>
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <a href={`tel:${phone.replace(/-/g, '')}`} className={cardClass}>
              <p className={labelClass}>Phone</p>
              <p className={valueClass}>{phone}</p>
            </a>
          </Reveal>

          <Reveal delay={0.18}>
            <div className={cardClass}>
              <p className={labelClass}>Location</p>
              <p className={valueClass}>{city}</p>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="pt-1">
              <Link
                to="/vendor"
                className="inline-flex items-center min-h-[44px] text-navy-800 font-medium hover:text-gold-600 transition-colors duration-300"
              >
                Subcontractors: review our vendor requirements &rarr;
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
