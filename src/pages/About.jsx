import React from 'react';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import CtaBand from '../components/CtaBand';

const leadName = 'Saber Construction, LLC';
const leadRest =
  " is a certified Service-Disabled Veteran's Owned Small Business based in Tennessee. With extensive experience in residential, commercial, and government settings, we hold a commercial contractor's license and are fully insured to handle projects of all scales.";

const story = [
  'Our mission is to deliver high-quality construction services that meet the specific needs of our clients. We are committed to completing projects on time, within budget, and to the highest standards of quality and safety.',
  'At Saber Construction, we build more than just structures; we build lasting relationships. Our focus on customer satisfaction and long-term partnerships drives us to exceed expectations and deliver value on every project.',
  "Whether you're looking for residential renovations, commercial construction, or government contracting, Saber Construction, LLC is equipped to handle all your construction needs with professionalism and integrity.",
];

const facts = [
  { label: 'Certified SDVOSB', detail: 'Service-Disabled Veteran-Owned Small Business' },
  { label: "Commercial Contractor's License", detail: 'Licensed for commercial work statewide' },
  { label: 'Fully Insured', detail: "Liability & workers' comp coverage" },
  { label: 'Nashville, Tennessee', detail: 'Serving all of Tennessee' },
];

const values = [
  {
    title: 'On Time, On Budget',
    body: 'Disciplined scheduling and cost control on every project, from bid to closeout.',
  },
  {
    title: 'Quality & Safety',
    body: 'The highest standards of workmanship and jobsite safety — never traded for speed.',
  },
  {
    title: 'Lasting Relationships',
    body: 'We measure success by the clients who call us back for the next project.',
  },
];

function About() {
  return (
    <>
      <Section variant="paper" className="pt-16 md:pt-24 pb-14 md:pb-20">
        <Reveal>
          <SectionHeading eyebrow="Who We Are" title="About Saber Construction" />
        </Reveal>
      </Section>

      <Section variant="white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <Reveal>
            <div className="space-y-6">
              <p className="text-lg text-navy-900/75 leading-relaxed">
                <span className="font-semibold text-navy-900">{leadName}</span>
                {leadRest}
              </p>
              {story.map((paragraph, i) => (
                <p key={i} className="text-lg text-navy-900/75 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="self-start lg:sticky lg:top-28">
            <div className="space-y-4">
              {facts.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 0.06}>
                  <div className="rounded-lg bg-paper border-l-4 border-gold-500 px-5 py-4">
                    <p className="font-display font-semibold text-navy-900">{fact.label}</p>
                    <p className="mt-1 text-sm text-navy-900/55">{fact.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section variant="navy">
        <Reveal>
          <SectionHeading dark align="center" eyebrow="How We Work" title="What We Stand By" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="w-10 h-[3px] bg-gold-500" />
              <h3 className="mt-4 font-display font-semibold tracking-tight text-white text-lg">
                {value.title}
              </h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

export default About;
