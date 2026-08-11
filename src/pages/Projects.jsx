import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Parallax from '../components/ui/Parallax';
import FilmPlayer from '../components/ui/FilmPlayer';
import CtaBand from '../components/CtaBand';
import { projects } from '../data/projects';
import maneyImg from '../assets/projects/maney.jpg';

const featured = projects.find((p) => p.slug === 'maney');
const currentProjects = projects.filter((p) => p.status === 'current' && !p.featured);
const recentProjects = projects.filter((p) => p.status === 'recent');

const chipBase =
  'inline-block text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1';

function ProjectCard({ project, tone }) {
  const isRecent = tone === 'recent';

  return (
    <article
      className={`group relative overflow-hidden h-full rounded-xl border border-navy-100 p-7 pt-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/5 ${
        isRecent ? 'bg-white' : ''
      }`}
    >
      {/* inset accent bar: a real border-t would wrap the corner radius and
          smear color into the top corners */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${isRecent ? 'bg-navy-800' : 'bg-gold-500'}`}
      />

      <span
        className={`${chipBase} ${
          isRecent ? 'bg-navy-800/10 text-navy-800' : 'bg-gold-500/15 text-gold-700'
        }`}
      >
        {isRecent ? 'Completed' : 'In Progress'}
      </span>

      <h3 className="mt-3 font-display font-semibold tracking-tight text-balance text-navy-900 text-xl">
        {project.name}
      </h3>
      <p className="text-navy-900/50 text-sm">{project.location}</p>

      {project.description.map((paragraph, i) => (
        <p key={i} className="mt-3 text-navy-900/70 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </article>
  );
}

function Projects() {
  const location = useLocation();
  const filmRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo !== 'film') return;
    const t = setTimeout(() => {
      filmRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.history.replaceState({}, '');
    }, 350);
    return () => clearTimeout(t);
  }, [location.state]);

  return (
    <>
      <Section variant="paper" className="pt-16 md:pt-24 pb-14 md:pb-20">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title="Projects"
            lede="From historic restorations to federal facilities — a look at what we're building now and what we've recently delivered."
          />
        </Reveal>
      </Section>

      <Section variant="navy" id="film">
        <div ref={filmRef}>
          <Reveal>
            <SectionHeading
              dark
              eyebrow="The Video"
              title="Watch the Process"
              lede="Step onto our jobsites across Tennessee — how we plan, build, and deliver, from groundwork to finished space."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FilmPlayer
              className="mt-12"
              src={`${process.env.PUBLIC_URL}/media/saber-film.mp4`}
              poster={`${process.env.PUBLIC_URL}/media/saber-film-poster.jpg`}
              duration="2:12"
              caption="On the job with Saber Construction — projects across Tennessee"
            />
          </Reveal>
        </div>
      </Section>

      <Section variant="white">
        <Reveal>
          <SectionHeading eyebrow="On the Board" title="Current Projects" />
        </Reveal>

        {featured && (
          <>
            <Reveal delay={0.06} direction="left" className="mt-12">
              <figure className="group relative overflow-hidden rounded-xl">
                <Parallax range={24}>
                  <img
                    src={maneyImg}
                    alt={`Aerial view of construction at ${featured.name}, ${featured.location}`}
                    className="w-full aspect-[16/10] md:aspect-[16/9] object-cover scale-110 transition-transform duration-700 md:group-hover:scale-[1.16]"
                  />
                </Parallax>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-6 sm:p-8">
                  <span className={`${chipBase} bg-gold-500 text-navy-950`}>In Progress</span>
                  <h3 className="mt-3 font-display font-bold tracking-tight text-balance text-white text-2xl sm:text-3xl">
                    {featured.name}
                  </h3>
                  <p className="text-white/70 text-sm">{featured.location}</p>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Featured Project
                </p>
                {featured.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-4 max-w-3xl text-lg text-navy-900/75 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} tone="current" />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <Reveal direction="right">
          <SectionHeading eyebrow="Track Record" title="Recently Completed" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} tone="recent" />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

export default Projects;
