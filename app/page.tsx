import {
  Navbar,
  Hero,
  LatestNewsSection,
  ZigZagProjectCard,
  FrsLabSection,
  HomeArticlesPreviewSection,
} from "@/components/PortfolioComponents";
import { ParticleBackground } from "@/components/ParticleBackground";
import {
  LATEST_NEWS,
  PORTFOLIO_ITEMS,
  getProductionProjects,
} from "@/lib/portfolio-data";
import Link from "next/link";

export default function Page() {
  const productionProjects = getProductionProjects();

  return (
    <main className="min-h-screen font-sans relative">
      <ParticleBackground />
      <Navbar />

      <Hero />

      {/* Top Latest News & Milestones Section */}
      <LatestNewsSection items={LATEST_NEWS} />

      {/* 1. Production Projects (SAIOS, DisVibe, Srich) */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-3">
            Production Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Live multi-agent and full-stack systems operating in production,
            powered directly by models and kernels developed in{" "}
            <a
              href="#frs-lab"
              className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4"
            >
              FRS LAB
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {productionProjects.map((project) => (
            <ZigZagProjectCard key={project.slug} item={project} />
          ))}
        </div>
      </section>

      {/* 2. FRS LAB (Unified R&D Wing with All | Models | Papers | Open Source & Paper-to-Code Filter Pills) */}
      <FrsLabSection />

      {/* 3. Mini Preview of Latest 3 Articles at the bottom of Home Page */}
      <HomeArticlesPreviewSection articles={PORTFOLIO_ITEMS} />

      {/* Footer & Contact Bar */}
      <footer className="py-12 px-6 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Feras — AI Research Engineer &amp;
            Full-Stack Builder.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            <a
              href="https://github.com/Ferashayan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Hugging Face
            </a>
            <Link
              href="/articles"
              className="hover:text-white transition-colors"
            >
              Articles (/articles)
            </Link>
            <a
              href="mailto:ferashayan200@gmail.com"
              className="hover:text-white transition-colors"
            >
              ferashayan200@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
