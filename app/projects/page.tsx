import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Technical Projects',
  description: 'Technical engineering projects by David Rivard.',
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
          Technical Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          Systems engineering, computer vision pipelines, time series forecasting models, and software re platforming.
        </p>
      </div>

      <ProjectPosts />
    </div>
  )
}
