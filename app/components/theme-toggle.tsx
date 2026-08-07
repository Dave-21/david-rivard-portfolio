'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isLight =
      document.documentElement.getAttribute('data-theme') === 'light' ||
      (!document.documentElement.classList.contains('dark') &&
        localStorage.getItem('theme') === 'light')
    setTheme(isLight ? 'light' : 'dark')
  }, [])

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark')

    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light and Dark Theme"
      type="button"
      className="theme-toggle-btn p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm flex items-center justify-center"
    >
      {theme === 'dark' ? (
        /* Glowing Yellow Sun Icon for Dark Mode -> Switch to Light */
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        /* Solid Jet-Black Moon Icon for Light Mode -> Switch to Dark */
        <svg
          className="w-5 h-5 text-slate-950 fill-slate-950"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}
