export type ItemCategory =
  | "Production Project"
  | "ML Model & Weights"
  | "Research Paper"
  | "Prototype & Open Source";

export type FrsLabFilter =
  | "All"
  | "Models"
  | "Papers"
  | "Open Source & Paper-to-Code";

export type ArticleTopic =
  | "Systems & Architecture"
  | "LLMs & Fine-Tuning"
  | "Research Notes";

export interface NewsUpdate {
  id: string;
  date: string;
  badge: string;
  title: string;
  articleSlug: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  subtitle: string;
  category: ItemCategory;
  labType?: Exclude<FrsLabFilter, "All">;
  articleTopic: ArticleTopic;
  tags: string[];
  summary: string;
  externalUrl: string;
  aiContext: string;
  suggestedQuestions: string[];
  deployedIn?: {
    projectName: string;
    projectSlug: string;
  };
  poweredByLab?: {
    labTitle: string;
    labSlug: string;
  }[];
  features?: string[];
  images?: string[];
  imageOnRight?: boolean;
  article: {
    publishedDate: string;
    readTime: string;
    authorName: string;
    authorRole: string;
    heroImage?: string;
    heroCaption?: string;
    leadParagraph: string;
    sections: {
      heading: string;
      paragraphs: string[];
      quote?: string;
      codeBlock?: {
        language: string;
        code: string;
      };
      bulletPoints?: string[];
    }[];
  };
}

