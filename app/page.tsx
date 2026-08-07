import Link from 'next/link'

export default function Page() {
  return (
    <div className="space-y-16 py-4">
      {/* HERO SECTION */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-heading">
            David Rivard
          </h1>
          <p className="text-xl font-bold text-subheading">
            Software Engineer
          </p>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-body-main max-w-3xl font-medium">
          Software Engineer specializing in scalable backend services, cloud infrastructure, container orchestration, and CI/CD automation. Experienced in building fault tolerant data pipelines and high availability distributed systems designed for reliability and performance.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="mailto:davidrivard4@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          <a
            href="https://github.com/Dave-21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card font-bold text-sm transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/david-rivard-304b6a242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card font-bold text-sm transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <span className="text-xs text-muted-main font-mono font-bold ml-auto">
            Cornell, MI • (906) 233-8015
          </span>
        </div>

        {/* Compact High-Contrast Career Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="py-3 px-3 rounded-xl glass-card text-center flex flex-col justify-center">
            <div className="text-lg sm:text-xl font-extrabold text-blue-600 dark:text-blue-400 whitespace-nowrap">7+ Yrs</div>
            <div className="text-[11px] text-subheading font-bold">Software Development</div>
          </div>
          <div className="py-3 px-3 rounded-xl glass-card text-center flex flex-col justify-center">
            <div className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">3.9</div>
            <div className="text-[11px] text-subheading font-bold">GPA (B.S. CS)</div>
          </div>
          <div className="py-3 px-3 rounded-xl glass-card text-center flex flex-col justify-center">
            <div className="text-base sm:text-lg font-extrabold text-purple-600 dark:text-purple-400 whitespace-nowrap">High Throughput</div>
            <div className="text-[11px] text-subheading font-bold">ETL & Data Pipelines</div>
          </div>
          <div className="py-3 px-3 rounded-xl glass-card text-center flex flex-col justify-center">
            <div className="text-base sm:text-lg font-extrabold text-amber-600 dark:text-amber-400 whitespace-nowrap">Multi Node</div>
            <div className="text-[11px] text-subheading font-bold">Linux GPU Clusters</div>
          </div>
        </div>
      </section>

      <hr className="border-slate-300 dark:border-neutral-800" />

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-heading">
            Professional Experience
          </h2>
          <p className="text-sm font-semibold text-subheading">
            Engineering roles across cloud infrastructure, data pipelines, backend services, and automated systems. Click any position title to view full system details.
          </p>
        </div>

        <div className="space-y-6">
          {/* LSSU x DTE ENERGY */}
          <div className="p-6 rounded-2xl glass-card hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/dte-steam-plant-ai-optimization"
                className="text-lg font-extrabold text-heading hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(16,185,129,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(52,211,153,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                Software Engineer →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-emerald px-2.5 py-1 rounded-md w-fit">
                Apr 2025, Present
              </span>
            </div>
            <div className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
              Lake Superior State University in partnership with DTE Energy (Remote / Sault Ste. Marie, MI)
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Architected fault tolerant data ingestion pipelines processing continuous inputs from over 400 industrial sensors, reducing data processing latency by up to 90 seconds and achieving 98% uptime.
              </li>
              <li>
                Optimized predictive heating demand forecast models in Python, improving accuracy from 81% to 94% and deployed internal dashboards for live plant monitoring and optimization.
              </li>
              <li>
                Engineered autonomous systems and workflow automations using LangGraph and MCP, implementing strict guardrails and rigorous human in the loop code reviews to ensure reliability.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/dte-steam-plant-ai-optimization"
                className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline gap-1"
              >
                View System Details and Architecture →
              </Link>
            </div>
          </div>

          {/* UCF CRCV */}
          <div className="p-6 rounded-2xl glass-card hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/vlm-geolocation-research"
                className="text-lg font-extrabold text-heading hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(37,99,235,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(96,165,250,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                AI Research Intern →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-blue px-2.5 py-1 rounded-md w-fit">
                May 2025, Aug 2025
              </span>
            </div>
            <div className="text-sm font-bold text-blue-800 dark:text-blue-300">
              University of Central Florida, Center for Research in Computer Vision (Orlando, FL)
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Deployed parallel workloads across multi node Linux clusters using Docker, automating the high throughput ingestion and curation of datasets containing over 30 million images.
              </li>
              <li>
                Wrote highly optimized data pipelines and conducted rigorous peer reviews, reducing overall image processing by over 100 hours per dataset, and inference iterations by weeks.
              </li>
              <li>
                Scaled geolocation model inference on V100 and H100 SLURM clusters running up to 30 experiments concurrently to cut iteration time.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/vlm-geolocation-research"
                className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline gap-1"
              >
                View Pipeline and Cluster Details →
              </Link>
            </div>
          </div>

          {/* LSSU LLM LEAD */}
          <div className="p-6 rounded-2xl glass-card hover:border-amber-500/60 dark:hover:border-amber-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/custom-llm-rag-architecture"
                className="text-lg font-extrabold text-heading hover:text-amber-600 dark:hover:text-amber-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(217,119,6,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(251,191,36,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                AI Research Lead (University Research) →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-amber px-2.5 py-1 rounded-md w-fit">
                Aug 2024, May 2025
              </span>
            </div>
            <div className="text-sm font-bold text-amber-800 dark:text-amber-300">
              Lake Superior State University (Sault Ste. Marie, MI)
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Architected and trained a custom Large Language Model from the ground up, implementing advanced prompt engineering and semantic search RAG retrieval systems.
              </li>
              <li>
                Delivered AI enablement presentations and research posters to university leadership including the University President to demystify complex LLM concepts and drive institutional adoption.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/custom-llm-rag-architecture"
                className="inline-flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline gap-1"
              >
                View LLM Architecture and RAG Details →
              </Link>
            </div>
          </div>

          {/* LSSU SATELLITE TRACKER */}
          <div className="p-6 rounded-2xl glass-card hover:border-purple-500/60 dark:hover:border-purple-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/autonomous-leo-satellite-tracker"
                className="text-lg font-extrabold text-heading hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(147,51,234,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(192,132,252,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                Lead Software Engineer (University Research) →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-purple px-2.5 py-1 rounded-md w-fit">
                Aug 2024, May 2025
              </span>
            </div>
            <div className="text-sm font-bold text-purple-800 dark:text-purple-300">
              Lake Superior State University (Sault Ste. Marie, MI)
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Led a team building a scalable autonomous system to detect, identify, and track Low Earth Orbit satellites using small aperture optical cameras.
              </li>
              <li>
                Created algorithms for satellite identification, orbital trajectory prediction, and real time image processing.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/autonomous-leo-satellite-tracker"
                className="inline-flex items-center text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline gap-1"
              >
                View Autonomous System Details →
              </Link>
            </div>
          </div>

          {/* CHIPPEWA COUNTY CONTRACT PROJECT */}
          <div className="p-6 rounded-2xl glass-card hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/chippewa-county-inventory-system"
                className="text-lg font-extrabold text-heading hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(8,145,178,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(34,211,238,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                Software Engineer (Contract Project) →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-neutral px-2.5 py-1 rounded-md w-fit">
                Jan 2024, May 2024
              </span>
            </div>
            <div className="text-sm font-bold text-cyan-800 dark:text-cyan-300">
              Chippewa County Information Systems (Sault Ste. Marie, MI)
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Re-platformed an obsolete Access based county management system into a scalable modern web application, reducing critical reporting issues by nearly 45%.
              </li>
              <li>
                Designed and implemented RESTful APIs for high throughput asset tracking and document management, improving system wide data processing speeds by over 70%.
              </li>
              <li>
                Engineered secure data pipelines to seamlessly migrate legacy system data to modern relational databases with zero operational downtime while ensuring data integrity.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/chippewa-county-inventory-system"
                className="inline-flex items-center text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline gap-1"
              >
                View Web System and Migration Details →
              </Link>
            </div>
          </div>

          {/* FREELANCE */}
          <div className="p-6 rounded-2xl glass-card hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link
                href="/projects/scalable-etl-freelance-apps"
                className="text-lg font-extrabold text-heading hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:[text-shadow:0_0_18px_rgba(37,99,235,0.6)] dark:hover:[text-shadow:0_0_22px_rgba(96,165,250,0.75)] origin-left transition-all duration-300 ease-out inline-block w-fit"
              >
                Freelance Software Developer →
              </Link>
              <span className="text-xs font-mono font-bold badge-pill-blue px-2.5 py-1 rounded-md w-fit">
                Jan 2019, Dec 2022
              </span>
            </div>
            <div className="text-sm font-bold text-blue-800 dark:text-blue-300">
              Remote Client Projects
            </div>
            <ul className="list-disc pl-4 text-sm text-body-main space-y-1.5 pt-1">
              <li>
                Delivered technology enabled solutions for diverse clients, scoping independent projects end to end to build robust ETL pipelines and performant backend APIs in Python and C#.
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/projects/scalable-etl-freelance-apps"
                className="inline-flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline gap-1"
              >
                View Application and ETL Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-300 dark:border-neutral-800" />

      {/* TECHNICAL SKILLS SECTION */}
      <section id="skills" className="space-y-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-heading">
            Technical Skills
          </h2>
          <p className="text-sm font-semibold text-subheading">
            Tools, platforms, databases, and programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl glass-card space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Platform & DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'GCP', 'GitOps', 'CI/CD', 'Linux', 'SLURM', 'CUDA', 'Mamba/Conda'].map((skill) => (
                <span key={skill} className="text-xs font-mono font-bold px-2.5 py-1 rounded-md badge-pill-blue">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Programming & AI Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Go', 'C#', 'TypeScript', 'JavaScript', 'C++', 'C', 'PHP', 'Bash', 'REST APIs', 'PyTorch', 'Hugging Face', 'Claude Code', 'LangGraph', 'MCP'].map((skill) => (
                <span key={skill} className="text-xs font-mono font-bold px-2.5 py-1 rounded-md badge-pill-purple">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Systems & Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'MS SQL Server', 'MySQL', 'MariaDB', 'Redis', 'Apache Spark', 'Kafka', 'ETL Pipelines'].map((skill) => (
                <span key={skill} className="text-xs font-mono font-bold px-2.5 py-1 rounded-md badge-pill-emerald">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              ML Acceleration
            </h3>
            <div className="flex flex-wrap gap-2">
              {['vLLM', 'DeepSpeed', 'FlashAttention', 'bitsandbytes', 'PyTorch AMP', 'Quantization (FP8/NF4)'].map((skill) => (
                <span key={skill} className="text-xs font-mono font-bold px-2.5 py-1 rounded-md badge-pill-amber">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-300 dark:border-neutral-800" />

      {/* EDUCATION & AWARDS SECTION */}
      <section id="education" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold tracking-tight text-heading">
            Education
          </h2>
          <div className="p-6 rounded-2xl glass-card space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-extrabold text-heading">
                  Lake Superior State University
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                  B.S. in Computer Science
                </p>
              </div>
              <span className="text-xs font-mono font-bold badge-pill-emerald px-2 py-1 rounded">
                3.9 GPA
              </span>
            </div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
              Status: Graduated
            </p>
            <p className="text-xs text-body-main pt-2 leading-relaxed">
              <strong className="text-heading font-bold">Relevant Coursework:</strong> Software System Design, Data Structures and Algorithms, Operating Systems Concepts, Multi Platform App Development, Computer Architecture, Discrete Structures, Calculus I and II, Mathematical Proofs, and Independent Math Research.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-extrabold tracking-tight text-heading">
            Awards and Organizations
          </h2>
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <ul className="space-y-2 text-xs text-body-main font-medium">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">★</span>
                <span><strong className="text-heading font-bold">Dean’s List:</strong> Consecutively awarded 2021, 2022, 2023, 2024, 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">★</span>
                <span><strong className="text-heading font-bold">C# Programming Winner:</strong> Business Professionals of America Michigan 2023</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">★</span>
                <span><strong className="text-heading font-bold">Python Programming Winner:</strong> Business Professionals of America Michigan 2023</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">♥</span>
                <span><strong className="text-heading font-bold">Volunteer Work:</strong> Business Professionals of America, Escanaba River Association, Bay College, and LSSU</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
