"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BrainCircuit,
  Sun,
  BookOpen,
  Sparkles,
  ArrowRight,
  FileText,
  Cpu,
  FlaskConical,
  Layers,
  GraduationCap,
} from "lucide-react";
import { ChatWidget } from "./ChatWidget";
import { ImageGallery } from "./ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getFrsLabItems,
  type FrsLabFilter,
  type NewsUpdate,
  type PortfolioItem,
} from "@/lib/portfolio-data";

const FRS_LAB_FILTERS: FrsLabFilter[] = [
  "All",
  "Models",
  "Papers",
  "Open Source & Paper-to-Code",
];

export function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/80 rounded-full px-6 h-14 flex items-center gap-6 md:gap-8 shadow-2xl">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={scrollToTop}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
          <span className="font-sans font-bold text-neutral-100 tracking-tight text-[15px] uppercase">
            FERAS.AI
          </span>
        </Link>

        {/* Left Divider */}
        <div className="w-px h-5 bg-neutral-800"></div>

        {/* Links Section */}
        <div className="flex items-center gap-5 md:gap-7 text-[14px] font-medium text-neutral-400">
          <Link
            href="/#news"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            <span>News</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-100"></div>
          </Link>
          <Link
            href="/#projects"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            <span>Projects</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/#frs-lab"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            <span>FRS LAB</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/articles"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            <span>Articles</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>

        {/* Right Divider */}
        <div className="w-px h-5 bg-neutral-800"></div>

        {/* Theme Icon Section */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="text-neutral-400 hover:text-neutral-100 transition-colors shrink-0"
        >
          <Sun size={18} />
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-4">
            <FlaskConical size={13} />
            <span>Production Systems · FRS LAB R&amp;D · Technical Writing</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            AI Research Engineer &amp; <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Full-Stack Systems Builder
            </span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            I build production agentic systems (SAIOS, DisVibe, Srich) powered
            directly by custom model weights, empirical research papers, and
            low-level inference kernels developed in{" "}
            <a
              href="#frs-lab"
              className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-4"
            >
              FRS LAB
            </a>
            . Ask questions to any card&apos;s dedicated AI chatbot or click to
            read its full Medium-style article.
          </p>
        </motion.div>

        {/* Identity Proof Links: GitHub · Hugging Face · arXiv / Scholar · Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1"
        >
          <a
            href="https://github.com/Ferashayan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-medium text-neutral-200 hover:text-white transition-all"
          >
            <Github size={14} className="text-indigo-400" />
            <span>GitHub</span>
          </a>
          <a
            href="https://huggingface.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-medium text-neutral-200 hover:text-white transition-all"
          >
            <BrainCircuit size={14} className="text-cyan-400" />
            <span>Hugging Face</span>
          </a>
          <a
            href="#frs-lab"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-xs font-medium text-neutral-200 hover:text-white transition-all"
          >
            <GraduationCap size={14} className="text-indigo-400" />
            <span>arXiv / Scholar</span>
          </a>
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600/15 border border-indigo-500/30 hover:bg-indigo-600/25 text-xs font-medium text-indigo-300 hover:text-white transition-all"
          >
            <BookOpen size={14} />
            <span>Articles</span>
            <ArrowRight size={12} />
          </Link>

          <SocialLink
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin size={15} />}
          />
          <SocialLink
            href="mailto:ferashayan200@gmail.com"
            label="Email"
            icon={<Mail size={15} />}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative shrink-0"
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/seed/ai-engineer/400/400"
            alt="AI Research Engineer"
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all"
    >
      {icon}
    </a>
  );
}

export function LatestNewsSection({ items }: { items: NewsUpdate[] }) {
  return (
    <section id="news" className="py-6 px-6 max-w-7xl mx-auto">
      <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 md:p-7 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Latest News &amp; Milestones
              </h2>
              <p className="text-xs text-neutral-400">
                Recent FRS LAB papers, open-weight model releases, and production launches
              </p>
            </div>
          </div>
          <Link
            href="/articles"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>All articles</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((news) => (
            <Link
              key={news.id}
              href={`/article/${news.articleSlug}`}
              className="group bg-neutral-950/60 border border-neutral-800/80 hover:border-indigo-500/50 rounded-xl p-4 transition-all flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono rounded-full">
                    {news.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-neutral-200 group-hover:text-white leading-snug transition-colors">
                  {news.title}
                </h3>
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 pt-1">
                <span>Read article</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ZigZagProjectCard({ item }: { item: PortfolioItem }) {
  const router = useRouter();
  const imageOnRight = item.imageOnRight ?? true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      className={`flex flex-col ${
        imageOnRight ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 items-stretch w-full py-6`}
    >
      {/* Clickable Summary Card -> Navigates to Medium-style Article */}
      <div
        onClick={() => router.push(`/article/${item.slug}`)}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(`/article/${item.slug}`);
          }
        }}
        className="flex-1 bg-neutral-900/35 border border-neutral-800/80 hover:border-indigo-500/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all cursor-pointer group"
      >
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{item.subtitle}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/article/${item.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors shadow-lg shadow-indigo-600/20"
              >
                <BookOpen size={14} />
                <span>Read Article</span>
              </Link>
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`External link for ${item.title}`}
                className="p-2.5 text-neutral-400 hover:text-white bg-neutral-800/60 hover:bg-neutral-800 rounded-xl transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 text-base leading-relaxed mb-5">
            {item.summary}
          </p>

          {/* Connecting Thread: Link from Production Project to FRS LAB Models/Papers */}
          {item.poweredByLab && item.poweredByLab.length > 0 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="mb-5 p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/90 flex flex-col gap-2"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                <FlaskConical size={13} />
                <span>Powered by FRS LAB R&amp;D</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.poweredByLab.map((lab) => (
                  <Link
                    key={lab.labSlug}
                    href={`/article/${lab.labSlug}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 text-xs text-cyan-300 transition-colors"
                  >
                    <span>{lab.labTitle}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {item.images && item.images.length > 0 && (
            <div className="mb-5" onClick={(e) => e.stopPropagation()}>
              <ImageGallery images={item.images} />
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
            <span>
              Click card to read full Medium article ({item.article.readTime})
            </span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </div>

      {/* Dedicated Per-Card AI Chatbot Column */}
      <div className="flex-1 bg-neutral-900/20 border border-neutral-800/50 rounded-2xl relative overflow-hidden flex flex-col items-stretch p-0 shadow-2xl min-h-[440px]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-5">
          <ChatWidget
            title={`${item.title} AI Agent`}
            context={item.aiContext}
            suggestedQuestions={item.suggestedQuestions}
            initialMessage={item.summary}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function FrsLabSection() {
  const [activeFilter, setActiveFilter] = useState<FrsLabFilter>("All");
  const filteredItems = getFrsLabItems(activeFilter);

  return (
    <section
      id="frs-lab"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <FlaskConical size={13} />
            <span>R&amp;D Wing · Models · Papers · Paper-to-Code</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            FRS LAB
          </h2>
          <p className="text-neutral-400 max-w-xl text-base md:text-lg">
            The research and systems engineering lab feeding our production
            platforms—uniting empirical papers, Hugging Face model weights, and
            low-level C++/Rust implementations.
          </p>
        </div>

        {/* Filter Pills (All · Models · Papers · Open Source & Paper-to-Code) */}
        <div
          className="flex flex-wrap items-center gap-2 shrink-0"
          role="group"
          aria-label="Filter FRS LAB items"
        >
          {FRS_LAB_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            const count = getFrsLabItems(filter).length;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border whitespace-nowrap ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20"
                    : "bg-neutral-900/70 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    isActive
                      ? "bg-indigo-700/80 text-indigo-100"
                      : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <InteractiveTopicCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

export function InteractiveTopicCard({ item }: { item: PortfolioItem }) {
  const router = useRouter();
  const isResearchOrSystems =
    item.category === "Research Paper" ||
    item.category === "Prototype & Open Source";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-neutral-900/40 border border-neutral-800 rounded-2xl relative overflow-hidden group hover:border-neutral-700 transition-colors flex flex-col min-h-[540px]"
    >
      <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      {/* Clickable Summary Header linking to the Medium-style Article */}
      <div
        onClick={() => router.push(`/article/${item.slug}`)}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            router.push(`/article/${item.slug}`);
          }
        }}
        className="p-6 shrink-0 relative z-10 border-b border-neutral-800/60 space-y-4 cursor-pointer hover:bg-neutral-900/60 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-neutral-800 rounded-xl border border-neutral-700 text-cyan-400 shrink-0">
              {item.category === "Research Paper" ? (
                <FileText size={20} />
              ) : item.category === "Prototype & Open Source" ? (
                <Cpu size={20} />
              ) : (
                <BrainCircuit size={20} />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">{item.subtitle}</p>
            </div>
          </div>

          <Link
            href={`/article/${item.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 text-xs font-medium rounded-lg transition-colors shrink-0"
          >
            <BookOpen size={13} />
            <span>Read Article</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Type Badge inside FRS LAB */}
          <span
            className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${
              isResearchOrSystems
                ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                : "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
            }`}
          >
            {item.labType || item.category}
          </span>

          {/* Connecting Thread Badge: "Deployed in SAIOS / DisVibe" */}
          {item.deployedIn && (
            <Link
              href={`/article/${item.deployedIn.projectSlug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-colors"
            >
              <Layers size={11} />
              <span>Deployed in {item.deployedIn.projectName}</span>
            </Link>
          )}

          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed">
          {item.summary}
        </p>

        <div className="pt-1 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
            <span>
              Click to read full Medium story ({item.article.readTime})
            </span>
            <ArrowRight size={13} />
          </span>
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
          >
            <span>Source</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Dedicated Chatbot for this card */}
      <div className="flex-1 relative z-10 bg-neutral-950/50 p-4 overflow-hidden flex flex-col">
        <ChatWidget
          title={`${item.title} Agent`}
          context={item.aiContext}
          suggestedQuestions={item.suggestedQuestions}
          initialMessage={item.summary}
        />
      </div>
    </motion.div>
  );
}

