import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-coal text-white shadow-lg shadow-coal/40 transition-all duration-300 hover:-translate-y-1 hover:bg-flame ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0 translate-y-4'
      }`}
    >
      ↑
    </button>
  )
}
