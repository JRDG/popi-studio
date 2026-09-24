'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncWithSystem = () => {
      setIsDark(mediaQuery.matches)
      document.documentElement.classList.toggle('dark', mediaQuery.matches)
      document.documentElement.classList.remove('light')
    }
    syncWithSystem()
    mediaQuery.addEventListener('change', syncWithSystem)
    return () => mediaQuery.removeEventListener('change', syncWithSystem)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    document.documentElement.classList.toggle('dark', nextIsDark)
    document.documentElement.classList.toggle('light', !nextIsDark)
    setIsDark(nextIsDark)
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      <span>{isDark ? 'Claro' : 'Oscuro'}</span>
    </button>
  )
}
