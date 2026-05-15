import { onMounted, onBeforeUnmount } from 'vue'

const targets = []
let rafId = null
let scheduled = false
let prefersReducedMotion = false

function update() {
  scheduled = false
  if (prefersReducedMotion) return

  const vh = window.innerHeight

  for (const t of targets) {
    const el = t.el
    if (!el || !el.isConnected) continue
    const rect = el.getBoundingClientRect()
    if (rect.bottom < -200 || rect.top > vh + 200) continue

    const center = rect.top + rect.height / 2
    const progress = (center - vh / 2) / vh
    const y = -progress * t.speed * 100
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`
  }
}

function schedule() {
  if (scheduled) return
  scheduled = true
  rafId = requestAnimationFrame(update)
}

function onScroll() {
  schedule()
}

function ensureGlobalListeners() {
  if (typeof window === 'undefined') return
  if (targets.__bound) return
  targets.__bound = true

  prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  schedule()
}

export function useParallax(elRef, options = {}) {
  const { speed = 0.25 } = options
  const entry = { el: null, speed }

  onMounted(() => {
    entry.el = elRef.value
    if (!entry.el) return
    targets.push(entry)
    ensureGlobalListeners()
    schedule()
  })

  onBeforeUnmount(() => {
    const idx = targets.indexOf(entry)
    if (idx >= 0) targets.splice(idx, 1)
    if (rafId && targets.length === 0) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  })
}
