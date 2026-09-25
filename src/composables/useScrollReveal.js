import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const observe = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = document.querySelectorAll('.reveal:not(.revealed), .reveal-scale:not(.revealed)')

    if (!nodes.length) return

    if (prefersReduced) {
      nodes.forEach((el) => el.classList.add('revealed'))
      return
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
      )
    }

    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0
      if (inView) {
        el.classList.add('revealed')
      } else {
        observer.observe(el)
      }
    })
  }

  onMounted(() => {
    observe()
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { observe }
}
