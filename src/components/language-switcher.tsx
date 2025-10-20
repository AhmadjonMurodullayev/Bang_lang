'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  const currentLocale = pathname.split('/')[1] || 'uz'

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-white" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('uz')}
        className={`text-white hover:text-white/80 ${
          currentLocale === 'uz' ? 'bg-white/20' : ''
        }`}
      >
        UZ
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLanguage('ru')}
        className={`text-white hover:text-white/80 ${
          currentLocale === 'ru' ? 'bg-white/20' : ''
        }`}
      >
        RU
      </Button>
    </div>
  )
}
