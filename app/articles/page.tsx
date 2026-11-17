"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  FlaskConical,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/PortfolioComponents";
import { ParticleBackground } from "@/components/ParticleBackground";
import {
  getArticlesByTopic,
  type ArticleTopic,
} from "@/lib/portfolio-data";

const ARTICLE_TOPICS: (ArticleTopic | "All")[] = [
  "All",
  "Systems & Architecture",
  "LLMs & Fine-Tuning",
  "Research Notes",
];

export default function ArticlesArchivePage() {
  const [selectedTopic, setSelectedTopic] = useState<ArticleTopic | "All">(
    "All"
  );
  const articles = getArticlesByTopic(selectedTopic);

  return (
    <main className="min-h-screen font-sans relative bg-neutral-950 text-neutral-50">
      <ParticleBackground />
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            <span>Back to Home &amp; FRS LAB</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
                <BookOpen size={13} />
                <span>Medium-Style Technical Archive</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Engineering &amp; Research Articles
              </h1>
              <p className="text-neutral-400 text-lg mt-2 max-w-2xl">
                Deep-dives into production multi-agent architecture, custom
                model fine-tuning in FRS LAB, and low-level systems engineering.
              </p>
            </div>
          </div>

          {/* Topic Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-2 mt-8"
            role="group"
            aria-label="Filter articles by topic"
          >
            {ARTICLE_TOPICS.map((topic) => {
              const isActive = selectedTopic === topic;
              const count = getArticlesByTopic(topic).length;
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20"
                      : "bg-neutral-900/70 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <span>{topic}</span>
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

        {/* Medium-Style Editorial Feed */}
        <div className="flex flex-col gap-6">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/article/${item.slug}`}
              className="group bg-neutral-900/35 border border-neutral-800/80 hover:border-indigo-500/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between transition-all"
            >
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono">
                    {item.articleTopic}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300 font-mono">
                    {item.labType ? `FRS LAB · ${item.labType}` : item.category}
                  </span>
                  {item.deployedIn && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono">
                      <Layers size={11} />
                      <span>Deployed in {item.deployedIn.projectName}</span>
                    </span>
                  )}
                  {item.poweredByLab && item.poweredByLab.length > 0 && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono">
                      <FlaskConical size={11} />
                      <span>Powered by FRS LAB</span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                  {item.title}: {item.subtitle}
                </h2>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} />
                    {item.article.publishedDate}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {item.article.readTime}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 font-medium text-indigo-400 group-hover:text-indigo-300">
                    <span>Read full Medium article</span>
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>

              {item.article.heroImage && (
                <div className="relative w-full md:w-56 aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0">
                  <Image
                    src={item.article.heroImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
