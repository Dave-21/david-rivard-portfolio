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
          className="inline-flex items-center text-xs font-bold text-subheading hover:text-blue-600 dark:hover:text-blue-400 transition-colors gap-1"
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
      <div className="space-y-4 pb-6 border-b border-slate-300 dark:border-neutral-800">
        <div className="flex items-center justify-between gap-2">
          {category && (
            <span className="text-xs font-bold uppercase tracking-wider badge-pill-blue px-3 py-1 rounded-full">
              {category}
            </span>
          )}
          <span className="text-xs text-muted-main font-mono font-bold">
            {formatDate(publishedAt)}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-heading leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-body-main leading-relaxed font-medium">
          {summary}
        </p>

        {/* Metric Highlight Box */}
        {metric && (
          <div className="p-4 rounded-xl badge-pill-emerald flex items-center gap-3 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider">
                Key Impact & Outcome
              </div>
              <div className="text-sm font-extrabold">
                {metric}
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        {tags.length > 0 && (
          <div className="pt-2">
            <div className="text-xs font-bold text-muted-main mb-2">
              TECHNOLOGIES USED
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-md badge-pill-neutral"
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
