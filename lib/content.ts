export const description =
  "Machine learning engineer at Avaamo in Bengaluru, working on unstructured data, low-latency model serving, and evaluation.";

export const profile = {
  name: "Siddhartha Bhat",
  role: "Machine Learning Engineer",
  company: "Avaamo",
  location: "Bengaluru, India",
  email: "work.siddharthabhat@gmail.com",
  phoneDisplay: "+91 63624 17789",
  phoneHref: "tel:+916362417789",
  github: "https://github.com/SBhat2615",
  githubHandle: "SBhat2615",
  linkedin: "https://www.linkedin.com/in/siddhartha-bhat-9236b11b6",
  linkedinHandle: "siddhartha-bhat-9236b11b6",
  twitter: "https://x.com/Siddhar93196627",
  twitterHandle: "@Siddhar93196627",
  resumePath: "/Siddhartha-Bhat-Resume.pdf",
  tagline: "Machine Learning Engineer · AI Tinkerer",
};

export const verse = {
  lines: [
    "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्\u00a0।",
    "अयुक्तः कामकारेण फले सक्तो निबध्यते\u00a0॥",
  ],
  source: "Bhagavad Gītā 5.12",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const about = [
  "At Avaamo, I work on turning unstructured enterprise data into answers people can find and trust. My work spans document processing, search and retrieval, and low-latency model serving. I also focus on making these systems efficient and reliable in production through caching, autoscaling, continuous evaluation, and observability.",
  "Before Avaamo, I was a PRISM intern at Samsung R&D Institute India, where I fine-tuned CodeT5 for code generation from CVE security patches. At IoTracX, I trained a YOLOv8 model to detect people in drone imagery from forest-fire zones and deployed it on an edge device.",
  "I graduated from Manipal Institute of Technology in 2024 with a B.Tech in Computer Science and Engineering.",
];

export type HighlightGroup = {
  heading: string;
  items: string[];
};

export type Role = {
  period: string;
  title: string;
  org: string;
  orgUrl?: string;
  location: string;
  groups: HighlightGroup[];
};

export const roles: Role[] = [
  {
    period: "Jan 2024 — Present",
    title: "Machine Learning Engineer",
    org: "Avaamo",
    orgUrl: "https://avaamo.ai",
    location: "Bengaluru, Karnataka",
    groups: [
      {
        heading: "Unstructured data and retrieval",
        items: [
          "Built a document extraction pipeline across more than 20 PDF and HTML parsers, with section hierarchy kept through token-budget chunking. Prototyped LLM-based structure correction for malformed documents.",
          "Improved retrieval recall by 20% on identifier- and keyword-heavy queries with hybrid Milvus dense retrieval and Elasticsearch BM25, using weighted reciprocal rank fusion and denormalized attribute filtering.",
          "Added LLM-based query correction, NER-driven spell correction, and alternate-query generation, with alternate fan-out capped by retriever score before reranking.",
          "Built a text-to-SQL tool for PostgreSQL, MySQL, and CSV/Excel, with LLM-guided table filtering, foreign-key graphs, and generated table and column descriptions.",
        ],
      },
      {
        heading: "Low-latency serving",
        items: [
          "Built a self-hosted vLLM service on Kubernetes for an FP8-quantized 27B model, exposed as an OpenAI-compatible streaming API. It handles 100K+ requests a day. Moving that traffic off a hosted API reduced LLM spend from about $7,000 to $1,000 a month, and batch-size and KV-cache tuning increased throughput per GPU by 67%.",
          "Moved reranker and embedding serving from ONNX Runtime to NVIDIA Triton, with gRPC connection pooling, dynamic batching, and separate priority for query and ingestion. Query latency fell by up to 40×.",
          "Added exact and semantic caching of generated answers, and a citations-only generation mode that cut output tokens by 60%. Concurrent identical requests are de-duplicated with Redis stream replay.",
          "Added KEDA autoscaling for Celery workers across four Kubernetes clusters, scaling from Redis queue depth.",
        ],
      },
      {
        heading: "Evaluation",
        items: [
          "Set up LLM-as-a-judge regression tests across customer deployments, checking correctness and semantic faithfulness. This cut manual QA effort by 70%.",
        ],
      },
      {
        heading: "Contributions",
        items: [
          "Streaming ASR over WebSocket using faster-whisper and Qwen3-ASR, with a wav2vec2 check to drop hallucinated transcripts during silence.",
          "PII detection covering 40+ entity types, moving from GLiNER to LLM-based extraction and adding Redis caching.",
        ],
      },
    ],
  },
  {
    period: "Sep 2023 — Dec 2023",
    title: "PRISM Intern",
    org: "Samsung R&D Institute India",
    location: "Remote",
    groups: [
      {
        heading: "",
        items: [
          "Fine-tuned CodeT5 for text-to-code generation on CVE security patches. CodeBLEU improved by 2% over the baseline. Built and cleaned a multi-task training dataset.",
          "Received a Certificate of Excellence, ranked among the top five projects in the internship.",
        ],
      },
    ],
  },
  {
    period: "Jun 2023 — Aug 2023",
    title: "AI Intern",
    org: "IoTracX Pvt. Ltd.",
    location: "Manipal, Karnataka",
    groups: [
      {
        heading: "",
        items: [
          "Built a YOLOv8 model for locating people in forest-fire zones, at 93.4% test accuracy on drone imagery. Deployed it as TensorFlow Lite on an NVIDIA Torizon device via Docker.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  href: string;
  detail: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Job board",
    href: "https://github.com/SBhat2615/job-board",
    detail:
      "A local tracker for job applications. Each saved posting keeps the referral contact and a follow-up date, and moves through feed, outreach, applied, or discarded. It can pull roles from public Greenhouse, Lever, and Ashby boards and merges the same role listed on two boards. Development is paused.",
    tags: ["FastAPI", "SQLite", "pytest"],
  },
  {
    name: "Fungus ROI Detection",
    href: "https://github.com/SBhat2615/Fungus-ROI-Detection",
    detail:
      "YOLOv8 experiments for finding fungal regions in microscopy images. The repository has prediction scripts that load an Ultralytics checkpoint, notes comparing that path with YOLOv5, and work on polygon labels and a segmentation model.",
    tags: ["Python", "YOLOv8"],
  },
  {
    name: "StudyHub",
    href: "https://github.com/SBhat2615/StudyHub",
    detail:
      "A Django app with topics, rooms, and messages, plus search, profiles, and email login. Django REST framework exposes the same records. Realtime chat was left unfinished.",
    tags: ["Django", "Django REST framework"],
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
    kind: "Student robotics club",
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
