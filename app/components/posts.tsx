import Link from 'next/link'
import { formatDate, getProjectPosts } from 'app/projects/utils'

export function ProjectPosts({ limit }: { limit?: number }) {
  let allProjects = getProjectPosts()

  // Sort by published date descending
  let sortedProjects = allProjects.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  })

  if (limit) {
    sortedProjects = sortedProjects.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedProjects.map((project) => {
        const { title, publishedAt, dateRange, summary, techStack } =
          project.metadata

        const tags = techStack ? techStack.split(',').slice(0, 4) : []

        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-2xl glass-card hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {dateRange || formatDate(publishedAt)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                {title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 mb-4 leading-relaxed">
                {summary}
              </p>
            </div>

            <div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/80 px-2 py-0.5 rounded"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                View Project Details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
