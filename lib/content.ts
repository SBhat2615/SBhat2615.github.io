export const description =
  "Machine learning engineer at Avaamo in Bengaluru. B.Tech in Computer Science from Manipal Institute of Technology.";

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
  lede: "Avaamo, Bengaluru",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const about = [
  "I am a machine learning engineer at Avaamo in Bengaluru. I work on model serving, retrieval, caching, document extraction, and evaluation.",
  "I completed a B.Tech in Computer Science and Engineering at Manipal Institute of Technology in 2024, with a CGPA of 8.81/10. Before Avaamo I interned at Samsung R&D Institute India and at IoTracX.",
];

export type Role = {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  location: string;
  highlights: string[];
};

export const roles: Role[] = [
  {
    period: "Jan 2024 — Present",
    title: "Machine Learning Engineer",
    org: "Avaamo",
    orgUrl: "https://avaamo.ai",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Built a self-hosted vLLM service on Kubernetes for an FP8-quantized 27B model, exposed as an OpenAI-compatible streaming API. It handles 100K+ requests a day. Moving that traffic off a hosted API reduced LLM spend from about $7,000 to $1,000 a month. Batch-size and KV-cache tuning increased throughput per GPU by 67%.",
      "Improved retrieval recall by 20% on identifier- and keyword-heavy queries with hybrid Milvus dense retrieval and Elasticsearch BM25, using weighted reciprocal rank fusion and denormalized attribute filtering.",
      "Moved reranker and embedding serving from ONNX Runtime to NVIDIA Triton, with gRPC connection pooling, dynamic batching, and separate priority for query and ingestion. Query latency fell by up to 40×.",
      "Added exact and semantic caching of generated answers, and a citations-only generation mode that cut output tokens by 60%. Concurrent identical requests are de-duplicated with Redis stream replay.",
      "Built a document extraction pipeline across more than 20 PDF and HTML parsers, with section hierarchy kept through token-budget chunking. Prototyped LLM-based structure correction for malformed documents.",
      "Set up LLM-as-a-judge regression tests across customer deployments, checking correctness and semantic faithfulness. This cut manual QA effort by 70%.",
      "Added KEDA autoscaling for Celery workers across four Kubernetes clusters, scaling from Redis queue depth.",
      "Added LLM-based query correction, NER-driven spell correction, and alternate-query generation, with alternate fan-out capped by retriever score before reranking.",
      "Built a text-to-SQL tool for PostgreSQL, MySQL, and CSV/Excel, with LLM-guided table filtering, foreign-key graphs, and generated table and column descriptions.",
      "Contributed to a streaming ASR service over WebSocket using faster-whisper and Qwen3-ASR, with a wav2vec2 check to drop hallucinated transcripts during silence.",
      "Contributed to a PII detection service covering 40+ entity types, moving from GLiNER to LLM-based extraction and adding Redis caching.",
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    title: "PRISM Intern",
    org: "Samsung R&D Institute India",
    location: "Remote",
    highlights: [
      "Fine-tuned CodeT5 for text-to-code generation on CVE security patches. CodeBLEU improved by 2% over the baseline. Built and cleaned a multi-task training dataset.",
      "Received a Certificate of Excellence, ranked among the top five projects in the internship.",
    ],
  },
  {
    period: "Jun 2023 — Aug 2023",
    title: "AI Intern",
    org: "IoTracX Pvt. Ltd.",
    location: "Manipal, Karnataka",
    highlights: [
      "Built a YOLOv8 model for locating people in forest-fire zones, at 93.4% test accuracy on drone imagery. Deployed it as TensorFlow Lite on an NVIDIA Torizon device via Docker.",
    ],
  },
];

export type Project = {
  name: string;
  href: string;
  detail: string;
};

export const projects: Project[] = [
  {
    name: "Fungus ROI Detection",
    href: "https://github.com/SBhat2615/Fungus-ROI-Detection",
    detail:
      "YOLOv8 experiments for finding fungal regions in microscopy images. The repository has prediction scripts that load an Ultralytics checkpoint, notes comparing that path with YOLOv5, and work on polygon labels and a segmentation model.",
  },
  {
    name: "StudyHub",
    href: "https://github.com/SBhat2615/StudyHub",
    detail:
      "A Django app with topics, rooms, and messages, plus search, profiles, and email login. Django REST framework exposes the same records. Realtime chat was left unfinished. It was deployed on PythonAnywhere; that URL no longer responds.",
  },
];

export const education = {
  school: "Manipal Institute of Technology",
  credential: "B.Tech, Computer Science and Engineering",
  period: "2020 — 2024",
  detail: "CGPA 8.81 / 10",
  location: "Manipal, Karnataka",
};

export const activities = [
  {
    period: "Sep 2021 — Oct 2023",
    title: "Coding Subsystem Lead",
    org: "Robotics and Circuits",
    location: "Manipal",
    points: [
      "Global top-12 finish in the 2022 International Virtual RobotX Competition, on a real-time perception system.",
      "Project lead for the team that placed 2nd of 42 at MIT Techfest. Led a 25-member computer vision team.",
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
