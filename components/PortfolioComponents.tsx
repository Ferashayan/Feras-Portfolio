"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, BrainCircuit, Sun, CheckCircle2 } from "lucide-react";
import { ChatWidget } from "./ChatWidget";
import { ImageGallery } from "./ImageGallery";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800/80 rounded-full px-6 h-14 flex items-center gap-8 shadow-2xl">
        {/* Logo Section */}
        <button onClick={scrollToTop} className="flex items-center gap-3 group shrink-0">
          <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"></div>
          <span className="font-sans font-bold text-neutral-100 tracking-tight text-[15px] uppercase">ALEX.AI</span>
        </button>
        
        {/* Left Divider */}
        <div className="w-px h-5 bg-neutral-800"></div>

        {/* Links Section */}
        <div className="flex items-center gap-8 text-[14px] font-medium text-neutral-400">
          <button onClick={scrollToTop} className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center">
            <span className="text-neutral-100">Index</span>
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-100"></div>
          </button>
          <a href="#projects" className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center">
            Work
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a href="#models" className="hover:text-neutral-100 transition-colors relative group flex flex-col items-center">
            Stack
            <div className="absolute -bottom-[18px] w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </div>

        {/* Right Divider */}
        <div className="w-px h-5 bg-neutral-800"></div>

        {/* Theme Icon Section */}
        <button className="text-neutral-400 hover:text-neutral-100 transition-colors shrink-0">
          <Sun size={18} />
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            AI Engineer & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Full-Stack SaaS Developer</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            I bridge the gap between complex AI architecture and production-ready SaaS products. Rather than just experimenting in isolation, I specialize in engineering scalable full-stack applications, integrating advanced GenAI models, and deploying robust MLOps pipelines. My ultimate goal is to build high-impact, multi-million dollar software ecosystems that solve real-world problems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center md:justify-start gap-4 pt-2"
        >
          <SocialLink href="https://github.com" icon={<Github size={20} />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} />
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

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800 transition-all"
    >
      {icon}
    </a>
  );
}

interface ProjectCardProps {
  title: string;
  url: string;
  tags: string[];
  description: string;
  context: string;
  suggestedQuestions: string[];
  features?: string[];
  images?: string[];
}

export function ProjectCard({ title, url, tags, description, context, suggestedQuestions, features, images }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-400 hover:text-white bg-neutral-800/50 rounded-lg transition-colors">
          <ExternalLink size={18} />
        </a>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-neutral-400 leading-relaxed mb-6">
        {description}
      </p>

      <ChatWidget context={context} suggestedQuestions={suggestedQuestions} />
    </motion.div>
  );
}

export function ZigZagProjectCard({ title, url, tags, description, context, suggestedQuestions, features, images, imageOnRight = true }: ProjectCardProps & { imageOnRight?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      className={`flex flex-col ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-stretch w-full min-h-[85vh] py-12`}
    >
      <div className="flex-[1.2] flex flex-col justify-center">
        <div className="flex items-start justify-between mb-8">
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-xl transition-colors shrink-0 ml-4">
            <ExternalLink size={24} />
          </a>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        {images && images.length > 0 && (
          <div className="mb-8">
            <ImageGallery images={images} />
          </div>
        )}
        
        {features && features.length > 0 && (
          <div className="space-y-4">
            {features.map((feature, i) => {
              const [boldPart, restPart] = feature.split(": ");
              return (
                <div key={i} className="flex gap-3">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 size={18} className="text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  </div>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                    <span className="font-semibold text-white">{boldPart}: </span>
                    {restPart}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex-1 bg-neutral-900/20 border border-neutral-800/50 rounded-2xl relative overflow-hidden flex flex-col items-stretch p-0 shadow-2xl min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-6">
          <ChatWidget context={context} suggestedQuestions={suggestedQuestions} initialMessage={description} />
        </div>
      </div>
    </motion.div>
  );
}

interface ModelCardProps {
  title: string;
  type: string;
  roles: string[];
  description: string;
  context: string;
  suggestedQuestions: string[];
}

export function ModelCard({ title, type, roles, description, context, suggestedQuestions }: ModelCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-neutral-900/40 border border-neutral-800 rounded-2xl relative overflow-hidden group hover:border-neutral-700 transition-colors flex flex-col h-[600px]"
    >
      <div className="absolute top-0 right-0 p-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
      
      <div className="p-6 shrink-0 relative z-10 border-b border-neutral-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-neutral-800 rounded-lg border border-neutral-700 text-cyan-400">
            <BrainCircuit size={20} />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-md">
            {type}
          </span>
          {roles.map(role => (
            <span key={role} className="px-3 py-1 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs rounded-md">
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 relative z-10 bg-neutral-950/50 p-4 overflow-hidden flex flex-col">
        <ChatWidget context={context} suggestedQuestions={suggestedQuestions} initialMessage={description} />
      </div>
    </motion.div>
  );
}