export function HomeArticlesPreviewSection({
  articles,
}: {
  articles: PortfolioItem[];
}) {
  const featuredSlugs = [
    "low-latency-intent-routing-paper",
    "saios",
    "domain-specific-llm-classifier",
  ];
  const latestThree = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is PortfolioItem => Boolean(a));

  return (
    <section
      id="latest-articles"
      className="py-16 px-6 max-w-5xl mx-auto border-t border-neutral-900"
    >
      <div className="bg-neutral-900/30 border border-neutral-800/80 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800/80">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Latest Technical Articles
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Architectural deep-dives, fine-tuning notes, and research breakdowns
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-lg shadow-indigo-600/20 shrink-0 self-start sm:self-auto"
          >
            <span>View all articles</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Clean text-based list of the latest 3 articles */}
        <div className="divide-y divide-neutral-800/60">
          {latestThree.map((item) => (
            <Link
              key={item.slug}
              href={`/article/${item.slug}`}
              className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono text-indigo-400">
                    {item.articleTopic}
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span className="text-xs text-neutral-500">
                    {item.article.readTime}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-200 group-hover:text-indigo-400 transition-colors">
                  {item.title}: {item.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 shrink-0">
                <span>{item.article.publishedDate}</span>
                <ArrowRight
                  size={14}
                  className="text-neutral-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
