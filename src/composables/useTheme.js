import { ref, watch, onMounted } from 'vue'

export const THEME_MODES = ['light', 'dark', 'monochrome']

export function useTheme() {
  const theme = ref('dark')

  const applyTheme = (value) => {
    const root = document.documentElement
    const body = document.body

    root.classList.remove('dark', 'theme-monochrome')
    body.classList.remove('dark', 'theme-monochrome')

    if (value === 'dark') {
      root.classList.add('dark')
      body.classList.add('dark')
    } else if (value === 'monochrome') {
      root.classList.add('theme-monochrome', 'dark')
      body.classList.add('theme-monochrome', 'dark')
    }
  }

  onMounted(() => {
    const stored = window.localStorage.getItem('theme')
    if (THEME_MODES.includes(stored)) {
      theme.value = stored
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = prefersDark ? 'dark' : 'light'
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!window.localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light'
      }
    })
  })

  watch(
    theme,
    (value) => {
      window.localStorage.setItem('theme', value)
      applyTheme(value)
    },
    { immediate: true },
  )

  const cycleTheme = () => {
    const index = THEME_MODES.indexOf(theme.value)
    theme.value = THEME_MODES[(index + 1) % THEME_MODES.length]
  }

  return { theme, cycleTheme, THEME_MODES }
}