export const LATEST_NEWS: NewsUpdate[] = [
  {
    id: "news-1",
    date: "Nov 2026",
    badge: "FRS LAB · Paper",
    title:
      "Published Preprint on Low-Latency Grammar-Constrained LoRA Routing for Multi-Agent Systems",
    articleSlug: "low-latency-intent-routing-paper",
  },
  {
    id: "news-2",
    date: "Oct 2026",
    badge: "Production Launch",
    title:
      "Launched SAIOS v3.0: Sovereign Multi-Agent Operating System Powered by FRS LAB Custom Weights",
    articleSlug: "saios",
  },
  {
    id: "news-3",
    date: "Sep 2026",
    badge: "FRS LAB · Weights",
    title:
      "Open-Sourced Custom 180M Vector Embeddings Pipeline with Triplet Margin Loss on Hugging Face",
    articleSlug: "custom-vector-embeddings-pipeline",
  },
  {
    id: "news-4",
    date: "Aug 2026",
    badge: "FRS LAB · OSS",
    title:
      "Shipped AVX-512 & Lock-Free C++20 KV-Cache Slab Allocator for High-Throughput Inference",
    articleSlug: "cpp-kv-cache-slab-allocator",
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. PRODUCTION PROJECTS
  {
    slug: "saios",
    title: "SAIOS",
    subtitle: "Sovereign AI Operating System & Multi-Agent Production Platform",
    category: "Production Project",
    articleTopic: "Systems & Architecture",
    tags: ["Multi-Agent OS", "Full-Stack SaaS", "MLOps", "vLLM"],
    summary:
      "A production multi-agent operating system that orchestrates autonomous reasoning workflows, deterministic tool execution, and hybrid vector memory powered directly by custom fine-tuned models from FRS LAB.",
    externalUrl: "https://github.com/Ferashayan",
    aiContext:
      "Project SAIOS (Sovereign AI Operating System): Flagship production multi-agent platform. Uses a DAG-based supervisor runtime, Qdrant hybrid vector memory, and integrates custom models from FRS LAB including the Domain-Specific Llama-3 8B LoRA Router (38.4ms TTFT) and the C++20 KV-Cache Slab Allocator.",
    suggestedQuestions: [
      "How does SAIOS orchestrate multiple agents?",
      "Which FRS LAB models are deployed inside SAIOS?",
      "How does SAIOS prevent agent hallucinations?",
    ],
    poweredByLab: [
      {
        labTitle: "Domain-Specific LLM Classifier (LoRA/DPO)",
        labSlug: "domain-specific-llm-classifier",
      },
      {
        labTitle: "Grammar-Constrained LoRA Routing Paper",
        labSlug: "low-latency-intent-routing-paper",
      },
    ],
    images: [
      "https://picsum.photos/seed/saios1/800/450",
      "https://picsum.photos/seed/saios2/800/450",
    ],
    imageOnRight: true,
    article: {
      publishedDate: "October 28, 2026",
      readTime: "7 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer",
      heroImage: "https://picsum.photos/seed/saios1/1200/630",
      heroCaption:
        "SAIOS Control Plane: Real-time multi-agent DAG execution backed by FRS LAB custom LoRA routers.",
      leadParagraph:
        "Most agent frameworks treat LLMs as black-box API endpoints, chaining slow, unconstrained prompts that fail unpredictably in production. SAIOS was architected as a vertically integrated AI Operating System where the application layer, memory engine, and custom fine-tuned model weights co-design around deterministic execution.",
      sections: [
        {
          heading: "Bridging FRS LAB Research into Production SaaS",
          paragraphs: [
            "Rather than routing every agent decision through a slow commercial frontier model, SAIOS delegates intent classification and tool parameter binding to our custom Rank-64 LoRA/DPO router trained in FRS LAB. This cuts P99 routing latency from 690ms down to 38.4ms.",
            "Every tool invocation is governed by a finite-state grammar mask compiled directly from TypeScript and Zod schemas, guaranteeing 100% valid JSON payloads across multi-step workflows.",
          ],
          quote:
            "Owning the stack from custom LoRA weights in FRS LAB up to the multi-agent orchestration UI is the only way to achieve sub-50ms agentic responsiveness.",
        },
        {
          heading: "Episodic Vector Memory & Fault-Tolerant Execution",
          paragraphs: [
            "SAIOS maintains long-horizon context across sessions using a two-tier memory architecture: hot conversational state in Redis Streams and dense-sparse hybrid embeddings indexed in Qdrant.",
          ],
          bulletPoints: [
            "38.4ms P99 intent routing via FRS LAB's fine-tuned Llama-3 8B classifier.",
            "Deterministic DAG supervisor with automatic rollback and human-in-the-loop checkpoints.",
            "Zero-copy C++20 KV-cache slab management for high-concurrency multi-tenant serving.",
          ],
        },
      ],
    },
  },
  {
    slug: "disvibe",
    title: "DisVibe",
    subtitle: "AI-Driven Community Bot Generation & Cloud Deployment SaaS",
    category: "Production Project",
    articleTopic: "Systems & Architecture",
    tags: ["GenAI", "Full-Stack", "Product Architect"],
    summary:
      "An innovative SaaS platform that empowers communities and creators to seamlessly generate, customize, and deploy AI-driven Discord bots tailored to their specific engagement needs.",
    externalUrl: "https://github.com/Ferashayan",
    aiContext:
      "Project DisVibe: A SaaS platform for creating AI Discord bots. Tech stack includes Next.js, Node.js, Qdrant vector databases, and fine-tuned open-weight/Gemini models. It scales using serverless functions and containerized bot instances with S-LoRA adapter pooling from FRS LAB.",
    suggestedQuestions: [
      "What is the tech stack?",
      "How are the AI bots generated?",
      "How does it scale?",
    ],
    poweredByLab: [
      {
        labTitle: "Custom Vector Embeddings Pipeline (180M)",
        labSlug: "custom-vector-embeddings-pipeline",
      },
    ],
    images: [
      "https://picsum.photos/seed/disvibe1/800/450",
      "https://picsum.photos/seed/disvibe2/800/450",
      "https://picsum.photos/seed/disvibe3/800/450",
    ],
    imageOnRight: false,
    article: {
      publishedDate: "October 18, 2026",
      readTime: "6 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer",
      heroImage: "https://picsum.photos/seed/disvibe1/1200/630",
      heroCaption:
        "DisVibe Studio: Visual persona orchestration and single-click container deployment pipeline.",
      leadParagraph:
        "Building an AI Discord bot for a single server is straightforward; building a multi-tenant SaaS platform where thousands of non-technical creators can synthesize, align, and host persistent community agents without blowing up GPU memory is an entirely different systems challenge.",
      sections: [
        {
          heading: "The Problem with Prompt-Wrapped Community Bots",
          paragraphs: [
            "Most community bots rely on thin wrappers around commercial LLM APIs. Within twenty conversational turns in a busy Discord guild, these bots suffer from severe persona drift, lose track of community-specific context, and become prohibitively expensive to run at scale.",
            "With DisVibe, the objective was to give creators a zero-code studio to define behavioral boundaries, upload custom knowledge bases, and deploy an isolated, always-on bot instance in under 15 seconds.",
          ],
          quote:
            "True product velocity in AI SaaS comes from pairing an effortless creator UX with deeply optimized multi-tenant inference under the hood.",
        },
        {
          heading: "Full-Stack & Multi-Tenant Architecture",
          paragraphs: [
            "The frontend control plane is engineered in Next.js, communicating with a distributed Node.js and Redis Streams event ingestion layer. When guild events arrive over Discord Gateway shards, DisVibe retrieves episodic memory from tenant-namespaced Qdrant vector collections before dispatching inference requests.",
            "Rather than spinning up heavy model replicas per user, DisVibe pools base weights and dynamically hot-swaps lightweight LoRA persona adapters in shared VRAM.",
          ],
          bulletPoints: [
            "Next.js & TypeScript control studio with real-time webhook diagnostics.",
            "Qdrant hybrid search powered by FRS LAB's 180M Custom Vector Embeddings Pipeline.",
            "Automated Docker container lifecycle management with sub-12-second cold starts.",
          ],
        },
      ],
    },
  },
  {
    slug: "srich",
    title: "Srich",
    subtitle: "High-Performance Hybrid AI Search & Recommendation Engine",
    category: "Production Project",
    articleTopic: "Systems & Architecture",
    tags: ["AI Search Engine", "MLOps", "Backend"],
    summary:
      "An advanced, high-performance AI-powered search and recommendation engine designed specifically for e-commerce platforms, utilizing hybrid search architecture to deliver hyper-relevant product discoveries.",
    externalUrl: "https://github.com/Ferashayan",
    aiContext:
      "Project Srich: An AI search engine for e-commerce. Uses hybrid search (dense vector embeddings from FRS LAB + sparse keyword search BM25) via Reciprocal Rank Fusion. Utilizes Qdrant for vector DB and C++20 AVX-512 SIMD kernels for low-latency scoring.",
    suggestedQuestions: [
      "What makes the search hybrid?",
      "How is Qdrant/Vector DB utilized?",
      "How does the recommendation logic work?",
    ],
    poweredByLab: [
      {
        labTitle: "Custom Vector Embeddings Pipeline (180M)",
        labSlug: "custom-vector-embeddings-pipeline",
      },
      {
        labTitle: "C++20 Lock-Free Slab Allocator & SIMD Kernels",
        labSlug: "cpp-kv-cache-slab-allocator",
      },
    ],
    images: [
      "https://picsum.photos/seed/srich1/800/450",
      "https://picsum.photos/seed/srich2/800/450",
    ],
    imageOnRight: true,
    article: {
      publishedDate: "September 29, 2026",
      readTime: "7 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer",
      heroImage: "https://picsum.photos/seed/srich1/1200/630",
      heroCaption:
        "Srich Hybrid Retrieval Pipeline: Merging dense semantic vectors with BM25 lexical precision.",
      leadParagraph:
        "In e-commerce search, pure semantic vector search fails when shoppers type exact model numbers or SKU identifiers, while pure keyword search fails when shoppers describe a style or use-case in natural language. Srich bridges both worlds with sub-10ms P99 latency.",
      sections: [
        {
          heading: "Why E-Commerce Demands Hybrid Retrieval",
          paragraphs: [
            "When a user searches for 'waterproof trail running jacket under $150', dense embeddings excel at capturing semantic intent. However, when they search for 'GTX-9402-BLK', dense vectors blur token boundaries. Srich executes parallel dense HNSW lookups and sparse BM25 inverted-index queries inside Qdrant.",
          ],
          quote:
            "Search relevance is not a choice between lexical precision and semantic understanding—production engines fuse both in a single pass.",
        },
        {
          heading: "Reciprocal Rank Fusion & Real-Time Personalization",
          paragraphs: [
            "Candidate sets from both retrieval heads are combined via Reciprocal Rank Fusion (RRF) and re-ranked using session-level collaborative filtering signals. As a shopper clicks or filters items, their session vector shifts in real time to surface high-conversion alternatives.",
          ],
          codeBlock: {
            language: "typescript",
            code: `// Reciprocal Rank Fusion (RRF) score aggregation in Srich
export function fuseRankings(denseIds: string[], sparseIds: string[], k = 60) {
  const scores = new Map<string, number>();
  denseIds.forEach((id, rank) => scores.set(id, (scores.get(id) ?? 0) + 1 / (k + rank + 1)));
  sparseIds.forEach((id, rank) => scores.set(id, (scores.get(id) ?? 0) + 1 / (k + rank + 1)));
  return [...scores.entries()].sort((a, b) => b[1] - a[1]);
}`,
          },
        },
      ],
    },
  },

  // 2. FRS LAB ITEMS (Models, Papers, Open Source & Paper-to-Code)
  {
    slug: "domain-specific-llm-classifier",
    title: "Domain-Specific LLM Classifier",
    subtitle: "Fine-Tuned Llama 3 8B with LoRA & Direct Preference Optimization",
    category: "ML Model & Weights",
    labType: "Models",
    articleTopic: "LLMs & Fine-Tuning",
    tags: ["Fine-Tuned", "Hugging Face", "LoRA / DPO"],
    summary:
      "Fine-tuning an open-source foundational LLM on domain-specific datasets to optimize response accuracy, alignment, and sub-40ms latency for production agent routing.",
    externalUrl: "https://huggingface.co",
    deployedIn: {
      projectName: "SAIOS",
      projectSlug: "saios",
    },
    aiContext:
      "FRS LAB Model: Domain-Specific LLM Classifier deployed in SAIOS. Base model: Llama 3 8B. Training techniques: Rank-64 LoRA (Low-Rank Adaptation) and DPO (Direct Preference Optimization). Evaluation metrics: 96.4% F1-score, precision, recall, and 38.4ms TTFT latency.",
    suggestedQuestions: [
      "What was the base model?",
      "What training techniques were used?",
      "How is this model deployed inside SAIOS?",
    ],
    article: {
      publishedDate: "October 04, 2026",
      readTime: "8 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer · FRS LAB",
      heroImage: "https://picsum.photos/seed/llmmodel/1200/630",
      heroCaption:
        "Training loss and F1 convergence across Rank-64 LoRA + DPO fine-tuning runs in FRS LAB.",
      leadParagraph:
        "General-purpose frontier models are overkill for specialized routing and domain classification tasks—introducing 600ms+ network latency and high token costs. By fine-tuning Llama 3 8B with Rank-64 LoRA and Direct Preference Optimization (DPO) in FRS LAB, we surpassed zero-shot frontier accuracy at a fraction of the latency.",
      sections: [
        {
          heading: "Dataset Curation & Hard-Negative Mining",
          paragraphs: [
            "Model quality is bounded by data quality. We curated 142,000 domain-specific instruction and classification traces, augmenting the training split with synthetic hard-negative examples designed to test boundary conditions and ambiguous user intents.",
          ],
        },
        {
          heading: "LoRA Architecture & DPO Post-Training",
          paragraphs: [
            "Rather than full-parameter fine-tuning, we attached Rank-64 Low-Rank Adaptation (LoRA) matrices across all attention and MLP linear projections (q, k, v, o, gate, up, down). Following supervised fine-tuning (SFT), we applied Direct Preference Optimization (DPO) to penalize verbose reasoning preambles and enforce strict output formatting.",
          ],
          codeBlock: {
            language: "python",
            code: `peft_config = LoraConfig(
    r=64,
    lora_alpha=128,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)`,
          },
          bulletPoints: [
            "Macro F1-Score improved from 91.8% (zero-shot baseline) to 96.4%.",
            "Median Time-To-First-Token (TTFT) reduced to 38.4ms using FP8 KV-cache quantization.",
            "Deployed directly in SAIOS as the primary multi-agent intent router.",
          ],
        },
      ],
    },
  },
  {
    slug: "custom-vector-embeddings-pipeline",
    title: "Custom Vector Embeddings Pipeline",
    subtitle: "180M Bi-Encoder Trained From Scratch with Triplet Margin Loss",
    category: "ML Model & Weights",
    labType: "Models",
    articleTopic: "LLMs & Fine-Tuning",
    tags: ["Built From Scratch", "Hugging Face", "Triplet Loss"],
    summary:
      "Architecting and training a custom 180M neural network from the ground up, optimizing SMOTE data preprocessing pipelines, Triplet Margin loss functions, and Matryoshka layers for specialized feature extraction.",
    externalUrl: "https://huggingface.co",
    deployedIn: {
      projectName: "DisVibe & Srich",
      projectSlug: "disvibe",
    },
    aiContext:
      "FRS LAB Model: Custom Vector Embeddings Pipeline deployed in DisVibe and Srich. Built from scratch to handle a proprietary, highly unbalanced dataset where off-the-shelf models failed. Data preprocessing included manifold SMOTE and custom augmentation. Optimized using Matryoshka Triplet Margin Loss.",
    suggestedQuestions: [
      "Why build from scratch?",
      "How did you handle data preprocessing?",
      "What loss function was optimized?",
    ],
    article: {
      publishedDate: "September 12, 2026",
      readTime: "7 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer · FRS LAB",
      heroImage: "https://picsum.photos/seed/embeddings/1200/630",
      heroCaption:
        "2D UMAP projection of learned embedding clusters after Triplet Margin Loss optimization.",
      leadParagraph:
        "Off-the-shelf embedding models like text-embedding-3-large are trained on broad web corpora. When applied to proprietary datasets with severe 1:400 class imbalance and specialized alphanumeric tokens, they suffer from representation collapse. Here is how I architected and trained a custom embedding pipeline from scratch in FRS LAB.",
      sections: [
        {
          heading: "Overcoming Extreme Class Imbalance with Manifold SMOTE",
          paragraphs: [
            "In our target domain, tail classes had fewer than 50 labeled examples while head classes had tens of thousands. Standard mini-batch contrastive learning ignores tail classes. We implemented custom manifold SMOTE interpolation paired with domain-aware token augmentation to balance mini-batch geometry.",
          ],
        },
        {
          heading: "Optimizing Multi-Scale Triplet Margin Loss",
          paragraphs: [
            "We trained a custom bidirectional transformer encoder using semi-hard negative mining with Triplet Margin Loss across nested Matryoshka dimensions (64d, 128d, 256d, 768d). This allows production vector databases in DisVibe and Srich to truncate vectors to 256 dimensions while retaining 99.1% recall.",
          ],
          quote:
            "Training from scratch is justified when domain topology violates the assumptions of general web pre-training.",
        },
      ],
    },
  },
  {
    slug: "low-latency-intent-routing-paper",
    title: "Grammar-Constrained LoRA Routing in Multi-Agent Systems",
    subtitle: "Research Paper · Preprint & Empirical Benchmark Study (2026)",
    category: "Research Paper",
    labType: "Papers",
    articleTopic: "Research Notes",
    tags: ["arXiv Preprint", "Agentic Systems", "Constrained Decoding"],
    summary:
      "An empirical study demonstrating how hierarchy-aware 8B LoRA routers with finite-state grammar decoding reduce multi-agent orchestration latency by 94.4% compared to monolithic frontier planners.",
    externalUrl: "https://github.com/Ferashayan",
    deployedIn: {
      projectName: "SAIOS",
      projectSlug: "saios",
    },
    aiContext:
      "FRS LAB Research Paper: Grammar-Constrained LoRA Routing in Multi-Agent Systems. Proves that decoupling routing topology from open-ended generation allows an 8B LoRA model with FSM logit masking to achieve 38.4ms routing latency and 96.4% tool-call F1. Implemented in production inside SAIOS.",
    suggestedQuestions: [
      "What is the core hypothesis of this paper?",
      "How does grammar-constrained decoding work?",
      "What were the main benchmark findings?",
    ],
    article: {
      publishedDate: "November 02, 2026",
      readTime: "9 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer · FRS LAB",
      heroImage: "https://picsum.photos/seed/researchpaper/1200/630",
      heroCaption:
        "Latency vs. Multi-Step Tool F1 pareto frontier across 8B LoRA routers and commercial APIs.",
      leadParagraph:
        "Autoregressive reasoning traces in general-purpose LLMs consume over 80% of their token budget on redundant deliberation before selecting a tool. In this FRS LAB paper, we formulate multi-agent intent routing as a grammar-constrained decoding problem over fine-tuned 8B open weights.",
      sections: [
        {
          heading: "Abstract & Hypothesis",
          paragraphs: [
            "When chaining five or more specialized agents, calling a frontier model at every routing node compounds network and generation latency to over 3.5 seconds per user turn. We hypothesized that intent classification and parameter binding over a bounded toolset require minimal parameter capacity when paired with compile-time schema masks.",
          ],
        },
        {
          heading: "Methodology: Finite-State Logit Masking + DPO",
          paragraphs: [
            "We compiled JSON tool schemas into compressed vocabulary bitmasks executed directly on GPU logit buffers in under 80 microseconds per step, guaranteeing 100% syntactic validity under greedy decoding.",
          ],
          bulletPoints: [
            "94.4% reduction in P99 routing latency (from 690ms to 38.4ms).",
            "+4.6% improvement in multi-tool F1 accuracy over zero-shot frontier baselines.",
            "23x reduction in inference compute cost per 10,000 agent workflows in SAIOS.",
          ],
        },
      ],
    },
  },
  {
    slug: "cpp-kv-cache-slab-allocator",
    title: "C++20 Lock-Free KV-Cache Slab Allocator & SIMD Kernels",
    subtitle: "Paper-to-Code Implementation & Open-Source Inference Tooling",
    category: "Prototype & Open Source",
    labType: "Open Source & Paper-to-Code",
    articleTopic: "Systems & Architecture",
    tags: ["C++20 / CUDA", "Rust FFI", "Paper-to-Code"],
    summary:
      "High-performance low-level systems engineering: a lock-free 64-byte aligned C++20 slab arena for paged KV-cache management and AVX-512 SIMD kernels for sparse-dense vector scoring.",
    externalUrl: "https://github.com/Ferashayan",
    deployedIn: {
      projectName: "SAIOS & Srich",
      projectSlug: "saios",
    },
    aiContext:
      "FRS LAB Open-Source & Paper-to-Code: C++20 Lock-Free KV-Cache Slab Allocator and AVX-512 SIMD BM25/INT8 dot-product kernels. Eliminates heap allocation jitter in LLM serving hot loops (-41% P99 latency jitter) and accelerates hybrid vector scoring by 3.8x.",
    suggestedQuestions: [
      "What memory problem does the slab allocator solve?",
      "How fast is the AVX-512 SIMD kernel?",
      "Why write this in C++20 and Rust instead of Python?",
    ],
    article: {
      publishedDate: "August 22, 2026",
      readTime: "6 min read",
      authorName: "Feras",
      authorRole: "AI Research Engineer · FRS LAB",
      heroImage: "https://picsum.photos/seed/cppsystems/1200/630",
      heroCaption:
        "Cache-line aligned 64-byte slab ring buffer eliminating dynamic allocation jitter in inference hot loops.",
      leadParagraph:
        "Modern AI engineering does not stop at Python APIs. When serving hundreds of concurrent agent requests or scoring 250,000 hybrid vector candidates per query, memory fragmentation and scalar CPU loops become the primary bottleneck.",
      sections: [
        {
          heading: "Zero-Allocation Hot Loops with C++20 Atomic Slabs",
          paragraphs: [
            "Dynamic memory allocations during variable-length sequence batching introduce unpredictable tail-latency spikes. By pre-allocating page-aligned memory arenas and claiming blocks via lock-free compare-and-swap (CAS) atomic pointers, we eliminated heap fragmentation entirely.",
          ],
          codeBlock: {
            language: "cpp",
            code: `inline void* SlabArena::allocate_block() noexcept {
  uint32_t head = free_head_.load(std::memory_order_acquire);
  while (head != kEmptyIndex) {
    uint32_t next = next_slot_[head];
    if (free_head_.compare_exchange_weak(head, next, std::memory_order_acq_rel)) {
      return base_ptr_ + (static_cast<size_t>(head) << kBlockShift);
    }
  }
  return nullptr;
}`,
          },
        },
        {
          heading: "AVX-512 Quantized Dot-Product Kernels",
          paragraphs: [
            "Alongside the arena allocator, we implemented custom AVX-512 INT8 dot-product and sparse galloping intersection kernels exposed to Rust and Python via zero-copy FFI bindings, achieving a 3.8x throughput speedup on production retrieval workloads.",
          ],
        },
      ],
    },
  },
];

export function getPortfolioItemBySlug(
  slug: string
): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug);
}

export function getProductionProjects(): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter(
    (item) => item.category === "Production Project"
  );
}

export function getFrsLabItems(
  filter: FrsLabFilter = "All"
): PortfolioItem[] {
  const labItems = PORTFOLIO_ITEMS.filter(
    (item) => item.category !== "Production Project"
  );
  if (filter === "All") {
    return labItems;
  }
  return labItems.filter((item) => item.labType === filter);
}

export function getArticlesByTopic(
  topic: ArticleTopic | "All" = "All"
): PortfolioItem[] {
  if (topic === "All") {
    return PORTFOLIO_ITEMS;
  }
  return PORTFOLIO_ITEMS.filter((item) => item.articleTopic === topic);
}
