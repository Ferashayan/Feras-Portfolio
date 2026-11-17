import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Share2,
  Bookmark,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  PORTFOLIO_ITEMS,
  getPortfolioItemBySlug,
} from "@/lib/portfolio-data";
import { ChatWidget } from "@/components/ChatWidget";

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = PORTFOLIO_ITEMS.filter(
    (other) => other.slug !== item.slug
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30">
      {/* Medium-style Minimal Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={17} />
              <span>Portfolio</span>
            </Link>
            <span className="text-neutral-800">/</span>
            <Link
              href="/articles"
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Articles
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#article-assistant"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600/25 text-xs font-medium transition-colors"
            >
              <Sparkles size={13} />
              <span>Ask AI Agent</span>
            </a>
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-medium transition-colors"
            >
              <span>Source</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Medium-style Single-Column Editorial Container */}
      <article className="max-w-[740px] mx-auto px-6 pt-12 pb-20">
        {/* Category Pill, Topic & Cross-Link Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider rounded-full">
            {item.labType ? `FRS LAB · ${item.labType}` : item.category}
          </span>
          <span className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono rounded-full">
            {item.articleTopic}
          </span>
          {item.deployedIn && (
            <Link
              href={`/article/${item.deployedIn.projectSlug}`}
              className="px-3 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono rounded-full transition-colors"
            >
              Deployed in {item.deployedIn.projectName} →
            </Link>
          )}
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Medium Headline & Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-[1.15] mb-4">
          {item.title}: {item.subtitle}
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-6 font-normal">
          {item.summary}
        </p>

        {item.poweredByLab && item.poweredByLab.length > 0 && (
          <div className="mb-8 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mr-1">
              Powered by FRS LAB:
            </span>
            {item.poweredByLab.map((lab) => (
              <Link
                key={lab.labSlug}
                href={`/article/${lab.labSlug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 text-xs text-cyan-300 transition-colors"
              >
                <span>{lab.labTitle}</span>
                <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        )}

        {/* Medium Author Byline Bar */}
        <div className="flex items-center justify-between py-4 border-y border-neutral-900 mb-10">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 shrink-0">
              <Image
                src="https://picsum.photos/seed/ai-engineer/200/200"
                alt="Feras"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {item.article.authorName}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {item.article.authorRole}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400 mt-0.5">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {item.article.publishedDate}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {item.article.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <a
              href="#article-assistant"
              title="Ask AI Agent about this article"
              className="p-2 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Sparkles size={18} />
            </a>
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open external link"
              className="p-2 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Share2 size={18} />
            </a>
            <Link
              href="/"
              title="Bookmark / Back to collection"
              className="p-2 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Bookmark size={18} />
            </Link>
          </div>
        </div>

        {/* Hero Feature Image */}
        {item.article.heroImage && (
          <figure className="mb-12">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <Image
                src={item.article.heroImage}
                alt={item.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <figcaption className="text-center text-xs text-neutral-500 mt-3">
              {item.article.heroCaption ||
                `Architecture and system overview for ${item.title} (${item.category}).`}
            </figcaption>
          </figure>
        )}

        {/* Lead Editorial Paragraph */}
        <div className="space-y-8 text-neutral-200 leading-[1.85] text-[18px]">
          <p className="text-xl text-neutral-100 leading-[1.8] font-normal first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            {item.article.leadParagraph}
          </p>

          {/* Article Sections */}
          {item.article.sections.map((section, idx) => (
            <section key={idx} className="pt-6 space-y-5">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-snug pt-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[18px] text-neutral-300 leading-[1.85]"
                >
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 pl-6 border-l-4 border-indigo-500 italic text-xl text-neutral-100 bg-neutral-900/40 py-4 pr-6 rounded-r-xl">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-3 my-6 pl-2">
                  {section.bulletPoints.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-[17px] text-neutral-300 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.codeBlock && (
                <div className="my-6 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-lg">
                  <div className="px-4 py-2 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span>{section.codeBlock.language}</span>
                    <span>{item.title}</span>
                  </div>
                  <pre className="p-5 text-sm font-mono text-indigo-200 overflow-x-auto leading-relaxed">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Divider Dots (Medium signature) */}
        <div className="flex items-center justify-center gap-3 py-12">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
        </div>

        {/* Interactive AI Agent Embedded Section for this Article */}
        <section
          id="article-assistant"
          className="mt-4 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8"
        >
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Interactive Article Companion
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Have questions about {item.title}?
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Ask the dedicated AI agent below about architecture decisions,
              benchmarks, or implementation details covered in this article.
            </p>
          </div>

          <div className="h-[430px]">
            <ChatWidget
              title={`${item.title} Article Agent`}
              context={item.aiContext}
              suggestedQuestions={item.suggestedQuestions}
              initialMessage={`Welcome to the deep-dive article on ${item.title}. Ask me anything about its architecture, benchmarks, or design trade-offs!`}
            />
          </div>
        </section>
      </article>

      {/* More Articles from Feras Footer Section */}
      <section className="border-t border-neutral-900 bg-neutral-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">
              More Articles &amp; Engineering Deep-Dives
            </h2>
            <Link
              href="/"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <span>View all on home</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedItems.map((rel) => (
              <Link
                key={rel.slug}
                href={`/article/${rel.slug}`}
                className="group bg-neutral-900/40 border border-neutral-800 hover:border-indigo-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all"
              >
                <div>
                  <span className="text-[11px] font-mono text-indigo-400 uppercase">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mt-1 mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span>{rel.article.readTime}</span>
                  <span className="text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
