function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <a
          className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Dave-21"
        >
          <ArrowIcon />
          <span>GitHub</span>
        </a>
        <a
          className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          rel="noopener noreferrer"
          target="_blank"
          href="https://linkedin.com/in/david-rivard-304b6a242"
        >
          <ArrowIcon />
          <span>LinkedIn</span>
        </a>
        <a
          className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          href="mailto:davidrivard4@gmail.com"
        >
          <ArrowIcon />
          <span>Email</span>
        </a>
      </div>

      <p>© {new Date().getFullYear()} David Rivard. All rights reserved.</p>
    </footer>
  )
}
