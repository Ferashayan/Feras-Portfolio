"use client";

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
} from "lucide-react";
import { ChatWidget } from "./ChatWidget";
import { ImageGallery } from "./ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { NewsUpdate, PortfolioItem } from "@/lib/portfolio-data";

export function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/80 rounded-full px-6 h-14 flex items-center gap-8 shadow-2xl">
        {/* Logo Section */}
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-3 group shrink-0">
          <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
          <span className="font-sans font-bold text-neutral-100 tracking-tight text-[15px] uppercase">
            FERAS.AI
          </span>
        </Link>

        {/* Left Divider */}
        <div className="w-px h-5 bg-neutral-800"></div>

        {/* Links Section */}
        <div className="flex items-center gap-6 md:gap-8 text-[14px] font-medium text-neutral-400">
          <a
            href="#news"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            <span>News</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-100"></div>
          </a>
          <a
            href="#projects"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            Work
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#models"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            Models
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#research"
            className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center whitespace-nowrap"
          >
            Research
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
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
    <section className="pt-32 pb-14 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            AI Engineer &amp; <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Full-Stack SaaS Developer
            </span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            I bridge the gap between complex AI architecture and production-ready
            SaaS products. Explore concise summaries below, ask questions to each
            card&apos;s dedicated AI chatbot, or click any card to read its full
            Medium-style engineering article.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center md:justify-start gap-4 pt-2"
        >
          <SocialLink
            href="https://github.com/Ferashayan"
            label="GitHub"
            icon={<Github size={20} />}
          />
          <SocialLink
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin size={20} />}
          />
          <SocialLink
            href="mailto:ferashayan200@gmail.com"
            label="Email"
            icon={<Mail size={20} />}
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
            alt="AI Engineer"
            fill
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
      className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all"
    >
      {icon}
    </a>
  );
}

export function LatestNewsSection({ items }: { items: NewsUpdate[] }) {
  return (
    <section id="news" className="py-8 px-6 max-w-7xl mx-auto">
      <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles size={18} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Latest News &amp; Updates
              </h2>
              <p className="text-xs text-neutral-400">
                Recent research papers, open-weight releases, and production milestones
              </p>
            </div>
          </div>
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

          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            {item.summary}
          </p>

          {item.images && item.images.length > 0 && (
            <div className="mb-5" onClick={(e) => e.stopPropagation()}>
              <ImageGallery images={item.images} />
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
            <span>Click card to read full Medium article ({item.article.readTime})</span>
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

        <div className="flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${
              isResearchOrSystems
                ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                : "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
            }`}
          >
            {item.category}
          </span>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded-md"
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
            <span>Click to read full Medium story ({item.article.readTime})</span>
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



