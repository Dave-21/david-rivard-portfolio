import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getProjectPosts } from 'app/projects/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getProjectPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post = getProjectPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title: `${title} | David Rivard`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post = getProjectPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const { title, publishedAt, summary, techStack, metric, category } =
    post.metadata
  const tags = techStack ? techStack.split(',') : []

  return (
    <article className="space-y-8 py-4">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProjectPosting',
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'David Rivard',
            },
          }),
        }}
      />

      {/* Back Link */}
      <div>
        <Link
          href="/#experience"
          className="inline-flex items-center text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Experience
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-2">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/50">
              {category}
            </span>
          )}
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            {formatDate(publishedAt)}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {summary}
        </p>

        {/* Metric Highlight Box */}
        {metric && (
          <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                Key Impact & Outcome
              </div>
              <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                {metric}
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        {tags.length > 0 && (
          <div className="pt-2">
            <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
              TECHNOLOGIES USED
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MDX Body */}
      <div className="prose">
        <CustomMDX source={post.content} />
      </div>
    </article>
  )
}
