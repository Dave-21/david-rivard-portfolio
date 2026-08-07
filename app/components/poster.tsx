'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ResearchPosterProps {
  title?: string
  subtitle?: string
  previewSrc?: string
  pdfSrc?: string
  externalUrl?: string
  aspectRatioClass?: string
}

export function ResearchPoster({
  title = 'Research Poster Presentation',
  subtitle = 'Published & Presented Research Poster',
  previewSrc = '/posters/geohipo-poster-preview.png',
  pdfSrc = '/posters/GeoHiPO-Poster.pdf',
  externalUrl,
  aspectRatioClass = 'aspect-[4/3]',
}: ResearchPosterProps) {
  const [showEmbed, setShowEmbed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Handle body scroll locking & Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen])

  return (
    <div className="my-8 rounded-2xl glass-card p-4 sm:p-6 space-y-4 not-prose">
      {/* Header Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-neutral-800 pb-3">
        <div>
          <h3 className="text-base sm:text-lg font-extrabold text-heading flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-subheading font-medium pt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowEmbed(!showEmbed)}
            type="button"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {showEmbed ? 'Hide Embedded PDF' : 'Inline PDF View'}
          </button>
          
          <button
            onClick={() => setIsFullscreen(true)}
            type="button"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-extrabold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </button>

          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-heading font-extrabold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              External Link ↗
            </a>
          )}
        </div>
      </div>

      {/* Main Unobscured Poster Display */}
      {showEmbed ? (
        <div className={`w-full ${aspectRatioClass} rounded-xl overflow-hidden border border-slate-300 dark:border-neutral-700 bg-black/5 shadow-inner`}>
          <iframe
            src={pdfSrc}
            title={title}
            allow="fullscreen"
            className="w-full h-full border-none"
          />
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-900 shadow-md">
          {/* Clickable High-DPI Poster Image */}
          <button
            onClick={() => setIsFullscreen(true)}
            type="button"
            title="Click to view fullscreen poster"
            className="w-full text-left block cursor-zoom-in relative group"
          >
            <Image
              src={previewSrc}
              alt={title}
              width={2000}
              height={2400}
              priority
              className={`w-full h-auto ${aspectRatioClass} object-contain bg-slate-900/5 transition-transform duration-300`}
            />
            
            {/* Floating Bottom Badge */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl shadow-lg opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              Click for Fullscreen
            </div>
          </button>
        </div>
      )}

      {/* Footer Info & Large Download Button */}
      <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-muted-main pt-2 gap-3">
        <span className="font-semibold">Research Poster View</span>
        <div className="flex items-center gap-3">
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition-colors shadow-sm cursor-pointer flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          onClick={() => setIsFullscreen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
        >
          {/* Modal Header Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col sm:flex-row sm:items-center justify-between text-white pb-4 max-w-6xl w-full mx-auto cursor-default shrink-0 gap-3"
          >
            <div>
              <h4 className="font-extrabold text-lg sm:text-xl">{title}</h4>
              {subtitle && <p className="text-xs sm:text-sm text-neutral-400 font-medium">{subtitle}</p>}
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base transition-colors shadow-md flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <button
                onClick={() => setIsFullscreen(false)}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-sm sm:text-base transition-colors shadow-md cursor-pointer flex items-center gap-2"
                aria-label="Close Fullscreen"
              >
                <svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close
              </button>
            </div>
          </div>

          {/* Modal PDF Viewer Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex-1 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl flex items-center justify-center relative cursor-default min-h-0"
          >
            <iframe
              src={pdfSrc}
              title={title}
              allow="fullscreen"
              className="w-full h-full border-none"
            />
          </div>

          <div className="text-center pt-3 text-xs sm:text-sm text-neutral-400 font-semibold">
            Tap outside the box or press Esc to close
          </div>
        </div>
      )}
    </div>
  )
}
