import { onMounted, onBeforeUnmount } from 'vue'

let observer = null
const observed = new WeakSet()

function ensureObserver() {
  if (observer) return observer
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    },
  )
  return observer
}

export function useReveal(rootRef) {
  onMounted(() => {
    const obs = ensureObserver()
    if (!obs) return

    const root = rootRef?.value ?? document
    const els = root.querySelectorAll('.reveal, .split-line__inner')
    els.forEach((el) => {
      if (!observed.has(el)) {
        observed.add(el)
        obs.observe(el)
      }
    })
  })

  onBeforeUnmount(() => {
    // Observer is shared - we leave it for other components.
  })
}
