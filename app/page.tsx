import {
  Navbar,
  Hero,
  LatestNewsSection,
  ZigZagProjectCard,
  InteractiveTopicCard,
} from "@/components/PortfolioComponents";
import { ParticleBackground } from "@/components/ParticleBackground";
import {
  LATEST_NEWS,
  getPortfolioItemsByCategory,
} from "@/lib/portfolio-data";

export default function Page() {
  const productionProjects = getPortfolioItemsByCategory("Production Project");
  const mlModels = getPortfolioItemsByCategory("ML Model & Weights");
  const researchPapers = getPortfolioItemsByCategory("Research Paper");
  const systemsPrototypes = getPortfolioItemsByCategory(
    "Prototype & Open Source"
  );
  const researchAndPrototypes = [...researchPapers, ...systemsPrototypes];

  return (
    <main className="min-h-screen font-sans relative">
      <ParticleBackground />
      <Navbar />

      <Hero />

      {/* Top Latest News & Milestones Section */}
      <LatestNewsSection items={LATEST_NEWS} />

      {/* Production Projects */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">
            Production Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Live applications demonstrating scalable full-stack architecture and
            GenAI integration. Click any card to read the full Medium-style
            article or chat directly with its AI agent.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {productionProjects.map((project) => (
            <ZigZagProjectCard key={project.slug} item={project} />
          ))}
        </div>
      </section>

      {/* ML Models & Engineering */}
      <section
        id="models"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900"
      >
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">
            ML Models &amp; Engineering
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Custom model architectures, fine-tuning pipelines, and low-level AI
            systems. Ask the dedicated chatbot on each card or click to read the
            full technical article.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mlModels.map((model) => (
            <InteractiveTopicCard key={model.slug} item={model} />
          ))}
        </div>
      </section>

      {/* Research Papers & Systems Prototypes */}
      <section
        id="research"
        className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900"
      >
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">
            Research Papers &amp; Open-Source Prototypes
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Empirical research benchmarks, memory allocators, and systems
            contributions. Click any card for the full Medium-style breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAndPrototypes.map((item) => (
            <InteractiveTopicCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-neutral-600 text-sm border-t border-neutral-900">
        <p>
          &copy; {new Date().getFullYear()} Feras — AI Engineer Portfolio. Built
          with Next.js, Tailwind &amp; Gemini API.
        </p>
      </footer>
    </main>
  );
}

