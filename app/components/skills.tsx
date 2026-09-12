type SubCategory = {
  name: string
  skills: string[]
}

type SkillDomain = {
  id: string
  title: string
  subtitle: string
  subCategories: SubCategory[]
}

const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle:
      'Deep learning models, vision pipelines, acceleration runtimes, and agentic workflows.',
    subCategories: [
      {
        name: 'Deep Learning & LLMs',
        skills: [
          'PyTorch',
          'Keras',
          'Transformers',
          'Qwen2.5-VL',
          'Kimi-VL',
          'LoRA / QLoRA',
          'Direct Preference Optimization (DPO)',
          'SimPO',
          'Supervised Fine-Tuning (SFT)',
          'Curriculum Learning',
          'ML.NET',
        ],
      },
      {
        name: 'Computer Vision',
        skills: [
          'OpenCV',
          'YOLO (Object Detection)',
          'Tesseract OCR',
          'DeepFace',
          'Albumentations',
          'Pillow (PIL)',
          'Frame Differencing',
          'Background Subtraction',
          'Image Geolocation',
          'Haversine Distance',
        ],
      },
      {
        name: 'ML Acceleration',
        skills: [
          'vLLM',
          'DeepSpeed',
          'FlashAttention-2',
          'PyTorch AMP',
          'CUDA',
          'bitsandbytes',
          'FP8 / INT8 Quantization',
          'Batched Inference',
        ],
      },
      {
        name: 'Agents & RAG',
        skills: [
          'LangGraph',
          'Model Context Protocol (MCP)',
          'Claude Code',
          'RAG Pipelines',
          'Vector Databases',
          'Semantic Reranking',
          'Prompt Engineering',
        ],
      },
    ],
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    subtitle:
      'Core programming languages, web frameworks, desktop software, and system design.',
    subCategories: [
      {
        name: 'Programming Languages',
        skills: [
          'Python',
          'C++',
          'C',
          'C#',
          'TypeScript',
          'JavaScript',
          'Go',
          'PHP',
          'SQL',
          'Bash / Shell',
          'HTML5',
          'CSS3',
        ],
      },
      {
        name: 'Web & APIs',
        skills: [
          'React',
          'Next.js',
          'Node.js',
          'FastAPI',
          'Django',
          'Flask',
          'ASP.NET Core',
          'RESTful APIs',
          'Vite',
          'Tailwind CSS',
          'AJAX / Fetch',
        ],
      },
      {
        name: 'Desktop & Mobile',
        skills: [
          'WPF',
          'WinUI 3',
          'WinForms',
          '.NET MAUI',
          'Blazor',
          'Razor Pages',
          'XAML',
        ],
      },
      {
        name: 'Architecture & Systems',
        skills: [
          'Data Structures & Algorithms',
          'Object-Oriented Design',
          'Multithreading',
          'Asynchronous I/O',
          'Serial Protocols (RS-232)',
          'Unit Testing',
        ],
      },
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    subtitle:
      'Telemetry ingestion, streaming pipelines, database architecture, and query optimization.',
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
          'PDO Prepared Statements',
        ],
      },
    ],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    subtitle:
      'GPU cluster management, container orchestration, Linux systems, and automated CI/CD.',
    subCategories: [
      {
        name: 'High-Performance Computing (HPC)',
        skills: [
          'SLURM Workload Manager',
          'Multi-Node GPU Clusters',
          'NVIDIA H100',
          'NVIDIA V100',
          'CUDA Environments',
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
        name: 'Cloud & CI/CD',
        skills: [
          'AWS',
          'Azure',
          'Google Cloud (GCP)',
          'GitHub Actions CI/CD',
          'Terraform',
          'GitOps',
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
          className="p-6 rounded-2xl glass-card space-y-5 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {/* Simple, Crisp Header */}
            <div className="pb-3 border-b border-slate-200/80 dark:border-neutral-800/80">
              <h3 className="text-lg font-extrabold text-heading">
                {domain.title}
              </h3>
              <p className="text-xs text-subheading font-medium mt-1">
                {domain.subtitle}
              </p>
            </div>

            {/* Clean Sub-Category Groups */}
            <div className="space-y-4">
              {domain.subCategories.map((sub) => (
                <div key={sub.name} className="space-y-1.5">
                  <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {sub.name}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-slate-200 dark:border-neutral-700/60 hover:border-blue-500/60 dark:hover:border-blue-400/60 transition-colors"
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
