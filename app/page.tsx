import { Navbar, Hero, ZigZagProjectCard, ModelCard } from "@/components/PortfolioComponents";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Page() {
  return (
    <main className="min-h-screen font-sans relative">
      <ParticleBackground />
      <Navbar />
      
      <Hero />

      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Production Projects</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Live applications demonstrating scalable full-stack architecture and GenAI integration.
          </p>
        </div>
        
        <div className="flex flex-col gap-32">
          <ZigZagProjectCard 
            title="DisVibe"
            url="#"
            tags={["GenAI", "Full-Stack", "Product Architect"]}
            description="An innovative SaaS platform that empowers communities and creators by allowing them to seamlessly generate, customize, and deploy AI-driven Discord bots tailored to their specific engagement needs."
            context="Project DisVibe: A SaaS platform for creating AI Discord bots. Tech stack includes Next.js, Node.js, vector databases, and OpenAI/Gemini models. It scales using serverless functions and containerized bot instances."
            suggestedQuestions={[
              "What is the tech stack?", 
              "How are the AI bots generated?", 
              "How does it scale?"
            ]}
            features={[
              "No-Code Bot Generation: Empowering communities to seamlessly build and configure custom Discord bots without writing code.",
              "Seamless Cloud Deployment: Instant, automated hosting and scaling of live bot instances with a single click.",
              "Advanced GenAI Capabilities: Tailoring bot behaviors, personalities, and prompt responses using cutting-edge models."
            ]}
            images={[
              "https://picsum.photos/seed/disvibe1/800/450",
              "https://picsum.photos/seed/disvibe2/800/450",
              "https://picsum.photos/seed/disvibe3/800/450"
            ]}
            imageOnRight={true}
          />
          
          <ZigZagProjectCard 
            title="Srich"
            url="#"
            tags={["AI Search Engine", "MLOps", "Backend"]}
            description="An advanced, high-performance AI-powered search and recommendation engine designed specifically for e-commerce platforms, utilizing hybrid search architecture to deliver hyper-relevant product discoveries."
            context="Project Srich: An AI search engine for e-commerce. Uses hybrid search (dense vector embeddings + sparse keyword search BM25). Utilizes Qdrant for vector DB. Recommendation logic uses collaborative filtering and embedding similarity."
            suggestedQuestions={[
              "What makes the search hybrid?", 
              "How is Qdrant/Vector DB utilized?", 
              "How does the recommendation logic work?"
            ]}
            features={[
              "Hybrid Search Architecture: Blending traditional keyword matching with deep semantic vector search for hyper-accurate discovery.",
              "Ultra-Low Latency Performance: Optimizing real-time recommendation and retrieval pipelines specifically for e-commerce scale.",
              "Qdrant Vector DB Integration: High-performance storage and indexing of product embedding spaces."
            ]}
            images={[
              "https://picsum.photos/seed/srich1/800/450",
              "https://picsum.photos/seed/srich2/800/450"
            ]}
            imageOnRight={false}
          />

          <ZigZagProjectCard 
            title="AWN"
            url="#"
            tags={["Full-Stack", "AI Integration", "SaaS"]}
            description="A production-grade SaaS digital product built to streamline workflows and deliver intelligent automated solutions, focusing heavily on intuitive user experience and robust data handling."
            context="Project AWN: A workflow automation SaaS. My role was lead full-stack engineer and AI integrator. It solves the problem of manual data entry by using LLMs to parse unstructured documents. Data is structured in a relational database with strict validation."
            suggestedQuestions={[
              "What was your primary role?", 
              "What is the core problem AWN solves?", 
              "How is the data structured?"
            ]}
            features={[
              "Production-Grade SaaS Infrastructure: Engineered for robust data handling, strict security standards, and high reliability.",
              "Automated Workflow Optimization: Intelligently streamlining continuous operations and multi-tenant processes.",
              "Intuitively Tailored UX: Designed with deep focus on responsive interfaces and clean data visualizations."
            ]}
            images={[
              "https://picsum.photos/seed/awn1/800/450",
              "https://picsum.photos/seed/awn2/800/450"
            ]}
            imageOnRight={true}
          />
        </div>
      </section>

      <section id="models" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">ML Models & Engineering</h2>
          <p className="text-neutral-400 max-w-2xl">
            Deep machine learning engineering, distinguishing my work from standard full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ModelCard 
            title="Domain-Specific LLM Classifier"
            type="Fine-Tuned"
            roles={["MLE", "Data Engineering"]}
            description="Fine-tuning an open-source foundational LLM on domain-specific datasets to optimize response accuracy, alignment, and latency for tailored business use-cases."
            context="Model: Domain-Specific Classifier. Base model was Llama 3 8B. Training techniques included LoRA (Low-Rank Adaptation) and DPO (Direct Preference Optimization). Evaluation metrics were F1-score, precision, recall, and latency degradation."
            suggestedQuestions={[
              "What was the base model?", 
              "What training techniques were used?", 
              "What were the evaluation metrics?"
            ]}
          />

          <ModelCard 
            title="Custom Vector Embeddings Pipeline"
            type="Built From Scratch"
            roles={["Machine Learning Engineer"]}
            description="Architecting and training a custom neural network from the ground up, optimizing data preprocessing pipelines, loss functions, and architectural layers for specialized feature extraction."
            context="Model: Custom Neural Network for feature extraction. Built from scratch to handle a proprietary, highly unbalanced dataset where off-the-shelf models failed. Data preprocessing included SMOTE and custom augmentation. Optimized using Triplet Margin Loss."
            suggestedQuestions={[
              "Why build from scratch?", 
              "How did you handle data preprocessing?", 
              "What loss function was optimized?"
            ]}
          />
        </div>
      </section>
      
      <footer className="py-8 text-center text-neutral-500 text-sm border-t border-neutral-900">
        <p>© {new Date().getFullYear()} AI Engineer Portfolio. Crafted with precision.</p>
      </footer>
    </main>
  );
}
