import PortfolioCard from './PortfolioCard.jsx';

import HomifyPreview from '../assets/previews/Homify-preview.webp';
import HomifyPreview_fallback from '../assets/previews/Homify-preview.png';
import TravelAgentkuPreview from '../assets/previews/TravelAgentku-preview.webp';
import TravelAgentkuPreview_fallback from '../assets/previews/TravelAgentku-preview.png';
import KBCQuizzesGamePreview from '../assets/previews/KBC-Quizzes-Game-preview.webp';
import KBCQuizzesGamePreview_fallback from '../assets/previews/KBC-Quizzes-Game-preview.png';
import ESBozzPreview from '../assets/previews/ESBozz-preview.webp';
import ESBozzPreview_fallback from '../assets/previews/ESBozz-preview.png';
import AlIstiqomahMosquePreview from '../assets/previews/AlIstiqomahMosque-preview.webp';
import AlIstiqomahMosquePreview_fallback from '../assets/previews/AlIstiqomahMosque-preview.png';
import CustomStylePreview from '../assets/previews/CustomStyle-preview.webp';
import CustomStylePreview_fallback from '../assets/previews/CustomStyle-preview.png';

export default function Portfolio() {
  let projects = [
    {
      preview: ESBozzPreview,
      preview_fallback: ESBozzPreview_fallback,
      title: 'English Society-Bozz',
      link: 'https://www.esbozz.web.id',
      description: 'A dynamic website for my school\'s English Society extracurricular program, created to help students access updates and info about English Society-Bozz anytime, anywhere.',
      labels: ['Svelte', 'TypeScript', 'Express', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
      sourceLink: 'https://github.com/rauldhinoo/english-society-bozz'
    },
    {
      preview: HomifyPreview,
      preview_fallback: HomifyPreview_fallback,
      title: 'Homify',
      link: 'https://homify-web.vercel.app',
      description: 'Homify is a prototype smart home website. This single page website is created by me and my friend, Fathur (@siddiqfathurahman) as a submission for INSYFEST 2024 Web Development Competition.',
      labels: ['React', 'JavaScript', 'TailwindCSS'],
      sourceLink: 'https://github.com/rauldhinoo/homify'
    },
    {
      preview: CustomStylePreview,
      preview_fallback: CustomStylePreview_fallback,
      title: 'Custom Style',
      link: 'https://cstmstyle-landing-page.vercel.app',
      description: 'Custom Style is an Indonesian small and medium-sized garment enterprise (UMKM) that specializes in producing high-quality custom clothing, ranging from office uniforms to t-shirts and jackets. In this project, I share my own version of landing page design ideas, inspired by the official Custom Style website.',
      labels: ['Astro', 'Svelte', 'TailwindCSS'],
      sourceLink: 'https://github.com/rauldhinoo/Custom-Style-landing-page'
    },
    {
      preview: AlIstiqomahMosquePreview,
      preview_fallback: AlIstiqomahMosquePreview_fallback,
      title: 'Al Istiqomah Mosque',
      link: 'https://al-istiqomah-mosque.netlify.app',
      description: 'A responsive and modern static landing page built using HTML, CSS, TailwindCSS, and optionally a little JavaScript. Designed to showcase Al-Istiqomah Mosque with clean visuals and smooth user experience.',
      labels: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript'],
      sourceLink: 'https://github.com/rauldhinoo/al-istiqomah-mosque-landing-page'
    },
    {
      preview: TravelAgentkuPreview,
      preview_fallback: TravelAgentkuPreview_fallback,
      title: 'TravelAgentku',
      link: 'https://travelagentku-landing-page.vercel.app',
      description: 'A demo mini travelling website project, built with HTML, CSS, JavaScript and ScrollReveal (JavaScript Library for Scroll Animation).',
      labels: ['HTML', 'CSS', 'JavaScript'],
      sourceLink: 'https://github.com/rauldhinoo/travelagentku-landing-page',
    },
    {
      preview: KBCQuizzesGamePreview,
      preview_fallback: KBCQuizzesGamePreview_fallback,
      title: 'KBC GAME!!',
      link: 'https://kbc-quizzes-game.vercel.app',
      description: 'A simple KBC quizzes mini game website (Self-Project)',
      labels: ['HTML', 'CSS', 'JavaScript'],
      sourceLink: 'https://github.com/rauldhinoo/kbc-quizzes-game'
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-[6rem] px-4 md:px-[6rem] flex flex-col gap-4"
    >
      <h2
        className="text-neon-cyan font-extrabold text-center text-5xl font-special md:text-6xl mb-10"
        data-aos="zoom-in"
      >
        PORTFOLIO
      </h2>
      <nav>
        <ul className="font-extrabold flex justify-center items-center gap-8">
          <li data-aos="zoom-in">WEB DEVELOPMENT</li>
        </ul>
      </nav>
      <section className="p-4 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] items-stretch gap-6">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            preview={project.preview}
            preview_fallback={project.preview_fallback}
            title={project.title}
            link={project.link}
            description={project.description}
            labels={project.labels}
            sourceLink={project.sourceLink}
          />
        ))}
      </section>
    </section>
  );
}
