import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/#experience', name: 'Experience' },
  { path: '/#skills', name: 'Skills' },
  { path: '/#education', name: 'Education' },
]

export function Navbar() {
  return (
    <header className="mb-10 pt-2 pb-4 border-b border-slate-300 dark:border-neutral-800">
      <nav
        className="flex flex-row items-center justify-between relative px-0 fade max-w-full overflow-hidden"
        id="nav"
      >
        <Link
          href="/"
          className="text-base font-extrabold tracking-tight text-heading hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2.5 shrink-0"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black tracking-wider shadow-sm">
            DR
          </span>
        </Link>

        <div className="flex flex-row items-center space-x-0.5 sm:space-x-2 shrink-0">
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="transition-colors text-xs sm:text-sm font-bold text-subheading hover:text-heading py-1.5 px-2 sm:px-3 rounded-md hover:bg-slate-200/80 dark:hover:bg-neutral-800/60"
            >
              {name}
            </Link>
          ))}
          <div className="pl-1.5 sm:pl-2 border-l border-slate-300 dark:border-neutral-800 shrink-0">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
