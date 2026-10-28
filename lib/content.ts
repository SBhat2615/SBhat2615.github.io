export const description =
  "Machine learning engineer in Bengaluru. Self-hosted LLM inference, hybrid retrieval, and the systems around them.";

export const profile = {
  name: "Siddhartha Bhat",
  role: "Machine Learning Engineer",
  location: "Bengaluru, India",
  email: "work.siddharthabhat@gmail.com",
  phoneDisplay: "+91 63624 17789",
  phoneHref: "tel:+916362417789",
  github: "https://github.com/SBhat2615",
  githubHandle: "SBhat2615",
  linkedin: "https://www.linkedin.com/in/siddhartha-bhat-9236b11b6",
  resumePath: "/Siddhartha-Bhat-Resume.pdf",
  lede: "Self-hosted inference, hybrid retrieval, and the services that keep them fast.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "background", label: "Background" },
] as const;

export const about = [
  "I am a machine learning engineer at Avaamo in Bengaluru. The work is the distance between a checkpoint and a product: serving, search, caching, extraction, and the checks that catch a quiet regression.",
  "One system I shipped runs an FP8-quantized 27B model on Kubernetes, behind an OpenAI-compatible streaming API, at more than 100,000 requests a day. Moving that traffic off a hosted API cut LLM spend from about $7,000 to $1,000 a month. Batch-size and KV-cache tuning raised throughput per GPU by 67%.",
  "I finished a B.Tech in Computer Science at Manipal Institute of Technology in 2024, with a CGPA of 8.81/10. Before Avaamo I interned at Samsung R&D, fine-tuning CodeT5 on security patches, and at IoTracX, detecting people in aerial imagery of forest-fire zones.",
];

export const metrics = [
  { value: "86%", label: "LLM spend cut, from $7K to $1K a month" },
  { value: "100K+", label: "Requests a day on a self-hosted 27B model" },
  { value: "40×", label: "Lower query latency after moving serving to Triton" },
  { value: "20%", label: "Retrieval recall gained on identifier-heavy queries" },
];

export type Highlight = {
  lead: string;
  detail: string;
};

export type Role = {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  location: string;
  highlights: Highlight[];
  tags: string[];
};

