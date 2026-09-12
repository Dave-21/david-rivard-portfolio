type SubCategory = {
  name: string
  skills: string[]
}

type SkillDomain = {
  id: string
  title: string
  subtitle: string
  accentColor: {
    dot: string
    skillPill: string
  }
  subCategories: SubCategory[]
}

const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ai-ml',
    title: 'AI, Machine Learning & Computer Vision',
    subtitle:
      'Deep learning architectures, computer vision pipelines, acceleration runtimes, and agentic workflows.',
    accentColor: {
      dot: 'bg-blue-500',
      skillPill: 'badge-pill-blue',
    },
    subCategories: [
      {
        name: 'Deep Learning & LLMs',
        skills: [
          'PyTorch',
          'Keras',
          'Hugging Face Transformers',
          'Hugging Face Datasets',
          'Hugging Face Accelerate',
          'TRL',
          'PEFT',
          'LoRA / QLoRA',
          'Qwen2.5-VL',
          'Kimi-VL',
          'Supervised Fine-Tuning (SFT)',
          'Direct Preference Optimization (DPO)',
          'SimPO',
          'Curriculum Learning',
          'ML.NET',
        ],
      },
      {
        name: 'Computer Vision',
        skills: [
          'OpenCV',
          'Pillow (PIL)',
          'Albumentations',
          'YOLO (Object Detection)',
          'Frame Differencing',
          'Background Subtraction',
          'Image Geolocation',
          'Haversine Distance',
          'Tesseract OCR',
          'DeepFace',
          'Visual Reasoning',
          'Scene Understanding',
          'Image Augmentation',
        ],
      },
      {
        name: 'ML Acceleration',
        skills: [
          'vLLM',
          'DeepSpeed',
          'FlashAttention-2',
          'PyTorch AMP',
          'FP8 Quantization',
          'NF4 Quantization',
          'INT8 Quantization',
          'CUDA',
          'bitsandbytes',
          'Batched Inference',
        ],
      },
      {
        name: 'AI Tools & Agents',
        skills: [
          'LangGraph',
          'Model Context Protocol (MCP)',
          'Claude Code',
          'Prompt Engineering',
          'Prompt Ablation',
          'RAG Pipelines',
          'Vector Retrieval',
          'Semantic Reranking',
        ],
      },
    ],
  },
  {
    id: 'languages-frameworks',
    title: 'Languages & Web Engineering',
    subtitle:
      'Core programming languages, backend frameworks, API architecture, and full stack systems.',
    accentColor: {
      dot: 'bg-purple-500',
      skillPill: 'badge-pill-purple',
    },
    subCategories: [
      {
        name: 'Programming Languages',
        skills: [
          'Python',
          'C++',
          'C',
          'C#',
          'Go',
          'TypeScript',
          'JavaScript',
          'PHP',
          'SQL',
          'Bash / Shell',
          'HTML5',
          'CSS3',
        ],
      },
      {
        name: 'Web & Backend Frameworks',
        skills: [
          'React',
          'Next.js',
          'ASP.NET MVC',
          '.NET Core',
          'Django',
          'Flask',
          'FastAPI',
          'RESTful APIs',
          'Apache (mod_rewrite)',
          'Vite',
          'Tailwind CSS',
          'AJAX / Fetch',
        ],
      },
      {
        name: 'Systems & Architecture',
        skills: [
          'Data Structures & Algorithms',
          'Object-Oriented Design (OOD)',
          'Multithreading',
          'Asynchronous Programming',
          'Serial Protocols (RS-232)',
          'Unit Testing & Verification',
        ],
      },
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Databases',
    subtitle:
      'High throughput telemetry ingestion, streaming pipelines, relational design, and query optimization.',
    accentColor: {
      dot: 'bg-emerald-500',
      skillPill: 'badge-pill-emerald',
    },
    subCategories: [
      {
        name: 'Data Pipelines & Streaming',
        skills: [
          'Apache Kafka',
          'Apache Spark (PySpark)',
          'Python Multiprocessing',
          'Custom Data Loaders',
          'ETL Pipelines',
          'Data Streaming',
          'Batch Processing',
          'Pandas',
          'NumPy',
          'Geocoding (GeoNames, OSM)',
        ],
      },
      {
        name: 'Databases & Storage',
        skills: [
          'PostgreSQL',
          'MySQL',
          'MariaDB',
          'Microsoft SQL Server',
          'Redis',
          'SQLite',
          'Vector Databases',
        ],
      },
      {
        name: 'Database Optimization',
        skills: [
          '3NF Normalization',
          'B-Tree Indexing',
          'Composite Indexing',
          'Query Optimization',
          'ACID Transactions',
          'Referential Integrity',
          'Checksum Verification',
          'PDO Prepared Statements',
        ],
      },
    ],
  },
  {
    id: 'cloud-devops-hpc',
    title: 'Platform, DevOps & High-Performance Computing',
    subtitle:
      'Multi node GPU clusters, container orchestration, Linux systems, and automated CI/CD.',
    accentColor: {
      dot: 'bg-amber-500',
      skillPill: 'badge-pill-amber',
    },
    subCategories: [
      {
        name: 'High-Performance Computing (HPC)',
        skills: [
          'SLURM Workload Manager',
          'Multi-Node GPU Clusters',
          'NVIDIA H100 GPUs',
          'NVIDIA V100 GPUs',
          'CUDA Environments',
          'CUDA / GCC Compatibility',
          'Parallel Experiment Sweeps',
          'Checkpoint Evaluation',
        ],
      },
      {
        name: 'Containers & Linux',
        skills: [
          'Docker',
          'Kubernetes',
          'Linux (Ubuntu, RHEL)',
          'Bash Automation',
          'Conda / Mamba',
          'Reproducible Environments',
        ],
      },
      {
        name: 'Cloud & CI/CD Automation',
        skills: [
          'AWS',
          'Azure',
          'Google Cloud (GCP)',
          'GitHub Actions CI/CD',
          'Terraform',
          'GitOps',
          'Automated Pipeline Testing',
          'Virtual Machine Deployment',
        ],
      },
    ],
  },
]

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {SKILL_DOMAINS.map((domain) => (
        <div
          key={domain.id}
          className="p-6 rounded-2xl glass-card space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Clean, Uncluttered Domain Header */}
            <div className="pb-3 border-b border-slate-200/80 dark:border-neutral-800/80">
              <h3 className="text-lg font-extrabold text-heading">
                {domain.title}
              </h3>
              <p className="text-xs text-subheading font-medium mt-1">
                {domain.subtitle}
              </p>
            </div>

            {/* Sub-Category Groups */}
            <div className="space-y-4">
              {domain.subCategories.map((sub) => (
                <div key={sub.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${domain.accentColor.dot}`}
                    />
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-main">
                      {sub.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md ${domain.accentColor.skillPill} transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