export const roles: Role[] = [
  {
    period: "Jan 2024 — Present",
    title: "Machine Learning Engineer",
    org: "Avaamo.ai",
    orgUrl: "https://avaamo.ai",
    location: "Bengaluru, Karnataka",
    tags: ["vLLM", "Kubernetes", "Triton", "Milvus", "Elasticsearch", "Redis"],
    highlights: [
      {
        lead: "Self-hosted vLLM.",
        detail:
          "Built and shipped a self-hosted vLLM inference service on Kubernetes, serving an FP8-quantized 27B model through an OpenAI-compatible streaming API. Scaled to 100K+ requests a day, cut LLM spend 86% ($7K to $1K a month), and improved throughput per GPU by 67% through batch-size and KV-cache tuning.",
      },
      {
        lead: "Hybrid retrieval.",
        detail:
          "Improved retrieval recall by 20% on identifier- and keyword-heavy queries with a hybrid Milvus dense retrieval and Elasticsearch BM25 pipeline, using weighted reciprocal rank fusion and denormalized attribute filtering.",
      },
      {
        lead: "Triton serving.",
        detail:
          "Reduced query-time inference latency by migrating reranker and embedding serving from ONNX Runtime to NVIDIA Triton, using semaphore-gated gRPC connection pooling, asynchronous execution, 1ms-window dynamic batching, and priority isolation between query and ingestion workloads. Latency fell by up to 40×.",
      },
      {
        lead: "Caching.",
        detail:
          "Lowered LLM serving cost with exact and semantic caching of generated answers, and a citations-only generation mode that cut output tokens by 60%. De-duplicated concurrent identical requests through atomic Redis stream replay.",
      },
      {
        lead: "Document extraction.",
        detail:
          "Built a pluggable document extraction pipeline across more than 20 PDF and HTML parsers, preserving section hierarchy with context-aware, token-budget chunking. Prototyped LLM-based structure correction for malformed documents.",
      },
      {
        lead: "Evaluation.",
        detail:
          "Automated LLM-as-a-judge regression testing across customer deployments, evaluating correctness and semantic faithfulness across model-specific structured outputs and parameters, cutting manual QA effort by 70%.",
      },
      {
        lead: "Autoscaling.",
        detail:
          "Implemented KEDA-based autoscaling for Celery workers across four Kubernetes clusters, scaling replicas from Redis queue depth to match ingestion backlog and prevent scaling thrash.",
      },
      {
        lead: "Query understanding.",
        detail:
          "Improved query understanding with LLM-based query correction, NER-driven spell correction, and alternate-query generation, capping alternate fan-out by retriever score before reranking to reduce cross-encoder compute.",
      },
      {
        lead: "Text-to-SQL.",
        detail:
          "Built a natural-language text-to-SQL platform across PostgreSQL, MySQL, and CSV/Excel sources, using LLM-guided table filtering, foreign-key relationship graphs, and generated table and column descriptions.",
      },
      {
        lead: "Streaming speech.",
        detail:
          "Contributed to a real-time streaming ASR service over WebSocket using faster-whisper and Qwen3-ASR, with a wav2vec2 verifier to suppress hallucinated transcripts during silence.",
      },
      {
        lead: "PII detection.",
        detail:
          "Contributed to a PII detection service covering 40+ entity types, migrating from GLiNER to LLM-based extraction and adding Redis caching to reduce redundant inference.",
      },
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    title: "PRISM Intern",
    org: "Samsung R&D Institute India",
    location: "Remote",
    tags: ["CodeT5", "PyTorch", "Hugging Face"],
    highlights: [
      {
        lead: "Text-to-code.",
        detail:
          "Fine-tuned CodeT5 for text-to-code generation on CVE security patches, improving CodeBLEU by 2% over the baseline. Built and cleaned a multi-task training dataset through exploratory analysis and data-quality checks.",
      },
      {
        lead: "Certificate of Excellence.",
        detail: "Ranked among the top five projects in the internship.",
      },
    ],
  },
  {
    period: "Jun 2023 — Aug 2023",
    title: "AI Intern",
    org: "IoTracX Pvt. Ltd.",
    location: "Manipal, Karnataka",
    tags: ["YOLOv8", "TensorFlow Lite", "Docker"],
    highlights: [
      {
        lead: "Aerial detection.",
        detail:
          "Developed a YOLOv8 system for locating people in forest-fire zones, at 93.4% test accuracy on drone imagery. Optimized and deployed the model as TensorFlow Lite on an NVIDIA Torizon edge device via Docker for real-time inference.",
      },
    ],
  },
];

export type Project = {
  index: string;
  name: string;
  year: string;
  href: string;
  summary: string;
  detail: string;
  tags: string[];
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Fungus ROI Detection",
    year: "2023",
    href: "https://github.com/SBhat2615/Fungus-ROI-Detection",
    summary: "YOLOv8 experiments for finding fungal regions in microscopy images.",
    detail:
      "Prediction scripts load an Ultralytics YOLOv8 checkpoint and run it on annotated microscopy frames. Notes in the repository compare that path with YOLOv5, and look at polygon labels plus a segmentation model whose masks would become the regions of interest.",
    tags: ["Python", "YOLOv8", "Jupyter"],
    image: {
      src: "/projects/fungus.jpg",
      width: 1400,
      height: 933,
      alt: "Microscopy frame from the Fungus ROI Detection repository, showing dark ringed bodies in tissue.",
      caption: "Sample microscopy frame from the repository.",
    },
  },
  {
    index: "02",
    name: "StudyHub",
    year: "2024",
    href: "https://github.com/SBhat2615/StudyHub",
    summary: "Django rooms for studying a topic together.",
    detail:
      "Topics, rooms, and a message thread in each room, with search, profiles, and a custom user that signs in by email. Django REST framework exposes the same records. Rooms, authentication, and the API shipped. Realtime chat stayed on the to-do list. It was deployed on PythonAnywhere; that public URL no longer responds, so the repository is the record.",
    tags: ["Django", "Django REST framework", "Python"],
  },
];

export const education = {
  school: "Manipal Institute of Technology",
  credential: "B.Tech, Computer Science and Engineering",
  period: "2020 — 2024",
  detail: "CGPA 8.81 / 10",
  location: "Manipal, Karnataka",
};

export const awards = [
  {
    period: "Sep 2021 — Oct 2023",
    title: "Coding Subsystem Lead",
    org: "Robotics and Circuits",
    location: "Manipal",
    points: [
      "Global top-12 finish in the 2022 International Virtual RobotX Competition, developing a real-time perception system.",
      "Project lead for the 2nd-ranked team, out of 42, at MIT Techfest. Led and mentored a 25-member computer vision team.",
    ],
  },
];

export const skills = [
  {
    label: "Languages",
    items: ["Python", "SQL", "C/C++"],
  },
  {
    label: "ML / AI",
    items: [
      "PyTorch",
      "Hugging Face",
      "vLLM",
      "NVIDIA Triton",
      "ONNX Runtime",
      "Azure OpenAI",
      "Vector search",
      "Reranking",
    ],
  },
  {
    label: "Frameworks and data",
    items: [
      "FastAPI",
      "Django",
      "Celery",
      "Milvus",
      "Elasticsearch",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "LangChain",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "Kubernetes",
      "Docker",
      "KEDA",
      "AWS (EC2, S3, SQS)",
      "Prometheus",
      "Grafana",
      "CI/CD",
      "gRPC",
    ],
  },
];
